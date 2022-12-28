import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Header = tw.header`
py-16
w-full
  bg-yellow-200
  text-center
`;

const Main = tw.main`
  bg-green-200
`;
export default function LandingPage() {
  return (
    <>
      <Header>
        <h2>정산 페이지</h2>
        <input type="date" />
        <p>모임의 정보와 구성원을 입력해주세요.</p>
      </Header>
      <Main>
        <form>
          <label>
            <span class="ir">구성원 입력</span>
            <input defaultValue={'경현'} />
            <input type="radio" name="payer" checked />
            <button type="button">삭제</button>
          </label>
          <label>
            <span class="ir">구성원 입력</span>
            <input defaultValue={'형원'} />
            <input type="radio" name="payer" />
            <button type="button">삭제</button>
          </label>
        </form>
        <button type="button">추가</button>
        <Link to="/pay">다음</Link>
      </Main>
    </>
  );
}
