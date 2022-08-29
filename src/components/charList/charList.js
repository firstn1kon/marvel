import { useEffect, useState} from 'react';
import MarvelApi from '../services/marvelAPI';

import './chooseCharacter.scss';

import Spinner from '../spinner/spinner';
import Error from '../error/error';
import CharInfo from '../charInfo/charInfo';
import ErrorBoundaries from '../errorBoundaries/errorBoundaries';


const CharList = () => {

    const [char, setChar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offSet, setOffset] = useState(210);
    const [selectedChar, setSelectedChar] = useState(null);
    const [btnLoad, setBtnLoad] = useState(false);
    const [end, setEnd] = useState(false);


    

    const marvelAPI = new MarvelApi();


    useEffect(()=> {
        loadComiclist();
    },[]);

    useEffect(()=> {
        window.addEventListener('scroll', lazyLoad);
        return () => {
            window.removeEventListener('scroll', lazyLoad);

        }
    },[offSet]);




    
    const loadComiclist = (offset) => {
        setBtnLoad(true);
        setError(false);
        marvelAPI.getAllCharacters(offset)
        .then(newChar => {
            let end = false;
            if (newChar.length < 9) {
                end = true
            }
            setChar(char => [...char, ...newChar]);
            setLoading(false);
            setOffset(offset => offset + 9);
            setBtnLoad(false);
            setEnd(end);
        }
        )
        .catch(()=> {
            setError(true);
            setLoading(false);
            setBtnLoad(false);
        })
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
    

 


    const renderListItems = (items) => {
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
              onLoading = loading ? <Spinner/> : null,
              onContent = !(loading || error) ? listItems : null,
              dNone = (onError || onLoading || end) ? {display: 'none'} : null,
              dBlock = (onError || onLoading) ? {display: 'block'} : null;
            //   visibility = btnLoad ? 'visible' : 'hidden';
                

        return (
            <section className="chooseCharacter">
            <div className="container">
                <div className="chooseCharacter__wrapper" style={dBlock}>
                    <div className="chooseCharacter__list">
                        {onContent}
                        {onError}
                        {onLoading}
                        
                        <button disabled={btnLoad} href="#" className="button button__load rotable" style={dNone} onClick={(e) => {e.preventDefault(); loadComiclist(offSet);}}>LOAD MORE</button>
                        {/* {<div style={{margin: '0 auto', visibility: visibility}}><Spinner/></div>} */}
                        
                    </div>
                    <div className="chooseCharacter__rightBlock">
                        {(error || loading) ? null : <ErrorBoundaries><CharInfo selectedChar={selectedChar}/></ErrorBoundaries>}
                    </div>
                </div>
            </div>
        </section>
          );
}

export default CharList;