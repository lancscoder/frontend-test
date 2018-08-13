import React from 'react';
import { Panel } from 'react-bootstrap';
import SummaryChange from '../containers/SummaryChangeContainer';

const Summary = ({ current }) => (
    <Panel bsStyle="info">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Summary</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <div>Current Prive £{current}</div>
            <SummaryChange />
        </Panel.Body>
    </Panel>
);

export default Summary;
