import React from 'react';
import { Link } from 'react-router-dom';
import * as land from './LandingComponent';
import { MemberForm } from '../components';

export default function LandingPage() {
  return (
    <land.Container>
      <land.Header>
        <h2>오늘의 정산</h2>
        <input type="date" />
        <p>모임의 정보와 구성원을 입력해주세요.</p>
      </land.Header>
      <land.Main>
        <form>
          <MemberForm value="경현" checked />
          <MemberForm value="형원" />
          <MemberForm value="주헌" />
        </form>
        <button type="button">추가</button>
        <Link to="/pay">다음</Link>
      </land.Main>
    </land.Container>
  );
}
