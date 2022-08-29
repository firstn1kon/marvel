import { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import MarvelApi from '../services/marvelAPI';

import Skeleton from '../skeleton/skeleton';
import Error from '../error/error';

const CharInfo = (props) => {


  const marvelAPI = new MarvelApi();
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadSelectedChar();
  },[])

  useEffect(() => {
    loadSelectedChar();
  },[props.selectedChar])

  const loadSelectedChar = () => {
    if(!props.selectedChar) {
      return;
    }

    setLoading(true);
    setError(false);


    marvelAPI.getCharacter(props.selectedChar)
    .then(char => {
      setChar(char);
      setLoading(false);
    })
    .catch(()=> {
      setError(true);
      setLoading(false);
    })
    
}


    const onError = error ? <Error/> : null,
      onLoading = loading ? <Skeleton/> : null,
      onContent = !(loading || error) ? <View char={char}/> : null;
    
    return (
      <div className="chooseCharacter__currentItem">
        {onError}
        {onLoading}
        {onContent}
      </div>
    );
  
  
}

const View = ({char}) => {
  
  const {thumbnail, name, description, homepage, wiki, comics} = char;
  const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;

  const comicsList = comics.map(({name,resourceURI}, i) => {
          return (
            <li key={i}><a href={resourceURI}>{name}</a></li>
          )
        })

        ;
        
  return(
    <>
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
  
  </>
  )

}



CharInfo.propTypes = {
  selectedChar: Proptypes.number,
}

export default CharInfo;