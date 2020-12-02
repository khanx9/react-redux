import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//import { Test } from './Edit.styles';
import { updateTask } from '../../store/actions'
import { bindActionCreators } from 'redux'

class Edit extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false,
      name: '',
      status: false,
      taskUpdate: {},
      id: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props)
    const { location } = this.props
    const state = location?.state
    this.setState({
      taskUpdate: state?.taskUpdate || {},
      name: state?.taskUpdate?.name,
      status: state?.taskUpdate?.status,
      id: state?.taskUpdate?.id
    })
  }

  onChange = e => {
    // console.log(e.target.value)
    if (e.target.value)
      this.setState({
        status: e.target.value === 'pending' ? false : true
      })
    console.log(this.state.status)
  }

  navigateIndex = () => this.props.history.push('/index')

  onSubmit = () => {
    const { name, status, id } = this.state;
    console.log(this.state)
    this.props.updateTask({name,status,id});
    this.navigateIndex()
  }

  onHandleChange = (e) => this.setState({[e.target.name] : e.target.value})

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className='EditWrapper'>
        <label htmlFor=''>Name</label>
        <br />
        <input
          type='text'
          name='name'
          onChange={this.onHandleChange}
          value={this.state.name}
        />
        <br />
        <br />
        <label htmlFor=''>Status</label>
        <p>{this.state.status ? 'Complete' : 'Pending'}</p>
        <br />
        <select name='' id='' onChange={this.onChange}>
          <option value={'complete'}>complete</option>
          <option value={'pending'}>pending</option>
        </select>

        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

Edit.propTypes = {
  // bla: PropTypes.string,
}

Edit.defaultProps = {
  // bla: 'test',
}

const mapStateToProps = state => ({
  // blabla: state.blabla,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
