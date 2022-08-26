class MarvelApi {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey ='apikey=c30e78605a518628ae8d033b524d2aad';
    _baseOffset = 210;
    _limit = 9;
    getData = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(url, res.status);
        }
        return await res.json();
    };

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getData(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(item => this._transformCharacter(item))
    }
    getCharacter = async (id) => {
        const res =  await this.getData(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return  this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
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



}

export default MarvelApi;