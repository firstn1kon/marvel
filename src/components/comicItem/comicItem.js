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

    const renderComic = (comic) => {
        if(comic) {
            const {description, lang, pagecount, price, thumbnail, title} = comic;
            return (
                <div className="comicItem__wrapper" style={{animation: `fadeIn .7s`}}>
                    <Helmet>
                        <meta name="description" content={`${title} - comic page`}/>
                        <title>{title}</title>
                    </Helmet>
                    <div className="comicItem__img"><img src={thumbnail} alt={title}/></div>
                    <div className="comicItem__info">
                        <div className="comicItem__header">
                            <div className="comicItem__title">{title}</div>
                            <div className="comicItem__back"><Link to="/comics">Back to all</Link></div>
                        </div>
                        <p>{description}</p>
                        <div className="comicItem__pages">{pagecount} pages</div>
                        <div className="comicItem__lang">Language: {lang}</div>
                        <div className="comicItem__price">{price}$</div>
                    </div>
                </div>
            )
        }

    }
    const content = renderComic(comic);
    const onLoading = loading? <Spinner/> : null;
    const onError = error? <Error/> : null;
    const onContent = !(loading && error)? content: null;
  return (
    <section className="comicItem">
        <div className="container">
            {onLoading}
            {onError}
            {onContent}
        </div>
    </section>
  );
}

export default ComicItem;