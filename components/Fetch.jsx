
import   { useState, useEffect } from 'react'
 //FIXME it will bw better
import Card from './Card.jsx';
function FilmsQuery({ film , page,items,updateItems }) {
    let uri = `https://www.omdbapi.com/?apikey=183ab52c&s=${film}&page=${page}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(
                (result) => {
                    updateItems(items,result.Search||[]);
                },
            )
    }, [film,page])
    try {
        return (
            <>
                {
                items.map(item => (
                    
                    <Card key={item.imdbID} filmID={item.imdbID} title={item.Title}  year={item.Year} image={item.Poster}/>
                ))
                }
            </>
            
        );
    } catch {

        return <div>Loading...</div>;
    }

};
export default FilmsQuery;