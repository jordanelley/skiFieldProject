import React from 'react';
import AddSkiFieldForm from './components/AddSkiFieldForm'
import './app.css';

const Table = (
    <table>
        <tr>
            <th> ski field </th>
            <th> rating </th>
        </tr>
        <tr>
            <td> Cadrona </td>
            <td> 5 stars </td>
        </tr>
        <tr>
            <td> Whakapapa </td>
            <td> 2 stars </td>
        </tr>
    </table>

)

import ApplicationTemplate from "./components/ApplicationTemplate";

const App = () => (
    <ApplicationTemplate title='Ski Fields' form={<AddSkiFieldForm/>} >
        {Table}
    </ApplicationTemplate>
)





export default App;