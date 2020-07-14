import styled from "styled-components";

const ButtonOutlined = styled.button`
  background: transparent;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export default ButtonOutlined;
