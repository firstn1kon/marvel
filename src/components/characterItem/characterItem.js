import { useState, useEffect, useCallback } from 'react';
import {useParams } from 'react-router-dom';

import useMarvelApi from '../services/marvelAPI';

import Error from '../error/Error';
import Spinner from '../spinner/spinner';
import Banner from '../banner/Banner';
import View from './View';

import './characterItem.scss';

function CharacterItem() {
  const [character, setCharacter] = useState([]);
  const {loading, error, getCharacter} = useMarvelApi();
  const {characterID} = useParams();

  const loadSelectedChar = useCallback(() => {
    if(!characterID) {
      return;
    }
    getCharacter(characterID)
    .then(char => {
      setCharacter(char);
    })
},[characterID, getCharacter])

  useEffect(() => {
    loadSelectedChar();
    document.title = "Marvel"
    //eslint-disable-next-line
  },[])

  useEffect(() => {
    loadSelectedChar();
    //eslint-disable-next-line
  },[])

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

export default CharacterItem;