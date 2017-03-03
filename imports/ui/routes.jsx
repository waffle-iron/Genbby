import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import  HomeLayout  from './layouts/HomeLayout.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import RegisterComponent from './components/RegisterComponent.jsx';
import RecoverPasswordComponent from './components/RecoverPasswordComponent.jsx';
import ChangePasswordComponent from './components/ChangePasswordComponent.jsx';
import ResetPasswordComponent from './components/ResetPasswordComponent.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<LoginComponent />)
		});
	}
});

FlowRouter.route('/register', {
	action() {
		mount(MainLayout, {
			content: (<RegisterComponent />)
		});
	}
});

FlowRouter.route('/home', {
	action() {
		mount(MainLayout, {
			content: (<HomeLayout />)
		});
	}
});

FlowRouter.route('/recover', {
	action() {
		mount(MainLayout, {
			content: (<RecoverPasswordComponent />)
		});
	}
});

FlowRouter.route('/change/',{
	action(){
		mount(MainLayout,{
			content: (<ChangePasswordComponent />)
		});
	}
});

FlowRouter.route('/reset-password/:token',{
	action(params){
		mount(MainLayout,{
			content: (<ResetPasswordComponent token={params.token}/>)
		});
	}
});
