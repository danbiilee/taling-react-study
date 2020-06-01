import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
state = {
	input: '', 
};

handleChange = e => {
	this.setState({
		input: e.target.value,
	})
};

handleSubmit = e => {
  e.preventDefault();
  // 부모의 handleInsert 호출 
  this.props.onInsert(this.state.input);
  // 초기화 
  this.setState({
    input: '',
  });
};

render() {
	return (
		<div className="Form">
			<form className="form_container" onSubmit={this.handleSubmit}>
				<input placeholder="something to do?" value={this.state.input} onChange={this.handleChange} />
				<button>추가</button>
			</form>
		</div>
	);
}
}

export default Form;
