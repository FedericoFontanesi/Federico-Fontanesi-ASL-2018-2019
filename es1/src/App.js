import React, { Component } from 'react';

class App extends React.Component{
	
constructor(props){	
	super(props);
		this.state = {
			click:0,
			mostra:true
		};
   }
	
	IncrementItem = () => {
		this.setState({click:this.state.click +1});
	} 
	
	DecreaseItem = () => {
		this.setState({click:this.state.click -1});
	}
	
	ToggleClick = () => {
    this.setState({ mostra: !this.state.mostra });
  }
	
	render(){
		return(
		
		
	<div>
		<button onClick={this.IncrementItem}>Clicca per incrementare di 1</button> 
        <button onClick={this.DecreaseItem}>Clicca per decrementare di 1</button> 
        <button onClick={this.ToggleClick}>
		
		{ this.state.mostra ? 'Nascondi numero' : 'Mostra numero' }
        </button>
        { this.state.mostra ? <h2>{ this.state.click }</h2> : '' }
		
	</div>	
		
		
		);	
			
	}
		
}
export default App;

