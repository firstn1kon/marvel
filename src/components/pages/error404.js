import { Helmet } from "react-helmet"

import error from "../error/systemerror_94180.svg"

function Error404() {
    return (
    <div className="randomCharacter__character" style={{margin: '0 auto', justifyContent: 'center', alignItems: 'center'}}>
        <Helmet>
            <meta name="description" content="404 page - no found"/>
            <title>Page no found - visit mainpage</title>
        </Helmet>
        <div className="randomCharacter__img">
            <img src={error} alt="error"/>
        </div>
        <div className="randomCharacter__info">
            <h2 className="randomCharacter__name">Ошибка 404</h2>
            <p className="randomCharacter__descr" style={{textAlign: 'center'}}>Страница не найдена</p>
        </div>
    </div>
    )
}

export default Error404

