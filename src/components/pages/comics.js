import ComicList from "../comicList/comicList";
import { Outlet, useOutlet } from "react-router-dom";
import Banner from "../banner/banner";

export const Comics = () => {
    const outLet = useOutlet();

    return (
        <>
        {outLet? <><Banner/><Outlet/></>: <ComicList/>}
        </>

    )
}