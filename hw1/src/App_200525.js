import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	render () {
		const { email , password } = this.state;
		const isValid = {
			email: false,
			password: false
		}
		const msg = {
			email: '',
			password: ''
		}
		let disabled = true;

		// 이메일 유효성 검사
		isValid.email = email.search('@') !== -1 ? true : false;
		msg.email = isValid.email || email.length === 0 ? '' : '@가 포함되어야 합니다.';

		// 비밀번호 유효성 검사
		isValid.password = password.search(/(?=.*[A-Z])(?=.*[a-z]).{6,}/) !== -1 ? true : false;
		if(!isValid.password) {
			if (password.length === 0) {
				msg.password = '';
			} else if (password.length < 6) {
				msg.password  = '6자리 이상 입력하세요.';
			} else if (password.search(/[a-z]/) === -1) {
				msg.password  = '소문자가 1개 이상 포함되어야 합니다.';
			} else if (password.search(/[A-Z]/) === -1) {
				msg.password  = '대문자가 1개 이상 포함되어야 합니다.';
			}
		}

		// 버튼 활성화 
		disabled = isValid.email && isValid.password ? false : true;
		if(!disabled) {
			document.querySelector('.btn').classList.add('active');
		}
	
		return (
			<div className="App">
				<div className="input-wrapper">
					<input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange}></input>
					{
						msg.email !== '' ? <p className="comment">{msg.email}</p> : ''
					}
				</div>
				<div className="input-wrapper">
					<input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}></input>
					{
						msg.password !== '' ? <p className="comment">{msg.password}</p> : '' 
					}
				</div>
				<button className="btn" disabled={disabled}>submit</button>
			</div>
		);
	}
}

export default App;