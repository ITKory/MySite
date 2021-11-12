 
function Search({value,search}) {
    return (
        <>
            <input className="search" value={value} onInput={e => search(e.target.value)}   />
        </>
    )
}
export  default Search;