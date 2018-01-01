import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'//第一步 设置reducer规则

//第二部 创建store
let store = createStore(todoApp)
const state = store.getState();//对 Store 生成快照,获取数据
console.log(state);
let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)