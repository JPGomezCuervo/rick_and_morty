import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
function Nav ({onSearch, isLoading, pathname}) {
    return(
        <nav className={style.Nav}>
            <Link className={style.Nav_Option} to='/'> Cerrar sesión</Link>
            { pathname === '/home'?
                (<div className={style.SearchBar_Container}>
                <SearchBar onSearch={onSearch} isLoading={isLoading}/>
                </div>)
                : <div className={style.SearchBar_Container}></div>
            }
            
            <div className={style.Nav_Options}>
                
                <Link className={style.Nav_Option} to='/home'> Home</Link>
                <Link className={style.Nav_Option} to='about'> About</Link>
                <div className={style.Extra}/>
            </div>
            
        </nav>
    )
    
};
export default Nav