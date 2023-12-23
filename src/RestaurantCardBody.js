import { useState } from "react"
import Card from "./RestaurantCard"
// import { resObj } from "./util/constant"

const CardBody = ({resData}) => {
    
    return (
        <div className="cardBody">
            {resData.map((ele, index) => (
                <Card 
                  key = {index}
                  name = {ele?.info?.name}
                  cuisines = {ele?.info?.cuisines}
                  rating= {ele?.info?.avgRating}
                  location = {ele?.info?.areaName}
                  cost = {ele?.info?.costForTwo}
                  image= {ele?.info?.cloudinaryImageId}
                  deliveryTime = {ele?.info?.sla?.slaString}
                />
            ))}
        </div>
    )
}

export default CardBody