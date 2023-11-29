import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelApi from '../services/marvelAPI';

import Spinner from '../spinner/spinner';
import Error from '../error/Error';

import './comicItem.scss';

function ComicItem() {
    const {comicID} = useParams();
    const [comic, setComic] = useState();
    const {loading, error, getComic} = useMarvelApi();

    const loadComic = () => {
        getComic(comicID).then(data => {
            setComic(data);
        })
    }
    useEffect(()=> {
        loadComic();

    },[comicID])

    if(loading) return <Spinner/>
    if(error) return <Error/>
    if(comic) return (
    <section className="comicItem">
        <div className="container">
            <div className="comicItem__wrapper" style={{animation: `fadeIn .7s`}}>
                    <Helmet>
                        <meta name="description" content={`${comic?.title} - comic page`}/>
                        <title>{comic?.title}</title>
                    </Helmet>
                    <div className="comicItem__img"><img src={comic?.thumbnail} alt={comic?.title}/></div>
                    <div className="comicItem__info">
                        <div className="comicItem__header">
                            <div className="comicItem__title">{comic?.title}</div>
                            <div className="comicItem__back"><Link to="/comics">Back to all</Link></div>
                        </div>
                        <p>{comic?.description}</p>
                        <div className="comicItem__pages">{comic?.pagecount} pages</div>
                        <div className="comicItem__lang">Language: {comic?.lang}</div>
                        <div className="comicItem__price">{comic?.price}$</div>
                    </div>
                </div>
        </div>
    </section>
  );
}

export default ComicItem;