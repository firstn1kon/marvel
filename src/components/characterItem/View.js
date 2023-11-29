import { Helmet } from "react-helmet";

import './characterItem.scss';

const View = ({char}) => {
    const {thumbnail, name, description} = char;
    const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
    return (
          <div className="characterItem__wrapper">
              <Helmet>
                <meta name="description" content={`${name} - character page`}/>
                <title>{`${name}  - Marvel character`}</title>
              </Helmet>
              <img src={thumbnail} alt={name} style={noFound}/>
              <div className="characterItem__info">
                  <h2>{name}</h2>
                  <p>{description}</p>
              </div>
          </div>
    )
  }

  export default View