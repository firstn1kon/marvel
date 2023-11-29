import { useState, useEffect, useCallback } from 'react';
import Proptypes from 'prop-types';
import useMarvelApi from '../services/marvelAPI';

import Skeleton from '../skeleton/skeleton';
import Error from '../error/Error';
import ViewCharInfo from './ViewCharInfo';

const CharInfo = ({selectedChar}) => {
  const [char, setChar] = useState(false);
  const {loading, error, getCharacter} = useMarvelApi();

  const loadSelectedChar = useCallback(() => {
    if(!selectedChar) {
      return;
    }
    getCharacter(selectedChar)
    .then(char => {
      setChar(char);
    })
  },[selectedChar, getCharacter])

  useEffect(() => {
    loadSelectedChar();
    //eslint-disable-next-line
  },[selectedChar])

    const onError = error ? <Error/> : null,
      onLoading = loading ? <Skeleton/> : null,
      onContent = !(loading || error) ? <ViewCharInfo char={char}/> : null;
    
    return (
      <div className="chooseCharacter__currentItem">
        {onError}
        {onLoading}
        {onContent}
      </div>
    );
}

CharInfo.propTypes = {
  selectedChar: Proptypes.number,
}

export default CharInfo;