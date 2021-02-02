import {useState, useEffect} from 'react'
import Hacker from "./Hacker"

function HackerList({hackerData,searchTerm}) { 
    const hackerList = hackerData.map((news) => (
        <Hacker
        key={news.id}
        news={news}
        />
    ))
    return (
        <div className="md:grid grid-cols-2 gap-5">
            {hackerList}
        </div>
    )
}

export default HackerList