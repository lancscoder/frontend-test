import React from 'react';
import { Panel } from 'react-bootstrap';

import 'react-vis/dist/style.css';

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

const Chart = ({ trades }) => (
    <Panel>
        <Panel.Heading>
            <Panel.Title componentClass="h3">&nbsp;</Panel.Title>
        </Panel.Heading>
        <Panel.Body id="chartBody">
            <XYPlot
                xType="time"
                height={400}
                width={400}
            >
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={trades.lastPrices} />
                <LineSeries data={trades.mids} />
                <LineSeries data={trades.bids} />
                <LineSeries data={trades.asks} />
                <LineSeries data={trades.lows} />
                <LineSeries data={trades.highs} />
            </XYPlot>
        </Panel.Body>
    </Panel>
);

export default Chart;