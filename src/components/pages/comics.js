import { Outlet, useOutlet } from "react-router-dom";

import ComicList from "../comicList/ComicList";
import Banner from "../banner/Banner";

export const Comics = () => {
    const outLet = useOutlet();
    return (
        <>
        {outLet? <><Banner/><Outlet/></>: <ComicList/>}
        </>
    )
}