import * as types from '../types';


const initialState = {
    theme: 'light',
    tasks: []
}

localStorage.setItem('tasks',JSON.stringify([]));


const app = (state = initialState, action) => {
    switch (action.type) {
        case types.addTask:
            const task = action.payload;
            return {
                ...state,
                tasks: [...state.tasks, task]
            }
        case types.updateTask:
            const taskUpdate = action.payload;
            const target = state.tasks;
            let findById = target.find(f => f.id === taskUpdate.id);
            Object.entries(taskUpdate).forEach(([key, value]) => {
                if (key) {
                    findById[key] = value
                }
            })
            return {
                ...state,
                tasks: target
            }
        case types.deleteTask:
            const taskId = action.payload;
            return {
                ...state,
                tasks: state.tasks.filter(f => f.id !== taskId)
            }
        default:
            return state;
    }
}

export default app;