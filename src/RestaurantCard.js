import {starIcon} from './util/image/star-regular.svg'

const Card = ({name, cuisines, rating, cost, location,image}) => {
    return (
        <div className="cardContainer">
            <div>
                <img className="cardImgWrapper" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}></img>
            </div>
            <div className="cardTextBody">
                <div className='nameWrapper'>
                  <h3>{name}</h3>

                  <div>
                  <p>{rating}</p>
                  {/* <img
                    className='icon'
                    src={starIcon}
                  ></img> */}
                  </div>
                  
                </div>
                <div className="costWrapper">
                  <p>{cuisines.join(", ")}</p>
                  <p>{cost}</p>
                </div>
                
            </div> 
        </div>
    )
}

export default Card