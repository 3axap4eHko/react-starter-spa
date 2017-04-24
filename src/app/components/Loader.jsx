import React from 'react';
import styled from 'styled-components';
import Image from './LoaderAnimation.svg';

const Loading = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`;

export default function Loader() {
  return (
    <Loading>
      <img src={Image} alt="Loading..." />
    </Loading>
  );
}
