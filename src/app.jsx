import React, {useEffect, useState} from 'react';
import {getAllSkiFieldReviews} from "./api/skiFieldAPI";
import AddSkiFieldForm from './components/AddSkiFieldForm'
import TableOfReviews from './components/TableOfReviews'
import ApplicationTemplate from "./components/ApplicationTemplate";
import './app.css';

 const App = () => {
     const [reviews, setReviews] = useState([]);
     const [submitCount, setSubmitCount] = useState(0);

     const onSubmit = () => {setSubmitCount(submitCount+1)};

     useEffect(() => {
         getAllSkiFieldReviews()
             .then(data => setReviews(data))
     },[submitCount]);

     return(
    <ApplicationTemplate form={<AddSkiFieldForm onSubmit={onSubmit}/>} >
        <TableOfReviews reviews={reviews}/>
    </ApplicationTemplate>)
}





export default App;