import React, { Component } from 'react';
import Counter from './Counter.js';

class ControlPanel extends Component{
	constructor(props){
		super(props);
		//设置初始值
		this.initValues = [ 0, 10, 20];
		//对初始值求和
	    const initSum = this.initValues.reduce((a, b) => a+b, 0);
	    //设置state为初始值得和
	    this.state = {
	    	sum: initSum
	    };
	    //为onCounterUpdate函数绑定this
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
	}

	//该改变当前state的回调函数
	onCounterUpdate(newValue, previousValue) {
		const valueChange = newValue - previousValue;
		this.setState({ sum: this.state.sum + valueChange});
	}

	//渲染
	//向子组件传入初始的initValue值
	//向子组件传入onCounterUpdate回调函数,等待子组件调用
	render(){
		return <div>
					<div><Counter onUpdate={this.onCounterUpdate} caption=" 一 " /></div>
					<div><Counter onUpdate={this.onCounterUpdate} caption=" 二 " initValue={this.initValues[1]} /></div>
					<div><Counter onUpdate={this.onCounterUpdate} caption=" 三 " initValue={this.initValues[2]} /></div>
					<hr/>
        			<div>Total Count: {this.state.sum}</div>
				</div>;
	}
}

export default ControlPanel;