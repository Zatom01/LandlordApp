import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './containers/Home'
import Navbar from './components/Navbar';
import LandlordList from './containers/landlords/LandlordList'
import LandlordForm from './containers/landlords/LandlordForm'
import LandlordShow from './containers/landlords/LandlordShow'
import { fetchLandlords } from './actions/landlords'




class App extends Component {
  componentDidMount() {
    this.props.fetchLandlords();
  }


  render() {
    return (
      <Router>
        <h1>LandLords App</h1>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/landlords" component={LandlordList} />
            <Route exact path="/landlords/new" component={LandlordForm} />
            <Route exact path="/landlords/:id" component={LandlordShow} />
            <Route render={(props) => <div>This page doesnot exist!</div>} />
          </Switch>

        </div>

      </Router>

    );
  }

}

export default connect(null, { fetchLandlords })(App);
