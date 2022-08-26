import './banner.scss';

import avangeres from '../../resources/img/avengers.png';
import avangeresLogo from '../../resources/img/avengers-logo.png';

function Banner() {
  return (
    <section className="bannerSection">
    <div className="container">
        <div className="banner">
            <img src={avangeres} alt="avangeres" className="banner__avengers-img"/>
            <h2>New comics every week!<br/>
                Stay tuned!</h2>
                <img src={avangeresLogo} alt="avangers logotype" className="banner__avengers-logo"/>
        </div>
    </div>
</section>

  );
}

export default Banner;