import React,{ useState } from 'react';
import { addSkiFieldReview } from '../api/skiFieldAPI';
import {func} from 'prop-types'
import '../app.css';

function AddSkiFieldForm({onSubmit}){
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    return (
         <div>
            <h1>Know of a ski field which isn't listed? Add a new one</h1>
            <form>
                <label id="name" htmlFor='name_input'>name :</label>
                <input type="text" id='name_input' onChange={(event) => setName(event.target.value)}/>
                <label id="rating" htmlFor='rating_input'>rating :</label>
                <input type="text" id='rating_input' onChange={(event) => setReview(event.target.value)}/>
            <button type='button' onClick={async () => {
                 await addSkiFieldReview(name,review)
                onSubmit();
            }}>submit</button>
        </form>
    </div>
)
}

AddSkiFieldForm.propTypes = {
    onSubmit: func.isRequired,
}

export default AddSkiFieldForm;