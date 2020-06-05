## 🥊🥊 0603. 과제 완료! 🥊🥊



### [🔍]
1. `Grid.js` 에서 리스트 아이템에 고유한 key를 추가하라는 에러가 계속 났다. Card 컴포넌트에만 추가하면 되는 줄 알고, 왜 안되는 건지 한참 헤맸다. 막 고치다가 아래와 같은 에러도 만났다.
> Warning: Encountered two children with the same key, ... Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.  

결과적으로 수업 때 배웠던 것처럼 아주 간단히 클래스 필드에 id값 추가해주고 key로 넣어주면 되는 거였다. 

```javascript
<div className="Grid">
  {chunk(list, 8).map(l => {
    return ( 
      <div key={this.id++}> {/* 이 div도 리스트의 아이템이므로 key를 넣어줘야 한다. */}
        {l.map(card => {
          return ( // TODO
            <button 
              key={card.id}
              className="Card" 
              onClick={()=> {onToggle(card.id); tempOpen(card.id, card.value);}} 
              disabled={card.isOpen}>
              <Card card={card} />
            </button>
          )
        })}
      </div>)
    })}
</div>
```



