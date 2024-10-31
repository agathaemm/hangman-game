import styled from 'styled-components';

type Props = {
  remainingAttempts: number;
};

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background-color: brown;
    transform: rotate(90deg);
    position: absolute;
    top: 15px;
  }
`;

const Head = styled.div<Props>`
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  opacity: ${({ remainingAttempts }) => (remainingAttempts < 6 ? 1 : 0)};
  transition: opacity 1s;

  .eye {
    font-size: 12px;
    font-weight: bold;
  }
`;

const Body = styled.div<Props>`
  height: 50px;
  width: 1px;
  background-color: black;
  position: relative;

  transition: opacity 1s;
  opacity: ${({ remainingAttempts }) => (remainingAttempts < 5 ? 1 : 0)};

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: black;
    top: 10px;
    transform: rotate(45deg);

    transition: opacity 1s;
    opacity: ${({ remainingAttempts }) => (remainingAttempts < 4 ? 1 : 0)};
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: black;
    right: 0;
    top: 10px;
    transform: rotate(135deg);

    transition: opacity 1s;
    opacity: ${({ remainingAttempts }) => (remainingAttempts < 3 ? 1 : 0)};
  }
`;

const Foot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const LeftLeg = styled.div<Props>`
  width: 20px;
  height: 1px;
  background-color: black;
  transform: rotate(135deg);

  transition: opacity 1s;
  opacity: ${({ remainingAttempts }) => (remainingAttempts < 2 ? 1 : 0)};
`;

const RightLef = styled.div<Props>`
  width: 20px;
  height: 1px;
  background-color: black;
  transform: rotate(45deg);

  transition: opacity 1s;
  opacity: ${({ remainingAttempts }) => (remainingAttempts < 1 ? 1 : 0)};
`;

export default { Wrapper, Head, Body, Foot, LeftLeg, RightLef };
