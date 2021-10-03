 
 

function Card({filmID,title,year,image}) {
    return (
        <>
            <div className="filmCard">
                <div   className="face face1">
                    <a href={`https://www.imdb.com/title/${filmID}`} className="content">
                         <h2 className="back">{title} {year}</h2>
                        <p className="back">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptatem facere tempore deleniti error illo libero non aut voluptate, at minima perspiciatis repudiandae. At sunt quod mollitia rem, nihil molestiae.</p>
                    </a>
                <div className="face face2" style={{backgroundImage:`url(${image})`}}></div>
               
                </div>
            </div>
        </>
    )
}
export default Card;

 