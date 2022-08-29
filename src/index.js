import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import './style/style.scss';

// import MarvelApi from './components/services/marvelAPI';

// const marvelApi = new MarvelApi();

// marvelApi.getAllCharacters().then(res => res.data.results.forEach(({id, name}) => console.log(id, name)));
// marvelApi.getCharacter(1011196).then(res => console.log(res));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
    <App />
/*   </React.StrictMode> */
);


