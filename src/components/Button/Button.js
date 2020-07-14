import styled from "styled-components";

const Button = styled.button`
  background: var(--twitter);
  color: var(--white);
  border: none;
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: var(--twitter-light-hover);
  }
`;

export default Button;
