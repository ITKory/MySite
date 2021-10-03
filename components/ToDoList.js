import styles from '../styles/Home.module.scss'
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = (count, offset = 0, text = "item") =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `${text}`,

    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


export default function ToDoList() {
    const [state, setState] = useState([]);
    function onDragEnd(result) {
        const { source, destination } = result;
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    };

    function addNewItem() {
        setState([...state, getItems(1, null, prompt('Task'))]);
    }
    function delItem(ind, index) {
        const newState = [...state];
        newState[ind].splice(index, 1);
        setState(
            newState.filter(group => group.length)
        );
    }
    function addNewGroup() {
        setState([...state, getItems(1, null, 'item')]);
    }

    return (
       <>
                <div>
                    <button
                        type="button"
                        onClick={() => addNewGroup()}
                    > Add new group
                    </button>

                    <button
                        type="button"
                        onClick={() => addNewItem()}
                    > Add new task
                    </button>
                </div>
                <div>
                    <div className={styles.grid} >
                        <DragDropContext onDragEnd={onDragEnd}>
                            {state.map((el, ind) => (
                                <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided, snapshot) => (
                                        <div
                                            className={styles.card}
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {el.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={styles.item}
                                                        >
                                                                <div>{item.content}</div>
                                                                <button
                                                                className={styles.delete}
                                                                    type="button"
                                                                    onClick={() => delItem(ind, index)}
                                                                >
                                                                    delete
                                                                </button>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            ))}
                        </DragDropContext>
                    </div>
                </div>
         </>
       
    )
}
