import './randomCharacter.scss';

const ViewCharacter = ({char}) => {
    const {thumbnail, name, description = "0", homepage, wiki} = char;
    const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "contain"} : null;
    return (
        <div className="randomCharacter__character">
            <div className="randomCharacter__img">
                <img src={thumbnail} alt={name} style={noFound}/>
            </div>
            <div className="randomCharacter__info">
                <h2 className="randomCharacter__name">{name}</h2>
                <p className="randomCharacter__descr">{description.length > 200 ? `${description.slice(0, 200)}...` : description }</p>
                <div className="randomCharacter__btns">
                    <a href={homepage} className="button" >HOMEPAGE</a>
                    <a href={wiki} className="button button__grey">WIKI</a>
                </div>
            </div>
        </div>
        )
} 

export default ViewCharacter