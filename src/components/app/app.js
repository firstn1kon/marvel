import Header from "../header/header";
import { useEffect } from "react";
import { lazy , Suspense} from "react";

import { MainPage, Comics, Comic} from "../pages";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Error404 = lazy(() => import('../pages/error404'));

// import Banner from "../banner/banner";
// import ComicItem from "../comicItem/comicItem";
// import CharacterItem from "../characterItem/characterItem";


function App() {
  useEffect(()=> {
    document.title = "Marvel App"

  })
  return (
    <BrowserRouter>
      <Suspense fallback={<span>loading ...</span>}>
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
        
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
