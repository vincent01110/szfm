import React from "react";
import Header from "./header/Header";
import CategoriesCard from "./categories/CategoriesCard";



const HomePage = () => {


    return <div style={{display: "flex", width: "100%", flexWrap: "wrap"}}>
        <Header/>
        <CategoriesCard />
    </div>
}

export default HomePage;