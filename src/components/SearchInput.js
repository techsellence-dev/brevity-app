import React from 'react';
import './SearchInput.css';
import {AiOutlineSearch} from 'react-icons/ai';
const SearchInput=(props)=>{
    return(
        <div className="app2">
            <div className='input-element-wrapper'>
                <input placeholder="Enter Search" className="InputBox" 
                    type="text"
                    onChange={(search)=>props.searchTerm(search.target.value)}
                />
                <button className='passwordButton'  >
                    <AiOutlineSearch/>
                </button>
            </div>
        </div>
    )
}
export default SearchInput;