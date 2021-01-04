import React from 'react';
import {node, string} from "prop-types";

const ApplicationTemplate = ({title, form, children}) => (
    <div className='pageLayout'>
        <div className='pageHeader'>
            <h1>{title}</h1>
            {form}
        </div>
        <div className="pageContent">{children}</div>
    </div>
);
ApplicationTemplate.propTypes = {
    title: string.isRequired,
    form:node.isRequired,
    children:node.isRequired
}
export default ApplicationTemplate;


