import './comicsList.scss';

import xmen from '../../resources/img/x-men.png';
import xmen2 from '../../resources/img/x-men2.png';

function ComicList() {
  return (
    <section className="comicListSection">
    <div className="container">
        <div className="comicsList">
            <div className="comicsList__item">
                <img src={xmen} alt="x-men"/>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <div className="comicsList__price">9.99$</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen2} alt="x-men2"/>
                <p>X-Men: Days of Future Past</p>
                <div className="comicsList__price">NOT AVAILABLE</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen} alt="x-men"/>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <div className="comicsList__price">9.99$</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen2} alt="x-men2"/>
                <p>X-Men: Days of Future Past</p>
                <div className="comicsList__price">NOT AVAILABLE</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen} alt="x-men"/>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <div className="comicsList__price">9.99$</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen2} alt="x-men2"/>
                <p>X-Men: Days of Future Past</p>
                <div className="comicsList__price">NOT AVAILABLE</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen} alt="x-men"/>
                <p>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
                <div className="comicsList__price">9.99$</div>
            </div>
            <div className="comicsList__item">
                <img src={xmen2} alt="x-men2"/>
                <p>X-Men: Days of Future Past</p>
                <div className="comicsList__price">NOT AVAILABLE</div>
            </div>
        </div>
        <a href="#" className="button button__load">LOAD MORE</a>
    </div>


</section>

  );
}

export default ComicList;