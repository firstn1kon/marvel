import './comicItem.scss';

import xmenComics from '../../resources/img/x-men-comics.png';



function ComicItem() {
  return (
    <section className="comicItem">
    <div className="container">
        <div className="comicItem__wrapper">
            <div className="comicItem__img"><img src={xmenComics} alt="x-men"/></div>
            <div className="comicItem__info">
                <div className="comicItem__header">
                    <div className="comicItem__title">X-Men: Days of Future Past</div>
                    <div className="comicItem__back">Back to all</div>
                </div>
                <p>Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <div className="comicItem__pages">144 pages</div>
                <div className="comicItem__lang">Language: en-us</div>
                <div className="comicItem__price">9.99$</div>
            </div>
        </div>

    </div>
</section>


  );
}

export default ComicItem;