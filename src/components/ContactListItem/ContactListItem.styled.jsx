import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export const ButtonDelete = styled.button`
  border-radius: 4px;
  height: 30px;
  padding: 0 5px;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
