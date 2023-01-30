export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESSFUL ='FETCH_SUCCESSFUL';

export const getGifs = ()=>{
    return ( (dispatch=> {

    }));
}


export const fetchStart = () => {
    return({FETCH_START})
}

export const fetchSuccesful = ()=>{
    return ({FETCH_SUCCESSFUL, payload:gifs})
}