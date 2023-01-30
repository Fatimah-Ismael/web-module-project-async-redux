import React from 'react';
import './App.css';
import { useEffect } from 'react';
import GifList from '../../NinerGifs/src/GifList'
import data from './data/gifs';
import {connect} from 'react-redux'
import { fetchStart, fetchSuccesful } from './actions/triggers';
import axios from 'axios';


function App(props) {
  console.log(props);

  const {loading, gifs} = props;

  useEffect(()=> {
//where do i want to trigger it
props.fetchStart();
//console.log('props', fetchStart)
axios.get('https://api.giphy.com/v1/gifs/search?api_key=ryveWq1y4s77DcoskMwisi5epO3FSb0P&q=niners')
    .then(res=>{
      console.log(res.data.dat);
      props.fetchSuccesful(res.data.data);
    })
    .catch(error => alert(error.message));
  }, [])


  return (
    <div className="App">
      <h1> Search for Gifs</h1>

     <GifForm />
      {
        loading ? <h3> We are loading</h3> : <GifList gifs={gifs}/>
      }
    </div>
  );
}
const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    loading: state.loading,
    error:state.error
  }
}

export default connect(mapStateToProps, (fetchStart, fetchSuccesful))(App);