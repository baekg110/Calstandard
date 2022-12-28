import React from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export default function LandingPage() {
  return <Container>테스트</Container>;
}
