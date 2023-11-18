import React from "react";
import Header from "./header/Header";
import CategoriesCard from "./categories/CategoriesCard";
import MostSearchedCard from "./most-searched/MostSearchedCard";
import Footer from "./footer/Footer";



const HomePage = () => {


    return <div style={{display: "flex", width: "100%", flexWrap: "wrap"}}>
        <Header/>
        <CategoriesCard />
        <MostSearchedCard />
        <Footer />
    </div>
}

export default HomePage;