import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <h2>오늘의 정산</h2>
      <input type="date" />
      <p>모임의 정보와 구성원을 입력해주세요.</p>
    </>
  );
}
