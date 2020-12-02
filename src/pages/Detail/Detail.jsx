import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './Detail.styles';

class Detail extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Detail will mount');
  }

  componentDidMount = () => {
    console.log('Detail mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Detail will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Detail will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Detail did update');
  }

  componentWillUnmount = () => {
    console.log('Detail will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="DetailWrapper">
        Test content
      </div>
    );
  }
}

Detail.propTypes = {
  // bla: PropTypes.string,
};

Detail.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
