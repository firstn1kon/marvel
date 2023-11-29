import Spinner from '../spinner/spinner';
import * as ErrorFetch from '../error/Error';

const fsm = (process, Component, newLoading) => {
    switch (process) {
    case "waiting": 
        return <Spinner/>
    case "error": 
        return <ErrorFetch/>
    case "loading": 
        return newLoading ? <Component/> : <Spinner/>
    case "succes": 
        return <Component/>
    default:
        throw new Error('no case avaliable')
    }
}

export default fsm;