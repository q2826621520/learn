import { createStore } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actionTypes'
//唯一,只读,使用reducer纯函数修改
// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//       text: '我的第一条任务',
//       completed: true,
//     },
//     {
//       text: '我的第二条任务',
//       completed: false
//     }
//   ]
// }


//初始状态
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

// 1定义Reducer修改规则
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
	  return Object.assign({}, state, {
	    todos: state.todos.map((todo, index) => {
	      if (index === action.index) {
	        return Object.assign({}, todo, {
	          completed: !todo.completed
	        })
	      }
	      return todo
	    })
	  })
    default:
      return state
  }
}

// 2生成store
let store = createStore(todoApp);

// 3设置监听变化
store.subscribe(() =>
  console.log(store.getState())
);

// 4调度
store.dispatch({ type: ADD_TODO, text: '11' });//新增任务1
store.dispatch({ type: ADD_TODO, text: '22' });//新增任务2
store.dispatch({ type: TOGGLE_TODO, index: 0 });//切换任务1完成状态
store.dispatch({ type: SET_VISIBILITY_FILTER, filter: VisibilityFilters.SHOW_COMPLETED });//显示已完成
