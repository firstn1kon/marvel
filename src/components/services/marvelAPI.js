import { useHttp } from "../../hooks/http.hook";

const useMarvelApi = () => {

    const {loading, error, request} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey ='apikey=c30e78605a518628ae8d033b524d2aad';
    const _baseOffset = 210;


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(item => _transformCharacter(item))
    }
    const getCharacter = async (id) => {
        const res =  await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return  _transformCharacter(res.data.results[0]);
    }

    const getComics = async (offset = _baseOffset) => {
        const res =  await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return  res.data.results.map(item => _transformComics(item));
    }

    const getComic = async (id) => {
        const res =  await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return  _transformComics(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description:  char.description? `${char.description}`: `no description for this character`,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const _transformComics = (char) => {
        return {
            id: char.id,
            title: char.title,
            description:  char.description? `${char.description}`: `no description for this comics`,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            pagecount: char.pageCount,
            lang: char.textObjects[0]? char.textObjects[0].language : 'no info',
            price: char.prices[0].price,
        }
    }

    return {
        loading, error, getAllCharacters, getCharacter, getComics, getComic
    }



}

export default useMarvelApi;