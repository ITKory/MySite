import  { useState } from "react";
function Card({ filmID, title, year, image }) {
    let uri = `https://www.omdbapi.com/?i=${filmID}&plot=short&apikey=183ab52c`
    const [plot,setPlot] = useState()
     fetch(uri)
        .then(res => res.json())
        .then(
            (result) => {
                setPlot(result.Plot)
             
            },
        )
    return (
        <>
            <div className="filmCard">
                <div className="face face1">
                    <a href={`https://www.imdb.com/title/${filmID}`} className="content">
                        <h2 className="back">{title} {year}</h2>
                        <p className="back">{plot}</p>
                    </a>
                    <div className="face face2" style={{ backgroundImage: `url(${image}) ` }}></div>

                </div>
            </div>
        </>
    )
}
export default Card;

