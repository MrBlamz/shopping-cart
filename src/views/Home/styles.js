import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 5rem;
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
`;

export const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
