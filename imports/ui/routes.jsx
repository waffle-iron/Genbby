import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import  HomeLayout  from './layouts/HomeLayout.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import RegisterComponent from './components/RegisterComponent.jsx';

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
