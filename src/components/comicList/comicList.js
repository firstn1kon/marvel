import { useState, useEffect, useMemo } from 'react';
import { Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelApi from '../services/marvelAPI';

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
        //eslint-disable-next-line
    }, [])

    const renderComics = useMemo(()=>comics.map(({id, thumbnail, title, price}, i) => {
            return (
                <Link to={`/comics/${id}`} key={`${id}${i}`}>
                <div className="comicsList__item" style={{animation: `charList .7s`}}>
                    <img src={thumbnail} alt={title}/>
                    <p>{title}</p>
                    <div className="comicsList__price">{price}$</div>
                </div>
                </Link>
            )
        }),[comics])

    const display = end? {display: "none"} : null;

    if(error) return <><Banner/><Error/></>
    return (
        <>
            <Helmet>
                <meta name="description" content="Comics marvel page"/>
                <title>Comics of Marvel</title>
            </Helmet>
            <Banner/>
            <section className="comicListSection">
                <div className="container">
                    <div className="comicsList">
                        {renderComics}
                    </div>
                    <button  
                        style={display} 
                        disabled={loading} 
                        className="button button__load" 
                        onClick={loadComics}>
                        {loading? "LOADING ..." : 'LOAD MORE'}
                    </button>
                </div>
            </section>
        </>
    );
}

export default ComicList;