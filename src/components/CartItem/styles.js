import styled, { css } from 'styled-components';

const borderColor = 'rgb(229, 229, 229)';
const backgroundColor = 'rgb(255, 255, 255)';

const button = css`
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

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 100px;
  height: 100%;

  @media (max-width: 600px) {
    width: 75px;
    height: 75%;
    margin-left: 1rem;
  }
`;

export const NameContainer = styled.div`
  width: 400px;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
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
  background-color: transparent;
  ${button}
  font-size: 2.5rem;

  & svg {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const DeleteButton = styled.button`
  ${button}
  background-color: black;
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;
