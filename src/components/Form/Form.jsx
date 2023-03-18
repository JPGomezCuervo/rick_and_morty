import style from './Form.module.css';
import { useState } from 'react';
import validation from './Validation';
function Form ({login, setAcces}) {

    const [userData, setUserData] = useState({username:'', password:''});
    const [errors, setErrors] = useState({username:'', password:''})

    const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value }))
    };
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }
    
    return (
        <div className={style.Container}>
        
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" >Username: </label>
                    <input type='text' name='username' id='username' onChange={handleInputChange} autoComplete='off'/>
                    {errors.username && <p>{errors.username}</p>}
                </div>    

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type='password' name='password' id='password' onChange={handleInputChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button>Login</button>
            </form>
        </div>
        
    )
};
export default Form