import React from 'react';
import '../app.css'

class AddSkiField extends React.Component{
    render(){
        return <div>
            <h1>Know of a ski field which isn't listed? Add a new one</h1>
            <form>
                <label>name :</label>
                <input type="text"/>
                <label>rating :</label>
                <input type="text"/>
            <button onClick={() => console.log("k")}>submit</button>
        </form>
    </div>
    }
}

export default AddSkiField;