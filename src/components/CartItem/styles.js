import styled, { css } from 'styled-components';

const borderColor = 'rgb(229, 229, 229)';
const backgroundColor = 'rgb(255, 255, 255)';

const button = css`
  background-color: black;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem;
`;

export const Image = styled.img`
  width: 100px;
  height: 100%;
`;

export const NameContainer = styled.div`
  width: 400px;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1.5rem;
`;

export const QuantityChangerButton = styled.button`
  ${button}
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
`;

export const DeleteButton = styled.button`
  ${button}
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
