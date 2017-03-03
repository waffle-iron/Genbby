import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class RecoverPasswordComponent extends Component{
	onRecover(e) {
		e.preventDefault();
		console.log("GG");
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m6 offset-m3 l4 offset-l4">
					
					<form action="" className="col s12" onSubmit={this.onRecover.bind(this)}>
						<div className="input-field">
							<input id="recover-email" type="email" className="validate" ref="email"/>
							<label htmlFor="recover-email">email</label>
						</div>
						<div className="col s10 offset-s1">
							<button type="submit" className="col s10 offset-s1 waves-effect waves-light btn">Recuperar</button>
						</div>
					</form>
				</div>
			</div>
		);	
	}
}