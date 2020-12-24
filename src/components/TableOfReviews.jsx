import React, {useState, useEffect} from "react";
import { arrayOf, string} from "prop-types";

function TableOfReviews({reviews}){
    return ( <table>
        <tr>
            <th> ski field </th>
        </tr>
        <tbody>
        {reviews.map((review,index) => <tr key={index}><td>{review}</td></tr>)}
        </tbody>
    </table>)
}
TableOfReviews.propTypes = {
    reviews: arrayOf(string).isRequired,
}
export default TableOfReviews;

