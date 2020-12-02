import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { addTask } from '../../store/actions'
//import { Test } from './Create.styles';

class Create extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false,
      name: '',
      status: false
    }
  }

  componentDidMount = () => {
    console.log('Create mounted')
  }

  onHandleChange = e => this.setState({ [e.target.name]: e.target.value })

  navigateIndex = () => this.props.history.push('/index')

  onSubmit = () => {
    const { name, status } = this.state
    console.log(this.state)
    this.props.addTask({
      id: Date.now(),
      name,
      status
    })
    this.navigateIndex();
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className='CreateWrapper'>
        <label htmlFor=''>Name</label>
        <br />
        <input type='text' name='name' onChange={this.onHandleChange} />
        <br />
        <br />
        <label htmlFor=''>Status</label>
        <br />
        <input type='text' name='status' onChange={this.onHandleChange} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

Create.propTypes = {
  // bla: PropTypes.string,
}

Create.defaultProps = {
  // bla: 'test',
}

const mapStateToProps = state => ({
  // blabla: state.blabla,
})

const mapDispatchToProps = dispatch => bindActionCreators({ addTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Create)
