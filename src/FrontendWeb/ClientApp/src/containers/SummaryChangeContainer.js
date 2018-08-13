import { connect } from 'react-redux'
import SummaryChange from '../components/SummaryChange'

const getPercentageChange = (current, previous) => {
    return { percentageChange: (((current - previous) / previous) * 100).toFixed(2) };
}

export default connect(
    state => getPercentageChange(state.summary.current, state.summary.previous)
)(SummaryChange);