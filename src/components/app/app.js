import Header from "../header/header";

import { MainPage, Comics, Error404, Comic} from "../pages";



import { BrowserRouter, Routes, Route} from "react-router-dom";

// import Banner from "../banner/banner";
// import ComicItem from "../comicItem/comicItem";
// import CharacterItem from "../characterItem/characterItem";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="comics" element={<Comics/>}>
                <Route path=":comicID" element={<Comic/>}/>
              </Route>
              <Route path="*" element={<Error404/>} />
            </Routes>
          </main>
          {/* <Banner/> */}
          {/* <ComicItem/> */}
          {/* <CharacterItem/>  */}
        </div>
    </BrowserRouter>
  );
}

export default App;
