import { useEffect, useState } from "react";
import CardBody from "./RestaurantCardBody";
import Shimmer from "./Shimmer";
import axios from "axios";

const AppBody = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSeacrhText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      try {
        const data = await axios.get(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144"
        );
        console.log(data?.data?.data?.cards[1])

        if(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
                setResData(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredData(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }else{
            setResData([])
            setFilteredData([])
        }
      } catch (error) {
        console.log(error);
        setResData([]);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  function searchResturant() {
    const filteredData = resData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(filteredData);
  }

  function handleClick() {
    const filteredList = resData.filter((res) => {
      return res?.info?.avgRating > 4;
    });
    filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredData(filteredList);
  }

  useEffect(() => {
    const handleScroll = async() => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 20;
      console.log({hasReachedBottom})
      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   useEffect(() => {
//     if(!reachedBottom) return
//     const fetchData = async() => {
//         const postData = {
//             lat: '25.3176452',
//             lng: '82.9739144'
//         };
         
//             const data = await axios.post('https://proxy.cors.sh/https://www.swiggy.com/mapi/restaurants/list/update', postData)
//             setResData(data?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//             setFilteredData(data?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
//     }
//     fetchData()
//   }, [reachedBottom])

  if (filteredData.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="appBody">
      <div className="filterContainer">
        <button className="btnContainer" onClick={handleClick}>
          Top rated Restaurant
        </button>
        <div className="searchContainer">
          <input
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSeacrhText(e.target.value);
            }}
          ></input>
          <button onClick={searchResturant}>Search</button>
        </div>
      </div>

      <CardBody resData={filteredData} />
    </div>
  );
};

export default AppBody;
