import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import useMarvelApi from '../services/marvelAPI';

import Skeleton from '../skeleton/skeleton';
import Error from '../error/Error';

const CharInfo = (props) => {
  const [char, setChar] = useState(false);
  const {loading, error, getCharacter} = useMarvelApi();

  useEffect(() => {
    loadSelectedChar();
  },[props.selectedChar])

  const loadSelectedChar = () => {
    if(!props.selectedChar) {
      return;
    }
    getCharacter(props.selectedChar)
    .then(char => {
      setChar(char);
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
  if(char === false) {
    return <Skeleton/>
  }
  const {thumbnail, name, description, homepage, wiki, comics} = char;
  const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
  const comicsList = comics.map(({name,resourceURI}, i) => {
    const comicUrl = resourceURI.replace(/(v1)|([^\d])/g, "");
    return (
      <li key={i}><Link to={`comics/${comicUrl}`}>{name}</Link></li>
    )
  });
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

CharInfo.propTypes = {
  selectedChar: Proptypes.number,
}

export default CharInfo;