import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;

  @media (max-width: 600px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 3rem;
  pointer-events: all;
`;

export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
