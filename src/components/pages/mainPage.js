import RandomCharacter from "../randomCharacter/randomCharacter";
import CharList from "../charList/charList";

import vision from '../../resources/img/vision.png';


export const MainPage = () => {
    return (
        <>
            <RandomCharacter/>
            <CharList/>
            <img src={vision} alt="vision" className="main__bgAbsolute"/>
        </>

    )

}