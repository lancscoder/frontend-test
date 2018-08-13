import React from 'react';

import Increase from './Increase';
import Decrease from './Decrease';
import NoChange from './NoChange';

const SummaryChangeIcon = ({ percentageChange }) => {
    if (percentageChange < 0) {
        return <Decrease />
    }

    if (percentageChange === 0) {
        return <NoChange />
    }

    return <Increase />
}

export default SummaryChangeIcon;
