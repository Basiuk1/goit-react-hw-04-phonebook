import styled from '@emotion/styled';

export const ContactForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
`;

export const FormInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  margin: 0 auto;
  border-radius: 4px;
  padding: 5px 10px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
