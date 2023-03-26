export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV'


const addFav = (character) => {
    return {type: ADD_FAV, payload: character}
}
const removeFav = (id)=>{
    return {type: REMOVE_FAV, payload: id}
}