import styled from 'styled-components';

const borderColor = 'rgb(229, 229, 229)';
const backgroundColor = 'rgb(255, 255, 255)';

export const Container = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: 20rem;
  padding: 3rem;
  margin: 0px auto;
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${borderColor};
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const AddButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`;
