import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch, isLoading}) {
    const [id, setId] = useState('');

    const handleChange = (event) =>{
        setId(event.target.value); 
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          onSearch(id);
          setId('');
        }
      };
    return (
            <div className= {style.Nav_Elements}>

                    <input type='search' className={style.Search_Bar}
                        value = {id} 
                        onKeyDown={handleKeyDown} 
                        onChange={handleChange} 
                        placeholder= {isLoading ? 'Cargando...': 'Buscar personaje por id'}
                        />
                    
                    <button
                        className={style.Search_Button}
                        onClick={()=>{onSearch(id); setId('')}
                    }>Agregar</button>
                    
            </div>
        
    )
};
export default SearchBar;