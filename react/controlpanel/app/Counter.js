import React, { Component, PropTypes } from 'react';

class Counter extends Component{
	constructor(props){
		super(props);

		//初始化state为父组件传入的initValue
		this.state = {
			count: props.initValue
		};
	}

	//点击+
	onClickIncrementButton() {
		this.updateCount(true);
	}

	//点击-
	onClickDecrementButton() {
	this.updateCount(false);
	}

	//公共函数
	updateCount(isIncrement) {
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

		//设置当前state
		this.setState({count: newValue})
		//调用父组件传入的回调函数,向父组件传值
		this.props.onUpdate(newValue, previousValue)
	}
	render(){
		return <div>
			<button onClick={this.onClickIncrementButton.bind(this)}>+</button> 
			<button onClick={this.onClickDecrementButton.bind(this)}>-</button> 
			{this.props.caption}{this.state.count}
		</div>;
	}
}


Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f //什么都不做的函数
};

export default Counter;