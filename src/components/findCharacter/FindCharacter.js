import { useState, useEffect, useMemo} from 'react';
import { Link } from 'react-router-dom';

import useMarvelApi from '../services/marvelAPI';

import './findCharacter.scss';

const FindCharacter = () => {

    const {loading, error, getCharacterbyNameInput} = useMarvelApi();
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [dnone, setDnone] = useState(true);

    useEffect(()=> {
        if(input === '') {
            setData([]);
        }
        loadCharacterbyName(input)
        //eslint-disable-next-line
    },[input])

    const loadCharacterbyName = (name) => {
        if(!name) {
            return
        }
        getCharacterbyNameInput(name).then(data => setData(data))
    }

    const initName = (e) => {
        setInput(e.target.value)
    }
    
    const onBlur = () => {
        setTimeout(() => setDnone(true),150)
    }

    const onFocus = () => {
        setDnone(false)
    }

    const renderResults = useMemo(() => data.map(({id, name, thumbnail}) => 
        <Link to={`character/${id}`} key={name}>
            <div  className='findCharacter__results-wrapper'>
                <img src={thumbnail} alt={name}/>
                <div className='findCharacter__desc'>{name}</div>
            </div>
        </Link>),[data])

    const noDisplay = dnone || !input? 'none' : 'block';
   
    return (
        <section className="findCharacter">
            <div className='container'>
                <div className="findCharacter__block">
                    <form>
                        <input  value={input} 
                                onChange={initName} 
                                onBlur={onBlur} 
                                onFocus={onFocus} 
                                name='find' 
                                type='text' 
                                autoComplete="off" 
                                placeholder='Or find a character by name'/>
                        {data.length === 0
                        ? null
                        : <div className='findCharacter__results' style={{animation: `fadeIn .4s`, display: noDisplay}}>
                            {loading? 'loading ...': renderResults}
                        </div>}
                    </form>
                </div>
                {error? <div style={{fontWeight: "bold", color: 'red'}}>Unknow error, try search again</div>: null}
            </div>
            {dnone ? null : <div className='findCharacter__overlay'></div> }
        </section>
    )
}

export default FindCharacter