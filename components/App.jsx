import  { useState } from 'react'
import FilmsQuery from './Fetch.jsx'
import Search from './Search.jsx';
 

 

export default function App() {
   const [val, setVal] = useState("Terminator");
   const [page,setPage] = useState(1)
   const [items, setItems] = useState([]);
    return (
        <>
            <div className='filmContent'>
            <Search  value={val} search={(v)=>{setPage(1); setItems([]);setVal(v)}}/>
            <div className="filmContainer">
            <FilmsQuery updateItems={(oldI,newI)=>setItems([...oldI,...newI])} film={val} page={page} items={items}></FilmsQuery> 
            </div>
            <button onClick={()=>{setPage(page+1);{<FilmsQuery film={val} page={page}/>}}}>More</button>
            </div>
        </> 
    )
}