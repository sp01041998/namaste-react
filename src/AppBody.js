import { useState } from "react"
import CardBody from "./RestaurantCardBody"
import { resObj } from "./util/constant"

const AppBody = () => {
    const [resData, setResData] = useState(resObj)

    function handleClick(){
        const filteredList = resData.filter((res) => {
            return res?.info?.avgRating > 4
        })
        filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating )
        setResData(filteredList)
    }
    return (
        <div className="appBody">
            <button className="btnContainer"
                onClick={handleClick}
            >
                Top rated Restaurant
            
            </button>
            <CardBody resData = {resData}/>
        </div>
    )
}

export default AppBody