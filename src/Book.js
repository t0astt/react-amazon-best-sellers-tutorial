import React from "react";

const Book = (props) => {
    const {author, title, img} = props;  // destructuring props into vars.

    return (
        <div className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </div>
    )

}

export default Book;