 
function Search({value,search}) {
    return (
        <>
            <input value={value} onInput={e => search(e.target.value)} />
        </>
    )
}
export  default Search;