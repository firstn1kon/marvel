import { Component } from 'react';
import MarvelApi from '../services/marvelAPI';

import './chooseCharacter.scss';

import Spinner from '../spinner/spinner';
import Error from '../error/error';
import CharInfo from '../charInfo/charInfo';
import ErrorBoundaries from '../errorBoundaries/errorBoundaries';


class CharList extends Component {
    state = {
        char: [],
        loading: true,
        error: false,
        offSet: 210, 
        selectedChar: null,
        btnLoad: false,
        end: false,
    }

    

    marvelAPI = new MarvelApi();

    componentDidMount() {
        this.loadComiclist();
        // window.addEventListener('scroll', this.lazyLoad)
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.lazyLoad)
    }

    
    loadComiclist = (offset) => {
        this.setState({
            btnLoad: true,
            error: false,
        })
        this.marvelAPI.getAllCharacters(offset)
        .then(newChar => {
            let end = false;
            if (newChar.length < 9) {
                end = true
            }
            this.setState(({char, offSet}) => 
              (  {
                    char: [...char, ...newChar],
                    loading: false,
                    offSet: offSet + 9,
                    btnLoad: false,
                    end: end,
            }))
        }
        )
        .catch(()=> {
            this.setState({
                error: true,
                loading: false,
                btnLoad: false,
            })
        })
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id,
        })
    }
    lazyLoad = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            this.loadComiclist(this.state.offSet);
        }
    }
/* 
    Реализация через рефы фокуса карточек и класса активности
    cardsRefs = [];

    setCardRef = (card) => {
        this.cardsRefs.push(card)
    }

    onFocusCard = (card) => {
        this.cardsRefs.forEach(item => {
            item.classList.remove('active');
            
        });
        this.cardsRefs[card].classList.add('active');
        this.cardsRefs[card].focus();
    } */
 


    renderListItems = (items) => {
        const listItems = items.map(({name, thumbnail, id}, i) => {
            const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
            const active = this.state.selectedChar === id ? " active" : "";
            return (
                <div 
                className={`chooseCharacter__item ${active}`} 
                tabIndex={0} 
                key={id}
                /* для рефов ref={this.setCardRef} */
                onKeyPress={(e) => {
                    e.preventDefault();
                   if (e.key === "Enter" || e.key === " ") {
                    this.onSelectedChar(id);
                   /*  для рефов 
                    this.onFocusCard(i) */
                   }
                }} 
                onClick={()=>{this.onSelectedChar(id); 
                    /* для рефов
                    this.onFocusCard(i); */}}
                /* onFocus={()=>this.onSelectedChar(id)} */
                >
                    <div className="chooseCharacter__item-img"><img src={thumbnail} alt={name} style={noFound}/></div>
                    <h2>{name}</h2>
                </div>
            )
        });
        return listItems
    }



    render() {



        const {char, error, loading, selectedChar, btnLoad, end} = this.state,
              listItems = this.renderListItems(char),
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
                        
                        <button disabled={btnLoad} href="#" className="button button__load rotable" style={dNone} onClick={(e) => {e.preventDefault(); this.loadComiclist(this.state.offSet);}}>LOAD MORE</button>
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
}

export default CharList;