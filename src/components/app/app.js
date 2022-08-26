import Header from "../header/header";
import RandomCharacter from "../randomCharacter/randomCharacter";
import CharList from "../charList/charList";

// import Banner from "../banner/banner";
// import ComicList from "../comicList/comicList";
// import ComicItem from "../comicItem/comicItem";
// import CharacterItem from "../characterItem/characterItem";

import vision from '../../resources/img/vision.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <RandomCharacter/>
        <CharList/>
        <img src={vision} alt="vision" className="main__bgAbsolute"/>

      </main>
      {/* <Banner/>
      <ComicList/>
      <ComicItem/>
      <CharacterItem/> */}

    </div>
  );
}

export default App;
