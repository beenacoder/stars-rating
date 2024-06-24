import { useState } from "react"
import { FaStar } from "react-icons/fa"


function Rating({stars = 10}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleClick = (getIndex) => {
        setRating(getIndex)
    }


    const handleMouseOn = (getIndex) => {
        setHover(getIndex);
    }


    const handleMouseOff = (getIndex) => {
        setHover(rating)
    }



  return (
    <div className="star-rating">
{
    [...Array(stars)].map((_, index) => {
        index += 1;
        return <FaStar 
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off' }
            onClick={() => {handleClick(index)}}
            onMouseMove={() => {handleMouseOn(index)}}
            onMouseLeave={() => {handleMouseOff(index)}}
            size={40}
        />
    })
}
    </div>
  )
}

export default Rating