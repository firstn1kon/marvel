import { useEffect, useState, useMemo } from 'react';
import useMarvelApi from '../services/marvelAPI';

import Spinner from '../spinner/spinner';
import Error from '../error/Error';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundaries from '../errorBoundaries/ErrorBoundaries';
import FindCharacterForm from '../findCharacterForm/FindCharacterForm';
import CharItem from './CharItem';

import './chooseCharacter.scss';

const CharList = () => {

    const [char, setChar] = useState([]);
    const [offSet, setOffset] = useState(210);
    const [selectedChar, setSelectedChar] = useState(null);
    const [end, setEnd] = useState(false);
    const {loading, error, getAllCharacters} = useMarvelApi();

    useEffect(()=> {
        loadComiclist();
        //eslint-disable-next-line
    },[]);

    // Для LazyLoad
    // useEffect(()=> {
    //     window.addEventListener('scroll', lazyLoad);
    //     return () => {
    //         window.removeEventListener('scroll', lazyLoad);

    //     }
    // },[offSet]);
    // Для LazyLoad
    // const lazyLoad = () => {
    //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         loadComiclist(offSet);
    //     }
    // }
    
    const loadComiclist = () => {
        getAllCharacters(offSet)
        .then(newChar => {
            let end = false;
            if (newChar.length < 9) {
                end = true
            }
            setChar(char => [...char, ...newChar]);
            setOffset(offset => offset + 9);
            setEnd(end);
        }
        )
    }

    const content = useMemo(
        () => char.map((data, i) => <CharItem key ={`${data.id}${i}`} data={data} selectedChar={selectedChar} setCharId={setSelectedChar}/>)
        ,[char, selectedChar])
    const onError = error ? <Error/> : null
    const onLoading = loading ? 'visible': "hidden"
    const dNone = (onError || loading || end) ? {visibility: 'hidden'} : null;

        return (
            <section className="chooseCharacter">
                <div className="container">
                    <div className="chooseCharacter__wrapper" style={{position: 'relative'}}>
                        <div className="chooseCharacter__list" >
                            {content}
                            {onError}
                            {!!char.length &&
                            <button 
                                disabled={loading} 
                                style={dNone} 
                                className="button button__load rotable"  
                                onClick={loadComiclist}>
                                    {loading? 'LOADING...': 'LOAD MORE'}
                            </button>}
                            <div style={
                                {position: 'absolute', 
                                bottom: "-220px", 
                                left: '50%', 
                                transform: 'translateX(-50%)', 
                                visibility: onLoading}}>
                                <Spinner/>
                            </div>
                        </div>
                        <div className="chooseCharacter__rightBlock">
                            <ErrorBoundaries><CharInfo selectedChar={selectedChar}/></ErrorBoundaries>
                            <FindCharacterForm/>
                        </div>
                    </div>
                </div>
            </section>
          );
}

export default CharList;