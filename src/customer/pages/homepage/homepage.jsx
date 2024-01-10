import React from "react";
import MainCarosel from "../../component/homeCarosel/mainCarosel"; // Update the path accordingly
import HomeSectionCarosel from "../../component/homeSectionCarosel/homeSectionCarosel";
import {mens_kurta} from "../../../data/mens_kurta";

const HomePage = () =>{
    return(
    <div>
        <MainCarosel/>
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shirt"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's saree"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's dress"}/>
        </div>
    </div>
    )
}

export default HomePage;