import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
 
export default class ChangePasswordComponent extends Component{
		onChange(e) {
			e.preventDefault();
			const oldPassword = ReactDOM.findDOMNode(this.refs.password).value.trim();
			const newPassword = ReactDOM.findDOMNode(this.refs.newpassword).value.trim();
			const newPasswordConfirm = ReactDOM.findDOMNode(this.refs.newpasswordconfirm).value.trim();
			if(newPassword==newPasswordConfirm)	
					Accounts.changePassword( oldPassword , newPassword, (error)=>{ 
						if(!error)
							Materialize.toast(er.reason, 4000);
						else
							FlowRouter.go('/home');
						} );

		}
		render(){
			return(
					<div className="container">
						<header>
							<h1>Change Pasword</h1>
							<form onSubmit={this.onChange.bind(this)} >
								<ul>Type Current Pasword<input type="password" ref="password" placeholder="Current Password" required
								/></ul>
								<ul>Type New Password<input type="password" ref="newpassword" placeholder="New Password" required
								/></ul> 
								<ul>Confirm New Password<input type="password" ref="newpasswordconfirm" placeholder="Confirm Password" required
								/></ul> 
								<ul>	
									<button type="submit" className="col s4 waves-effect waves-light btn">change</button>
								</ul>
							</form>
						</header>
					</div>
					);
		}
}
