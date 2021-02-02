import React from 'react'

function Hacker({news}) {
    console.log(news);
    return (
        <div className="bg-white p-5 rounded-lg mb-5 md:mb-0">
            <h5>{news.title}</h5>
            <div>
                <span>{news.points} points </span>
                <span>by {news.author} | </span>
                <span>{news.num_comment}</span>
            </div>
            
            <div>
                <a href={news.url} target="_blank" className="text-blue-500">Read More</a>
                <a href="#" className="text-red-500 pl-5">Remove</a>
            </div>
        </div>
    )
}

export default Hacker
