import React from 'react';
import {node, string} from "prop-types";

const ApplicationTemplate = ({title, form, children}) => (
    <>
        <h1>{title}</h1>
        {form}
        <img src="../images/8bitSkiField.gif"/>
        {children}
        </>
);
ApplicationTemplate.propTypes = {
    title: string.isRequired,
    form:node.isRequired,
    children:node.isRequired
}
export default ApplicationTemplate;


