/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';//添加
export const COMPLETE_TODO = 'COMPLETE_TODO';//切换完成状态
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'//设置显示类别

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',//全部
  SHOW_COMPLETED: 'SHOW_COMPLETED',//已完成
  SHOW_ACTIVE: 'SHOW_ACTIVE'//未完成
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}