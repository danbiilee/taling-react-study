import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; //액션생성함수 *로 불러왔으므로 합쳐줄 거 필요
import * as ColorListActions from '../store/modules/colorList';
import ColorList from '../components/ColorList';
import { changeColor } from '../store/modules/counter';

class ColorListContainer extends Component {
  // 여기서 값 가공하는 함수 만들어서 보여주기용 컴포넌트에 내려주기 
  // ColorList는 그대로 받아서 쓰기만 할 뿐!
  handleChange = (e) => {
    const { changeInput } = this.props.colorListActions;
    changeInput(e.target.value);
  }
  
  handleInsert = () => {
		
	}
  handleUpdate = () => {}
  handleRemove = () => {}

  render() {
    const {list, input, colorListActions} = this.props;

    return <ColorList list={list} input={input} onChange={this.handleChange} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  colorListActions: bindActionCreators(ColorListActions, dispatch),
})

export default connect(({ colorList }) => ({
  //state.모듈명.
  list: colorList.list,
  input: colorList.input,
}), mapDispatchToProps)(ColorListContainer);
