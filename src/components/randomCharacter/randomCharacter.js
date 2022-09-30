import { useEffect, useState } from 'react';

import Spinner from '../spinner/spinner';
import Error from '../error/Error';
import useMarvelApi from '../services/marvelAPI';

import hummerAndShield from '../../resources/img/hummer_and_shield.png';
import './randomCharacter.scss';

const RandomCharacter = () => {

    const [char, setChar] = useState({});
    const {loading, error, getCharacter} = useMarvelApi();
 
    useEffect(()=> {
        updateChar();
    },[]);

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacter(id)
        .then(char => {
            setChar(char);
        } )
    }
    
    const onError = error? <Error /> : null,
          onLoading = loading? <Spinner/> : null,
          onContent = !(error || loading)? <ViewCharacter char={char}/> : null;
         
    return (
        <div>
            <section className="randomCharacter">
                <div className="container">
                    <div className="randomCharacter__wrapper">
                        {onContent}
                        {onError}
                        {onLoading}
                        <div className="randomCharacter__chooseRandom">
                            <p className="randomCharacter__title">Random character for today!<br/>
                                Do you want to get to know him better?</p>
                            <p className="randomCharacter__title">Or choose another one</p>
                            <a href="" className="button button__bg-dark-grey" onClick={(e) => {e.preventDefault(); updateChar();}}>TRY IT</a>
                            <img src={hummerAndShield} alt="" className="randomCharacter__bgImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
      

  }

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
  
export default RandomCharacter;