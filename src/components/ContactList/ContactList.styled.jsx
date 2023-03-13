import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
`;

export const ListItame = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnDelete = styled.button`
  background-color: #fff;
  outline: none;
  padding: 6px 8px;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    box-shadow: 0 0 20px rgba(50, 50, 93, 0.25);
    background: blue;
  }
`;
