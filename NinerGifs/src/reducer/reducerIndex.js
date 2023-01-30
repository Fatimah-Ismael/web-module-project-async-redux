import data from './data/gifs';
import { FETCH_START, FETCH_SUCCESSFUL } from '../actions/triggers';

const initialState = {
    gifs: [],
    loading: false,
    error: '',
} 

const reducer= (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
        return {
            ...state, 
            loading:true,
            error:""
        }

        case FETCH_SUCCESSFUL:
        return {
            ...state, 
            loading: false,
            gifs:action.payload,
            error:'',
        }


        default:
            return(state);
    }
}
export default reducer;