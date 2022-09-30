import error from "../error/systemerror_94180.svg"

function Error() {
    return (
        <div className="randomCharacter__character">
            <div className="randomCharacter__img">
                <img src={error} alt="error"/>
            </div>
            <div className="randomCharacter__info">
                <h2 className="randomCharacter__name">Ошибка загрузки</h2>
                <p className="randomCharacter__descr" style={{textAlign: 'center'}}>Не удается загрузить персонаж</p>
            </div>
        </div>
    )
}

export default Error