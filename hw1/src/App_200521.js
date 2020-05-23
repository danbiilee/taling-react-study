import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
	email: {
		value: '',
		isValid: false,
		comment: ''
	},
	password: {
		value: '',
		isValid: false,
		comment: ''
	}
  };

  handleChange = e => {
	const { name, value } = e.target;
	let regExp = '';
	let isValid = false;
	let comment = '';

	// 이메일 유효성 검사
	if (name === 'email') {
		regExp = /@/;
		isValid = regExp.test(value);
		comment = isValid || value.length === 0 ? '' : '@가 포함되어야 합니다.';
	}

	// 비밀번호 유효성 검사
	if (name === 'password') {
		regExp = /(?=.*[A-Z])(?=.*[a-z]).{6,}/;
		isValid = regExp.test(value);

	}

	if (name === 'password' && !isValid) {
		if (value.length === 0) {
			comment = '';
		} else if (value.length < 6) {
			comment = '6자리 이상 입력하세요.';
		} else if (value.search(/[a-z]/) === -1) {
			comment = '소문자가 1개 이상 포함되어야 합니다.';
		} else if (value.search(/[A-Z]/) === -1) {
			comment = '대문자가 1개 이상 포함되어야 합니다.';
		}
	}

    this.setState({
		[name]: {
			value,
			isValid, 
			comment
		}
    });
  };

  componentDidUpdate(prevProps, prevState) {
	const { email, password } = this.state;
	const btn = document.querySelector('.btn');
	
	if (email.isValid && password.isValid) {
		btn.disabled = false;
		btn.classList.add('active');
	} else {
		btn.disabled = true;
		btn.classList.remove('active');
	}
  }

  render () {
	const { email , password } = this.state;

    return (
      	<div className="App">
			<div className="input-wrapper">
				<input type="text" name="email" placeholder="Enter Email" onChange={this.handleChange}></input>
				{
					email.comment !== '' ? <p className="comment">{email.comment}</p> : ''
				}
			</div>
			<div className="input-wrapper">
				<input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}></input>
				{
					password.comment !== '' ? <p className="comment">{password.comment}</p> : '' 
				}
			</div>
        <button className="btn" disabled>submit</button>
      </div>
    );
  }
}

export default App;
