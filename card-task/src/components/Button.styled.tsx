import styled from "styled-components";

type StyledBtnPropsType = {
  fontSize?: string;
  color?: string;
  border?: string;
};

export const Button = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${(props) => props.color || "teal"};
  padding: 10px 20px;
  border-radius: 5px;
  color: #3d3838;
  font-weight: bold;
  border: 1px solid ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "2rem"};
`;
