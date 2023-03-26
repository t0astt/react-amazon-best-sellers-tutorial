import React from "react";

const Book = (props) => {
    const {author, title, img, number} = props;  // destructuring props into vars.

    return (
        <div className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className="number">{`# ${number + 1}`}</span>
        </div>
    )

}

export default Book;