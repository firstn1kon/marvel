import { useEffect, useState} from 'react';
import useMarvelApi from '../services/marvelAPI';

import './chooseCharacter.scss';

import Spinner from '../spinner/spinner';
import Error from '../error/error';
import CharInfo from '../charInfo/charInfo';
import ErrorBoundaries from '../errorBoundaries/errorBoundaries';


const CharList = () => {

    const [char, setChar] = useState([]);
    const [offSet, setOffset] = useState(210);
    const [selectedChar, setSelectedChar] = useState(null);
    const [end, setEnd] = useState(false);
    const {loading, error, getAllCharacters} = useMarvelApi();

    useEffect(()=> {
            loadComiclist();
    },[]);

    // useEffect(()=> {
    //     window.addEventListener('scroll', lazyLoad);
    //     return () => {
    //         window.removeEventListener('scroll', lazyLoad);

    //     }
    // },[offSet]);

    const loadComiclist = (offset) => {
        getAllCharacters(offset)
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

    const onSelectedChar = (id) => {
        setSelectedChar(id);

    }
    const lazyLoad = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            loadComiclist(offSet);
        }
    }

/*     // Реализация через рефы фокуса карточек и класса активности
    const cardsRefs = useRef([]);
    const onFocusCard = (card) => {
        cardsRefs.current.forEach(item => {
            item.classList.remove('active');
        });
        cardsRefs.current[card].classList.add('active');
        cardsRefs.current[card].focus();
    }  */

    const renderListItems = (items = []) => {
        const listItems = items.map(({name, thumbnail, id}, i) => {
            const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
            const active = selectedChar === id ? " active" : "";
            return (
                <div 
                    className={`chooseCharacter__item ${active}`} 
                    tabIndex={0} 
                    key={id}
                    /* Для рефов 
                    ref={(ref) => cardsRefs.current[i] = ref} */
                    onKeyPress={(e) => {
                        e.preventDefault();
                    if (e.key === "Enter" || e.key === " ") {
                        onSelectedChar(id);
                    /*  для рефов 
                        onFocusCard(i) */
                    }
                    }} 
                    onClick={()=>{onSelectedChar(id); 
                        /* для рефов 
                        onFocusCard(i); */}}
                    /* onFocus={()=>onSelectedChar(id)} */
                >
                    <div className="chooseCharacter__item-img"><img src={thumbnail} alt={name} style={noFound}/></div>
                    <h2>{name}</h2>
                </div>
            )
        });
        return listItems
    }

        const listItems = renderListItems(char),
              onError = error ? <Error/> : null,
              onLoading = loading ? 'visible': "hidden",
              dNone = (onError || loading ||  end) ? {visibility: 'hidden'} : null;

        return (
            <section className="chooseCharacter">
            <div className="container">
                <div className="chooseCharacter__wrapper" style={{position: 'relative'}}>
                    <div className="chooseCharacter__list" >
                        {listItems}
                        {onError}
                        <button disabled={loading} href="#"  style={dNone} className="button button__load rotable"  onClick={(e) => {e.preventDefault(); loadComiclist(offSet);}}>LOAD MORE</button>
                        <div style={{position: 'absolute', bottom: "-220px", left: '50%', transform: 'translateX(-50%)', visibility: onLoading}}><Spinner/></div>
                    </div>
                    <div className="chooseCharacter__rightBlock">
                        <ErrorBoundaries><CharInfo selectedChar={selectedChar}/></ErrorBoundaries>
                    </div>
                </div>
            </div>
        </section>
          );
}

export default CharList;