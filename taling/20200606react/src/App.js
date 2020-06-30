import React, { Component } from 'react';
import produce from 'immer';

class App extends Component {
  id = 2;

  state = {
    input: '',
    todos: [
      {
        id: 1,
        text: '제목1',
        done: true,
      },
      {
        id: 2,
        text: '제목2',
        done: true,
      },
    ],
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleInsert = e => {
    /* 리턴 필요없음 */
    this.setState(
      produce(draft => {
        // draft는 불변성유지된 상태
        draft.todos.push({
          id: ++this.id,
          text: this.state.input,
          done: false,
        });
        draft.input = '';
      }),
    );
  };
  // handleInsert = () => {
  //   this.setState({
  //     todos: this.state.todos.concat({
  //       id: ++this.id, /* 이미 state에 2까지 되어있으므로 먼저 증가시킴 */
  //       text: this.state.input,
  //       done: false,
  //     })
  //   })
  // };

  handleToggle = id => {
    this.setState(
      produce(draft => {
        // toggle하려고 하는 아이템 찾음
        const item = draft.todos.find(item => item.id === id);
        item.done = !item.done;
      }),
    );
  };
  //	handleToggle = (id) => {
  //		this.setState({
  //			todos: this.state.todos.map((todo) =>
  //				todo.id === id ? { ...todo, done: !todo.done } : todo
  //			),
  //		});
  //	};

  handleRemove = id => {
    this.setState(
      produce(draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    );
  };

  render() {
    // 동기, 비동기, promise 예제
    // console.log(1);
    // setTimeout(() => {
    //   console.log(2);
    // }, 1000);
    // console.log(3);

    function test(flag) {
      if (!flag) {
        console.log('1');
        setTimeout(() => {
          console.log('2');
          test(true);
        }, 1000);
      } else console.log(3);
    }
    //test(false);

    function promiseFunc() {
      // 요청하면 resolved때 응답을 준다는 약속을 하는 객체
      // 오래걸리는 요청작업을 Promise로 감싸주기만 하면 됨
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // const error = new Error('error!');
          // reject(error);

          // console.log(2);
          // resolve();
          const response = '데이터요청';
          resolve(response);
        }, 1000);
      });
    }

    promiseFunc()
      //요청보낸 작업(셋타임아웃1초) 끝날동안 기다렸다가
      //성공이면(resolve) then()으로, 실패면(reject) catch()로 받는다.
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });

    return (
      <div>
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.handleInsert}>추가</button>
        </div>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
              }}
              onClick={() => this.handleToggle(todo.id)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleRemove(todo.id);
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
