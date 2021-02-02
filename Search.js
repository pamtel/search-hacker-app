import {useState} from 'react'

function Search({searchTerm, onSearch}) {
    const handleChange =(event) => {
        onSearch(event)
    }
    return (
        <div>
            <input type="text" name="" id="" placeholder="Search" className="border-b border-gray-300 mb-5 w-96 bg-blue-50" onChange={handleChange} value={searchTerm}/>
            <p className="mb-5">Searching for <strong>{searchTerm}</strong></p>
        </div>
    )
}

export default Search
