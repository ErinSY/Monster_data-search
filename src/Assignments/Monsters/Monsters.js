import React, { useEffect, useState } from 'react';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardList/CardList';
import './Monsters.scss';
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import Card from './Components/Card/Card';
// import { useEffect } from 'react/cjs/react.production.min';

/**********************************************************
  API 주소: https://jsonplaceholder.typicode.com/users

  1. 위 주소를 호출하여 데이터 로딩을 처리해주세요!
    - useEffect()
    - fetch
    - setState (monsters 에 저장)

  2. SearchBox 컴포넌트에 정의한 handleChange 메소드를 넘겨주고, 
호출 시 인자로 들어오는 이벤트객체(e)를 활용해 userInput 으로 setState.

  3. 필터링 로직 구현 (filter 메소드 활용)
      여기서 비교 대상은 monster 객체의 name 값입니다.
      소문자로 바꾼 monster.name 값과 userInput값을 비교.
      filter 메소드가 반환하는 값을 변수에 저장 후 return 문 안에 CardList에 props로 전달
***********************************************************/

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState('');

  // 데이터 로딩
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(setMonsters);
  }, []);

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의
  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  // const searched = monsters.filter((item) => {
  //   if (userInput === '') {
  //     return item;
  //   } else if{item.
  //     return item;
  //   }
  // });

  const searched = monsters.filter(
    (item) => item.name.toLowerCase().includes(userInput)
  );

  console.log(searched);

  // userinput 값을 가져온다.
  // monster data의 name 과 비교한다
  // name에 input값이 포함되어 있으면 그 카트를 보여준다.

  return (
    <div className='monsters'>
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={getValue} />
      {/* {searched.map((item) => (
        <CardList monsters={item} /> */}
      <CardList monsters={searched} />
    </div>
  );
}

export default Monsters;
