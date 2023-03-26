import React from "react";  // Libraries installed, don't need a path
import ReactDOM from "react-dom/client";

import "./index.css"; // We provide so we need a path
import {books} from "./books"; // curlys equals specific item
import Book from "./Book"; // curlys not needed since export default Book


const BookList = () => {
    return (
        // fragment needed since we're returning two top-level elements
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index}/>;  // ... destructures in place
                })}
            </section>
        </>

    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>)