import { ADD_FAV } from "./action"
import { REMOVE_FAV } from "./action";
const initialState ={
    myFavorites: []
}
const rootReducer=(state = initialState, {type,payload})=>{
    switch(type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, payload]};
        
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((character)=> character.id != payload)}


        default:
            return {...state}
    }
}
export default rootReducer