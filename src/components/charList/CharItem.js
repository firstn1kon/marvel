const CharItem = ({data, selectedChar, setCharId}) => {
    const {name, thumbnail, id} = data
    const onSelectedChar = () => {
        setCharId(id);
    }

    const selectByEscAndSpace = (e) => {
        e.preventDefault();
        if (e.key === "Enter" || e.key === " ") {
        onSelectedChar();
        }
    }
   
    const noFound = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectFit: "fill"} : null;
    const active = selectedChar === id ? " active" : "";
    return (
        <div 
            className={`chooseCharacter__item ${active}`} 
            tabIndex={0} 
            key={id}
            style={{animation: `charList .7s`}}
            onKeyPress={selectByEscAndSpace} 
            onClick={onSelectedChar}
        >
            <div className="chooseCharacter__item-img">
                <img src={thumbnail} alt={name} style={noFound}/>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default CharItem