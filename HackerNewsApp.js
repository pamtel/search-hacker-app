import {useState} from 'react'
import Search from "./Search"
import HackerList from './HackerList'
import {hackerData} from "./hackerData"

function HackerNewsApp() {
    const [searchTerm, setSearchTerm] = useState("");
    const [hackerList, setHackerList] = useState(hackerData)

    const searchResult = hackerList.filter(hackerData => {
        // return hackerData.title.includes(searchTerm)
        return hackerData.title.toLocaleLowerCase().indexOf(searchTerm) !== -1;
    })

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
            <div className="pt-5 p-10 bg-blue-50">
            <h2 className="font-bold pb-5 text-md text-xl">Search Hacker News</h2>
            <Search onSearch={handleSearch} searchTerm={searchTerm}/>
            <HackerList hackerData={searchResult}/>
        </div>
    )
}

export default HackerNewsApp