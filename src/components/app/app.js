import {lazy , Suspense} from "react";
import {BrowserRouter, Routes, Route}from "react-router-dom";

import { MainPage, Comics, Comic, Character} from "../pages";
import Header from "../header/header";

const Error404 = lazy(() => import('../pages/Error404'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>
      <div className="App">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="comics" element={<Comics/>}>
                <Route path=":comicID" element={<Comic/>}/>
              </Route>
              <Route path="/character/:characterID" element={<Character/>}/>
              <Route path="*" element={<Error404/>} />
            </Routes>
          </main>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
