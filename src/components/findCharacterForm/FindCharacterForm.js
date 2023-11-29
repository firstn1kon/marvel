import {useForm} from "react-hook-form"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelApi from "../services/marvelAPI";

import "./findCharacterForm.scss";

const FindCharacterForm = () => {
    const {loading, error, getCharacterbyName} = useMarvelApi();
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const loadCharacterbyName = (name) => {
        if(!name) {
            return
        }
        getCharacterbyName(name).then(data => data.length === 0? setData(false): setData(data))
    }

    useEffect(()=> {
        loadCharacterbyName(input)
        //eslint-disable-next-line
    },[input])

    
    const onSubmit = ({searchForm}) => setInput(searchForm);

    const renderChar =  data ? data.map(({id, name}) =>
            <div className="FindCharacterForm__resultOk" key={name}>
                <span>There is! Visit  {name} page?</span>
                <Link to={`character/${id}`}><button className="button button__grey">TO PAGE</button></Link>
            </div>) : null

    return (
        <div className="FindCharacterForm">
            <span className="FindCharacterForm__title">Or find a character by name:</span>
            <form className="FindCharacterForm__form" onSubmit={handleSubmit(onSubmit)}>
                <input type="search" 
                    {...register("searchForm", {required: 'This field is required. '})} 
                    placeholder='Or find a character by name'/>
                <button className="button  button__search">FIND</button>
            </form>
            <div className="FindCharacterForm__result">
                {errors.searchForm?.message 
                    ? <span className="FindCharacterForm__error" style={{animation: 'fadeIn .4s'}}>{errors.searchForm?.message}</span> 
                    : null}
                {renderChar}
                {!data && <span className="FindCharacterForm__error" style={{animation: 'fadeIn .4s'}}>
                    The character was not found. Check the name and try again</span>}
                {loading? <div style={{animation: 'fadeIn .4s'}}>Loading ...</div> : null}
                {error? <div className='FindCharacterForm__error' style={{animation: 'fadeIn .4s'}}>
                    Connection Error</div> : null}
            </div>
        </div>
    )
}

export default FindCharacterForm