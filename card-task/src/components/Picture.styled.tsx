import { styled } from "styled-components";
import sandImage from "../assets/sand.png";

export const Picture = styled.div`
  width: 280px;
  height: 170px;
  border-radius: 4px;
  background-image: url(${sandImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  margin: 0 auto;
`;
