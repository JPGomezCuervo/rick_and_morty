import Cards from './components/Cards/Cards';
import './App.css';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [access, setAccess] = useState(false)
  const navigate = useNavigate();
  const username = 'ejemplo@gmail.com';
  const password = 'ejemplo1';

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    } else {
      window.alert('Credenciales incorrectas')
    }  
  }
  useEffect(()=>{
    !access && navigate('/')
  },[access,navigate])

  const onSearch = (id) => {
    setIsLoading(true)
    const URL_BASE ='https://be-a-rym.up.railway.app/api';
    const API_KEY = 'a9265526d068.c5f9836cc7ec4efd2133';
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name && !characters.find((char)=> char.id === data.id)){
        setCharacters([data, ...characters])
      } else {

        if (characters.find((char)=> char.id === data.id))window.alert('Carta en pantalla');
        if (!data.name) window.alert('No hay personajes con ese ID');
        
      }
      setIsLoading(false)
    });
   
  };
  const {pathname} = useLocation();
  return (

      <div className="App">
      {pathname !== '/' &&  <Nav onSearch={onSearch} isLoading={isLoading} pathname={pathname}/>}
      <Routes>
        <Route path='/' element={<Form login = {login} setAccess={setAccess}/>}/>
        <Route path='home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='about' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>} />
        
      </Routes>
      
      <div className='Cards_Container'>
       
      </div>
       
      
    </div>
    
  );
}

export default App;
