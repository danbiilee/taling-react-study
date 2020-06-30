import React, { Component } from 'react';

class Sub extends Component {
  render() {
    const search = this.props.location.search;
    // search => ?information=true
    const params = new URLSearchParams(search);
    const info = params.get('information') === 'true' ? true : false;

    return (
      <div>
        <h2>서브화면입니다.</h2>
        {info && <div>more information...</div>}
      </div>
    );
  }
}

export default Sub;
