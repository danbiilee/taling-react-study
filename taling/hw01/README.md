
## 🥊🥊 0521. 과제 완료! 🥊🥊

> 🛠🛠 0522. 수정   
> 🛠🛠 0528. 수정

### [피드백]
#### 1. state에는 렌더링에 영향을 주는 최소한의 것만 담자!     
isValid나 message도 렌더링에 영향을 주긴 하지만, 
직접적으로 바뀌는 경우는 없다. 때문에 isValid와 message는 render() 안에서 value에 근거해 계산하는 것이 좋다. 그렇게 수정하면 handleChange함수가 본 의도대로 한 가지 일만 할 수 있다는 장점도 생긴다.

📌 state값을 변경하는 동작은 render가 호출되기 전에(class와 render 사이),    
그 외 돔 상태를 변경하는 동작은 렌더링이 되는 과정?(render와 return 사이)에서 하는 것!!!  

#### 2. `querySelector`를 사용하기 보다는 `ref`를 이용해서 DOM을 조작하자. 
참조: <https://reactjs.org/docs/refs-and-the-dom.html>

#### 3. `render`의 유효성 검사들을 함수로 빼서 관리하자.
   


---
### 💡 **렌더링이 두번 발생하는 이유**  
참조: <https://ko.reactjs.org/docs/strict-mode.html>   

index.js에서 `App` 컴포넌트에 `StrictMode`가 적용되어있는 것을 확인할 수 있다. 

```javascript  
<React.StrictMode>
    <App />
</React.StrictMode>
```

`StrictMode`는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구로 아래와 같은 부분에 도움이 된다. 
- 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
- 레거시 문자열 ref 사용에 대한 경고
- 권장되지 않는 findDOMNode 사용에 대한 경고
- 예상치 못한 부작용 검사
- 레거시 context API 검사  

개념적으로 React는 두 단계로 동작한다.  
1. 렌더링 단계: DOM과 같은 환경에 어떤 변화가 필요한지 결정하는 단계이다. 이 과정에서 React는 render를 호출해 이전 render와 결과값을 비교한다.
   - 호출 메서드: `constructor`, `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate`, `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `setState`
2. 커밋 단계: React가 변경 사항을 반영하는 단계이다. 
    - 호출 메서드: `componentDidMount`, `componentDidUpdate`

렌더링 단계에서 호출하는 메서드들은 여러 번 호출될 수 있으므로 부작용을 포함하지 않아야 한다. 그래서 `StrictMode`를 사용해 아래의 함수를 의도적으로 **이중 호출**하여 문제가 되는 부분을 발견할 수 있도록 하는 것이다.
- `constructor`, ***`render`***, `shouldComponentUpdate`, `getDerivedStateFromProps` 
- 함수 컴포넌트 바디
- State updater 함수 (`setState의` 첫 번째 인자)
- `useState`, `useMemo`, `useReducer`에 전달되는 함수


> `StrictMode`는 개발 모드에서만 활성화되기 때문에, 프로덕션 모드에서는 영향을 끼치지 않는다.






