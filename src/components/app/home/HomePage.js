import React from "react";
import Header from "./header/Header";
import CategoriesCard from "./categories/CategoriesCard";
import MostSearchedCard from "./most-searched/MostSearchedCard";



const HomePage = () => {


    return <div style={{display: "flex", width: "100%", flexWrap: "wrap"}}>
        <Header/>
        <CategoriesCard />
        <MostSearchedCard />
    </div>
}

export default HomePage;