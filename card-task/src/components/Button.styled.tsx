import styled from "styled-components";

type StyledBtnPropsType = {
  fontSize: string;
  color: string;
};

export const Button = styled.button<StyledBtnPropsType>`
  border: none;
  margin: 0 20px;
  background-color: ${(props) => props.color || "teal"};
  padding: 10px 20px;
  border-radius: 5px;
  color: #5f5151;
  font-weight: bold;
  font-size: ${(props) => props.fontSize || "2rem"};
`;
