import * as types from '../types';


export const addTask = (task) => {
    return dispatch => {
        dispatch({
            type : types.addTask,
            payload : task
        })
    }
}

export const updateTask = (task) => {
    return dispatch => {
        dispatch({
            type : types.updateTask,
            payload : task
        })
    }
}

export const deleteTask = (taskId) => {
    return dispatch => {
        dispatch({
            type : types.deleteTask,
            payload : taskId
        })
    }
}