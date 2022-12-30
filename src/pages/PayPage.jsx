import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export default function PayPage() {
  const location = useLocation();
  const users = location.state.users;
  const payer = location.state.payer;
  console.log('user', users);
  console.log('payer', payer);
  return (
    <>
      <header>
        <h2>정산 페이지</h2>
        <p>정산할 항목과 금액 정보를 입력해주세요.</p>
      </header>
      <main>
        <form>
          <fieldset>
            <label>
              <span className="ir">항목명 입력</span>
            </label>
            <input type="text" placeholder="항목을 입력해주세요" />

            <label>
              <span className="ir">가격 입력</span>
              <input type="number" placeholder="금액을 입력해주세요" />
            </label>

            <div>
              <label>
                <input type="checkbox" value="all" name="member" defaultChecked /> 전체선택/해제
              </label>
              <label>
                <input type="checkbox" value="경현" name="member" defaultChecked /> 경현
              </label>
              <label>
                <input type="checkbox" value="주헌" name="member" defaultChecked /> 주헌
              </label>
              <label>
                <input type="checkbox" value="형원" name="member" defaultChecked /> 형원
              </label>
            </div>
          </fieldset>
        </form>

        <button type="button">추가</button>
        <Link to="/result">다음</Link>
      </main>
    </>
  );
}
