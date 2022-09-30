import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelApi from '../services/marvelAPI';

import Error from '../error/Error';
import Spinner from '../spinner/spinner';
import Banner from '../banner/Banner';

import './characterItem.scss';


function CharacterItem() {
  const [character, setCharacter] = useState([]);
  const {loading, error, getCharacter} = useMarvelApi();
  const {characterID} = useParams();

  useEffect(() => {
    loadSelectedChar();
    document.title = "Marvel"
  },[])

  useEffect(() => {
    loadSelectedChar();
  },[characterID])

  const loadSelectedChar = () => {
    if(!characterID) {
      return;
    }
    getCharacter(characterID)
    .then(char => {
      setCharacter(char);
    })
    
}
const onError = error ? <Error/> : null,
onLoading = loading ? <Spinner/> : null,
onContent = !(loading || error) ? <View char={character}/> : null;
  return (
    <>
      <Banner/>
      <section className="characterItem">
        <div className="container">
          {onError}
          {onLoading}
          {onContent}
        </div>
      </section>
    </>
  );
}

const View = ({char}) => {
  const {thumbnail, name, description} = char;
  const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
  return (
        <div className="characterItem__wrapper">
            <Helmet>
              <meta name="description" content={`${name} - character page`}/>
              <title>{`${name}  - Marvel character`}</title>
            </Helmet>
            <img src={thumbnail} alt={name} style={noFound}/>
            <div className="characterItem__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default CharacterItem;