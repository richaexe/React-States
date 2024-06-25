import { useState } from "react";

function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);

    let toggleButton = () => {
        setIsLiked(!isLiked)
    }
    let likedStyles = { color: 'red' }
    return (
        <div>
            <p onClick={toggleButton}>
                {isLiked ? <i className="fa-solid fa-heart" style={likedStyles}></i> : <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}

export default LikeButton;