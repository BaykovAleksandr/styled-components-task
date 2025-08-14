import { styled } from "styled-components";
import "./App.css";
import { Button } from "./components/Button.styled";
import { Card } from "./components/Card.styled";
import { H1Styled } from "./components/H1.Styled";
import { Paragraph } from "./components/Paragraph.styled";
import { Picture } from "./components/Picture.styled";

function App() {
  return (
    <StyledWrapper>
      <Card>
        <Picture />
        <H1Styled>Headline</H1Styled>
        <Paragraph>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Paragraph>
        <StyledWrapper>
          <Button color={"#7e8e57"} fontSize={"16px"}>
            Add
          </Button>
          <Button color={"#dfe7e9"} border={"black"} fontSize={"14px"}>
            Delete
          </Button>
        </StyledWrapper>
      </Card>
      <Card>
        <Picture />
        <H1Styled>Headline</H1Styled>
        <Paragraph>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Paragraph>
        <StyledWrapper>
          <Button color={"#4cc798"} fontSize={"16px"}>
            Add
          </Button>
          <Button color={"#201761"} border={"black"} fontSize={"14px"}>
            Delete
          </Button>
        </StyledWrapper>
      </Card>
      <Card>
        <Picture />
        <H1Styled>Headline</H1Styled>
        <Paragraph>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Paragraph>
        <StyledWrapper>
          <Button color={"#9b904b"} fontSize={"16px"}>
            Add
          </Button>
          <Button color={"#dfe7e9"} border={"red"} fontSize={"16px"}>
            Delete
          </Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: start;
  max-width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;
