import { connect } from 'react-redux'
import Chart from '../components/Chart'

export default connect(
    state => ({trades: state.trades})
)(Chart);