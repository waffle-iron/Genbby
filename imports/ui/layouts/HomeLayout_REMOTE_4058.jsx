import React, { Component } from 'react';

export default class HomeLayout extends Component{
	render(){
		return (
			<div>
				<h1>Bienvenido</h1>
				<h6 className="center-align">Change password? <a href="/change">Cambiar"Password</a></h6>
			</div>
		);}
}