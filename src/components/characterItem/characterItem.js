import './characterItem.scss';

import loki from '../../resources/img/loki.png';

function CharacterItem() {
  return (
    <section className="characterItem">
        <div className="container">
            <div className="characterItem__wrapper">
                <img src={loki} alt="loki"/>
                <div className="characterItem__info">
                    <h2>LOKI</h2>
                    <p>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
                </div>
            </div>
        </div>
    </section>
    

  );
}

export default CharacterItem;