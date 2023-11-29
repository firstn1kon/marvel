import Skeleton from "../skeleton/skeleton";
import { Link } from "react-router-dom";

const ViewCharInfo = ({char}) => {

    if(!char) {
      return <Skeleton/>
    }
    const {thumbnail, name, description, homepage, wiki, comics} = char;
    const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
    const comicsList = comics.map(({name,resourceURI}, i) => {
      const comicUrl = resourceURI.replace(/(v1)|([^\d])/g, "");
      return (
        <li key={i}><Link to={`comics/${comicUrl}`}>{name}</Link></li>
      )
    })

    return(
      <div style={{animation: `fadeIn .7s`}}>
        <div className="chooseCharacter__nav">
          <img src={thumbnail} alt={name} style={noFound}/>
          <div className="chooseCharacter__info">
              <h2>{name}</h2>
              <a href={homepage} className="button">HOMEPAGE</a>
              <a href={wiki} className="button button__grey">WIKI</a>
          </div>
        </div>
        <p>{description}</p>
        <h2>Comics:</h2>
        <ul>
          {comicsList.length === 0 ? "no comics avaliable for this character" : comicsList}
        </ul>
    </div>
    )
  }

  export default ViewCharInfo