import {connect} from 'react-redux';
 import { getGifs } from './actions';
import { useState} from 'react';

 const GifForm = props =>{
    const [searchTerm, setSearchTerm]= useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        props. getGifs(searchTerm);
    }
const handleChange = (e)=> {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
}
console.log('search', searchTerm)
return (<form onSubmit={handleSubmit}>
    <input onChange={handleChange} />
    <button> Search</button>
</form>);



 }
 export default connect(null, {getGifs})(GifForm);