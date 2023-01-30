import React from "react";
import Gif from './GIf';
import {connect} from 'react-redux';

const GifList = props => {
    const { gifs } = props;
    
    return (<div id='giflist'>
        {
            gifs.map(gif => {
                return (
                    <Gif gif={gif}/>
                )
            })
        }
   </div> );
   
}

const mapStateToProps = state => {
    return{
        gifs:state.gifs
    }
}
export default connect(mapStateToProps)(GifList);