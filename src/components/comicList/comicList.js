import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelApi from '../services/marvelAPI';

import Spinner from '../spinner/spinner';
import Error from '../error/Error';
import Banner from "../banner/Banner";

import './comicsList.scss';

function ComicList() {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(226);
    const [end, setEnd] = useState(false);
    const {loading, error, getComics} = useMarvelApi();

    const loadComics = () => {
        getComics(offset).then(data => {
            if (data.length < 8) {
                setEnd(true);
            }
            setComics(oldData => [...oldData, ...data]);
            setOffset(offset => offset + 8)
        })
    }

    useEffect(() => {
        loadComics();
    }, [])

    const renderComics = (comics) => {
        const comicsList = comics.map(({id, thumbnail, title, price}, i) => {
            return (
                <Link to={`/comics/${id}`} key={`${id}${i}`}>
                <div className="comicsList__item" style={{animation: `charList .7s`}}>
                    <img src={thumbnail} alt={title}/>
                    <p>{title}</p>
                    <div className="comicsList__price">{price}$</div>
                </div>
                </Link>
            )
        })
        return (
            comicsList
        )
    }

    const comicsList = renderComics(comics);
    const onLoading = loading? <Spinner/> : null;
    const onError = error? <Error/> : null;
    const buttonNone = end? {display: "none"} : null;

  return (
    <>
    <Helmet>
        <meta name="description" content="Comics marvel page"/>
        <title>Comics of Marvel</title>
    </Helmet>
    <Banner/>
    <section className="comicListSection">
        <div className="container">
        
        {onError}
            <div className="comicsList">
                {comicsList}
            </div>
            <button  style={buttonNone} disabled={loading} className="button button__load" onClick={(e) => {e.preventDefault(); loadComics(offset)}}>LOAD MORE</button>
            {onLoading}
        </div>
    </section>
    </>
  );
}

export default ComicList;