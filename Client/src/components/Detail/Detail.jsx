import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import style from './Detail.module.css'
function Detail (){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        
        const URL_BASE ='https://be-a-rym.up.railway.app/api';
        const API_KEY = 'a9265526d068.c5f9836cc7ec4efd2133';
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={style.Background}>        
           
           
            <div className={style.Detail_Container}>
                {
                  character.name ?
                (<>
                <div className={style.Main_info}>
                  <h1>{character.name}</h1>
                  <img src={character.image} alt={character.name}/>
                </div>

                <div className={style.Attributes}>

                  <div>
                    <h2 className={style.Attribute}> Status:</h2>
                    <p className={style.Attribute}>{character.status}</p>
                  </div>

                  <div>
                    <h2 className={style.Attribute}>Specie:</h2>
                    <p className={style.Attribute}>{character.species}</p>
                  </div>

                  <div>
                    <h2 className={style.Attribute}>Gender:</h2>
                    <p className={style.Attribute}>{character.gender}</p>
                  </div>
                  
                  <div>
                    <h2 className={style.Attribute}>Origin:</h2>
                     
                  </div>
                  
                </div>
                
                
                
                
                </>): <h1> Cargando...</h1>}
                
            </div>
            
        
        </div>

    )
}
export default Detail