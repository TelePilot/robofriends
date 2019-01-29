import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import './app.css';

import { setSearchField, requestRobots } from '../actions';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }



  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            {isPending ? <h1 className='tc'>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          }
          </Scroll>

        </div>
      )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
