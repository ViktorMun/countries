import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const Input = ({ onClick, name }) => {
  return <StyledButton onClick={onClick}> {name}</StyledButton>;
};

export default Input;
