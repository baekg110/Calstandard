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
        <h2>오늘의 정산</h2>
        <input type="date" />
        <p>모임의 정보와 구성원을 입력해주세요.</p>
      </Header>
      <Main>
        <form>
          <fieldset>
            <label>
              <span className="ir">구성원 입력</span>
            </label>
            <input type="text" defaultValue={'경현'} />

            <label>
              <input type="radio" name="payer" checked />
            </label>
            <button type="button">삭제</button>
          </fieldset>

          <fieldset>
            <label>
              <span className="ir">구성원 입력</span>
            </label>
            <input type="text" defaultValue={'형원'} />

            <label>
              <input type="radio" name="payer" />
            </label>
            <button type="button">삭제</button>
          </fieldset>

          <fieldset>
            <label>
              <span className="ir">구성원 입력</span>
            </label>
            <input type="text" defaultValue={'주헌'} />

            <label>
              <input type="radio" name="payer" />
            </label>
            <button type="button">삭제</button>
          </fieldset>
        </form>
        <button type="button">추가</button>
        <Link to="/pay">다음</Link>
      </Main>
    </>
  );
}
