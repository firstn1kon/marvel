import { Helmet } from "react-helmet";

import RandomCharacter from "../randomCharacter/RandomCharacter";
import FindCharacter from "../findCharacter/FindCharacter";
import CharList from "../charList/CharList";

import vision from '../../resources/img/vision.png';

export const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Marvel info portal"/>
                <title>Marvel app</title>
            </Helmet>  
            <RandomCharacter/>
            <FindCharacter/>
            <CharList/>
            <img src={vision} alt="vision" className="main__bgAbsolute"/>
        </>
    )
}