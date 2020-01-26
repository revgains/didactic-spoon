import React from 'react';
import styled from '@emotion/styled';

const ZoneWrapper = styled.button`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 30%;
  color: white;
  margin: 12px -2em 12px -2em;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-position: right;
  border-style: none;
  &:hover {
    border-style: solid;
  }
  &:active {
    border-style: none;
  }
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`;

const ZoneText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: capitalize;
  font-size: 3em;
  margin-top: 18px;
`;

const Zone = ({ name, background }) => {
  console.log(name);

  const prettyName = name.replace(/_/g, ' ');

  return (
    <ZoneWrapper img={background}>
      <ZoneText>{prettyName}</ZoneText>
    </ZoneWrapper>
  );
};

export default Zone;
