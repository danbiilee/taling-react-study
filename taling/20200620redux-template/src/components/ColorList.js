import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {
	render() {
		const { onChange } = this.props;

		return (
			<div>
				<form className="ColorList">
					<input placeholder="원하는 색을 입력하세요" onChange={onChange} />
				</form>
			</div>
		);
	}
}

export default ColorList;
