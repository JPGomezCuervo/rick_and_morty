import { Link } from 'react-router-dom';
import style from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Card ({name, gender, species, image, id, onClose}){
    const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false)
    return(
        <div>
           
                <div className={style.Card} >
        
                    <button className={style.Button} onClick={()=>onClose(id)} >X</button>
                    <button></button>
                    <Link to={`/detail/${id}`} className={style.Link}> 
                        <div>

                                <h2>{name}</h2>
                        </div>

                        <img className= {style.Image} src={image} alt={name}/>

                        <div className={style.Attributes}>

                        <div className={style.Species}>
                                <h2>{`#${id}`}</h2>
                            </div>

                            <div className={style.Species}>
                                <h2>{species}</h2>
                            </div>

                            

                            <div className={style.Gender}>
                                <h2>{gender}</h2>
                            </div>
                
                        </div>
                     </Link>
        
                </div>
            
        </div>
       
    )
}
export default Card;