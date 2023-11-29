import { useEffect, useState } from 'react';

import Spinner from '../spinner/spinner';
import Error from '../error/Error';
import useMarvelApi from '../services/marvelAPI';
import ViewCharacter from './ViewCharacter';

import hummerAndShield from '../../resources/img/hummer_and_shield.png';
import './randomCharacter.scss';

const RandomCharacter = () => {

    const [char, setChar] = useState({});
    const {loading, error, getCharacter} = useMarvelApi();
 
    useEffect(()=> {
        updateChar();
    //eslint-disable-next-line
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
                            <button className="button button__bg-dark-grey" onClick={updateChar}>TRY IT</button>
                            <img src={hummerAndShield} alt="" className="randomCharacter__bgImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
  }
  
export default RandomCharacter;