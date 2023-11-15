import React, { useState, useEffect } from "react";
import style from "./SearchBar.module.css";
import SuggestionItem from "./SuggestionItem";
import axios from "axios";


const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)


    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (search.length > 0) {
                axios.get(`http://localhost:9090/products/name/${search.toLowerCase().trim()}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    response.data.length > 0 ? setShowSuggestions(true) : setShowSuggestions(false);
                    setSuggestions(response.data)
                }).catch((error) => {
                    console.error('API request error:', error);
                })
            } else{
                setShowSuggestions(false)
            }
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [search])


    return <div className={style.searchBarDiv} >
        <input placeholder="Keresés..." onChange={inputHandler} className={style.searchBar} type="text" />
        <div className={`${style.suggestions} ${showSuggestions && style.showSuggestions}`}>
            {suggestions.map((elem) => {
                return <SuggestionItem key={elem.id} product={elem} />
            })}
        </div>
    </div>
}

export default SearchBar;