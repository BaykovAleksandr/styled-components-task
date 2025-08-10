import "./App.css";
import { Button } from "./components/Button.styled";
import { Card } from "./components/Card.styled";
import { H1Styled } from "./components/H1.Styled";
import { Paragraph } from "./components/Paragraph.styled";
import { Picture } from "./components/Picture.styled";

function App() {
  return (
    <Card>
      <Picture />
      <H1Styled>Headline</H1Styled>
      <Paragraph>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </Paragraph>
      <Button color={"#4cc798"} fontSize={"18px"}>
        Add
      </Button>
      <Button color={"#70355e"} fontSize={"14px"}>
        Delete
      </Button>
    </Card>
  );
}

export default App;
