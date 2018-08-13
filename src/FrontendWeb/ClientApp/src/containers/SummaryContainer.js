import { connect } from 'react-redux'
import Summary from '../components/Summary'

export default connect(
    state => ({ current: state.summary.current })
)(Summary);