import style from './Cards.module.css'
import Card from '../Card/Card';

function Cards ({characters, onClose}){
    return(
        <div className={style.Cards_Container}>
           {characters.map(({id,name,species,gender,image}) => 
           <Card className={style.Card}
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}  
           />)}
        </div>
     )
}
export default Cards