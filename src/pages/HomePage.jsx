import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Cont = styled.article`
  /* width: 40%; */
  width: min(480px, 100%);
  height: 100vh;
  display: flex;
  /* flex: 0 1 380px; */
  flex-basis: 380px;
  margin: auto;
  flex-direction: column;

  form {
    width: max(380px, 100%);
  }
`;

const SectCont = styled.section`
  width: 100%;
  height: 33.3%;
  outline: 1px solid red;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Header = styled.header`
  width: 100%;
  border: 1px solid blue;
`;

export default function HomePage() {
  const [members, setMembers] = useState([]);
  const memberRef = useRef();
  const [payer, setPayer] = useState(0);
  const [pays, setPays] = useState([]);

  const addMember = () => {
    setMembers([...members, memberRef.current.value]);
    memberRef.current.value = '';
  };
  const deleteMember = (e) => {
    console.log(e.target.previousNode);
  };
  useEffect(() => {});

  const changePayer = (index) => {
    setPayer(index);
  };

  return (
    <Cont>
      <SectCont>
        <Header>
          <h2>모임 정보</h2>
          <p>정산 모임 구성원을 입력하세요</p>
        </Header>
        <form>
          <fieldset>
            <legend></legend>
            <label htmlFor="memberName">
              구성원
              <input type="text" ref={memberRef} id="memberName" placeholder="구성원 정보를 입력하세요" required />
            </label>
            <button type="button" onClick={addMember}>
              추가
            </button>
          </fieldset>
          {/* <button type="button" onClick={addMember}>
            구성원 추가
          </button> */}
          {members &&
            members.map((el, index) => (
              <fieldset key={index}>
                <label>
                  {el} <input type="radio" name="payer" defaultChecked={index === payer} onClick={changePayer} />
                  <button type="button" onClick={deleteMember}>
                    삭제
                  </button>
                </label>
              </fieldset>
            ))}
        </form>
      </SectCont>

      <SectCont>
        <Header>
          <h2>정산 항목</h2>
          <p>정산할 항목을 입력하세요</p>
        </Header>
        <form>
          {pays &&
            pays.map((pay, index) => (
              <fieldset key={index}>
                <legend> {index + 1}</legend>
                <label htmlFor="payName">
                  정산 내용
                  <input type="text" id="payName" placeholder="정산 내용을 입력하세요" />
                </label>
                <label htmlFor="payPrice">
                  정산 금액
                  <input type="number" id="payPrice" placeholder="금액을 입력하세요" />
                </label>
                <div>
                  {pay.member.map((mem, index) => (
                    <label htmlFor="member" key={index}>
                      <input type="checkbox" name="member" checked />
                      {mem}
                    </label>
                  ))}
                </div>
                <button type="button">추가</button>
                <button type="button">삭제</button>
              </fieldset>
            ))}
          <button type="button">정산 항목 추가</button>
        </form>
      </SectCont>

      <SectCont>
        <Header>
          <h2>결과</h2>
          <p>정산 결과를 확인하세요</p>
        </Header>
        <ul>
          <li>
            <strong>총무</strong>
            <p>사용 금액</p>
          </li>
          <li>
            <strong>총무</strong>
            <p>사용 금액</p>
          </li>
          <li>
            <strong>총무</strong>
            <p>사용 금액</p>
          </li>
        </ul>
        <button>처음으로</button>
        <button>결과공유</button>
      </SectCont>
    </Cont>
  );
}
