import React from 'react';

import NoChange from './NoChange';
import SummaryChangeIcon from './SummaryChangeIcon';

const SummaryChanges = ({ percentageChange }) => {

    if (percentageChange === undefined | isNaN(percentageChange)) {
        return (
            <div>
                <span>Change:</span>
                <NoChange />
                <span>N/A</span>
            </div>
        );
    }

    return (
        <div>
            <span>Change:</span>
            <SummaryChangeIcon percentageChange={percentageChange} />
            <span>{percentageChange}%</span>
        </div>
    );
}

export default SummaryChanges;
