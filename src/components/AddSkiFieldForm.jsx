import React,{ useState } from 'react';
import { addSkiFieldReview } from '../api/skiFieldAPI';
import '../app.css';

function AddSkiFieldForm(){
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    return (
         <div>
            <h1>Know of a ski field which isn't listed? Add a new one</h1>
            <form>
                <label id="name">name :</label>
                <input type="text" onChange={(event) => setName(event.target.value)}/>
                <label id="rating">rating :</label>
                <input type="text" onChange={(event) => setReview(event.target.value)}/>
            <button type='button' onClick={() => addSkiFieldReview(name,review)}>submit</button>
        </form>
    </div>
)
}

export default AddSkiFieldForm;