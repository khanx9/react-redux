import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Index.module.scss'
import { bindActionCreators } from 'redux'
import { deleteTask } from '../../store/actions'

class Indexes extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  navigateCreate = () => {
    this.props.history.push('/create')
  }

  navigateUpdate = task => {
    this.props.history.push('/edit/' + task.id, { taskUpdate: task })
  }

  deleteTask = id => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm('Do you want to remove it ?')
    if (check) {
      this.props.deleteTask(id)
    }
  }

  updateTask = task => {
    this.navigateUpdate(task)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className={styles.IndexWrapper}>
        <button onClick={this.navigateCreate}>Create new</button>
        <br />
        {this.props.tasks.length !== 0 &&
          this.props.tasks.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.name}</p>
                <p>{e.status ? 'complete' : 'pending'}</p>
                <button onClick={() => this.updateTask(e)}>update</button>
                <button onClick={() => this.deleteTask(e.id)}>delete</button>
                <hr />
              </div>
            )
          })}
      </div>
    )
  }
}

Indexes.propTypes = {
  // bla: PropTypes.string,
}

Indexes.defaultProps = {
  // bla: 'test',
}

const mapStateToProps = state => ({
  // blabla: state.blabla,
  tasks: state.app.tasks
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Indexes)
