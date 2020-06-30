## 🥊🥊 0611. 과제 완료! 🥊🥊


### [🔍]
#### 1. Axios Multi Request
> 공식문서 `multiple concurrent requests` 참고 
> <https://github.com/axios/axios> 

응답까지 10초가 걸리는 2개의 요청을 각각 호출하면 응답을 모두 받는 데 총 20초가 걸린다.  
하지만 `axios`의 `all()` 메서드를 이용하면 2개의 요청을 한 번에 호출해, 2개의 응답을 모두 받기까지 총 10초가 걸리도록 할 수 있다.

```javascript
const [lotto1, lotto2] = await axios.all([
  axios.get('http://askat.me:8000/api/lotto1'),
  axios.get('http://askat.me:8000/api/lotto2'),
]);

this.setState({
  data: lotto1.data.concat(lotto2.data).join(' '),
});
```
각 요청은 3개의 수를 배열 형식으로 반환하고, 두 배열을 합해 공백으로 구분된 6개의 수를 문자열로 state에 저장하면 되는 문제였다.  
`all()` 메서드에 요청이 2개였기 때문에 비구조 할당 후 `concat()` 메서드를 이용해 합쳐도 별 문제가 없었지만, 요청이 많아질 경우를 대비해 `reduce()` 메서드를 이용해 코드를 효율적으로 변경하도록 하자. 

```javascript
const arr = await axios.all([
  axios
    .get('http://askat.me:8000/api/lotto1')
    .then(response => response.data),
  axios
    .get('http://askat.me:8000/api/lotto2')
    .then(response => response.data),
]);

this.setState({
  data: arr
    .reduce((accumulator, currentVal) => accumulator.concat(currentVal))
    .join(' '),
});
```

#### 2. axios-cache-adapter
> 참고 <https://www.npmjs.com/package/axios-cache-adapter>

`axios-cache-adapter`를 사용하면 첫 요청에만 시간이 걸리고, 그 다음 요청부터는 첫 요청 때 캐싱된 데이터를 가져와 응답하므로 시간이 걸리지 않는다.    
import를 해준 후 클래스 필드에 생성한 `cache` 인스턴스를 이용해 요청을 보내면 된다. 

```javascript
import { setupCache } from 'axios-cache-adapter';

class App extends Component {
  cache = setupCache({
    maxAge: 15 * 60 * 1000,
  });

  api = axios.create({
    adapter: this.cache.adapter,
  });

  getSlowData = () => {
    this.api
    .get('http://askat.me:8000/api/slow')
    .then(//...)
  };
}
```
한 번 `getSlowData` 핸들러 함수에서 `axios-cache-adapter`를 이용해 요청을 보내면 그 뒤 어디서든 똑같은 요청을 다시 보내더라도 실제 요청 작업은 들어가지 않고 바로 캐싱된 데이터를 갖고 온다. 

> ❗ 처음에는 `getSlowData` 함수 안에서 `cache` 인스턴스 생성을 했었는데, 그러면 함수에서 매번 새롭게 인스턴스가 생성되므로 결국은 아무 것도 캐싱할 수 없게 된다!    
❗ 공식문서는 `api({url: ..., method: get...})` 의 방식만을 소개하고 있지만 axios이므로 `api.get('http://...')` 같은 방식으로 사용해도 된다! 