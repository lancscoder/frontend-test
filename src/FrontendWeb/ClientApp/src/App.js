import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import SummaryContainer from './containers/SummaryContainer';
import ChartContainer from './containers/ChartContainer';
import { Col, Grid, Row, Navbar } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.props.getTrade(this.props.mode);
  }

  componentDidMount() {
    setInterval(() => this.props.getTrade(this.props.mode), 5000);
  }

  render() {
    return (
      <Fragment>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">&nbsp;</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
          <Grid>
            <Row>
              <Col sm={8}>
                <ChartContainer />
              </Col>
              <Col sm={4}>
                <SummaryContainer />
              </Col>
            </Row>
          </Grid>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>  ({
  getTrade: async mode => {
    switch (mode) {
      case 'fake':
        return dispatch(await actions.requestFakeTrade());
      case 'cors':
        return dispatch(await actions.requestTradeWithCors());
      case 'test':
        return dispatch({TEST: 'TEST'});
      case 'api':
      default:
        return dispatch(await actions.requestApiTrade());
    }
  }
});

export default connect(
  state => state.settings,
  mapDispatchToProps
)(App);


