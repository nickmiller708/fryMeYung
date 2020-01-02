import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
	constructor(props) { 
		super(props);
		this.roasts = ['you are a disappointment',
				'how could you be this much of a dummy hehe'];
		this.state = {
			counter: 0,
			roastMessage: ''
		}
		this.increaseCounter = this.increaseCounter.bind(this);
	} 	

	render() {
	   return ( 
	    <div className="App">
	      <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			{this.state.roastMessage}
		</p>
		<p>You've been roasted {this.state.counter} times</p> 
		<button className='btn btn-primary btn-lg' onClick={this.increaseCounter}>Roast Me</button>
	      </header>
	    </div>
	)
	} 

	increaseCounter() {
		let index   = Math.floor(Math.random() * this.roasts.length);
		let counter = this.state.counter;
		let roastMessage = this.roasts[index];
		this.setState({counter: counter + 1, roastMessage});
	}
}

export default App;
