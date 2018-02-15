// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Test from "./components/Test";
import Resizer from "./components/Resizer";

// Require CSS
import "normalize.css";

const theme = createTheme(
  {
    primary: "#ccc",
    secondary: "#1F2022",
    // tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={200}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            @container {"{}"} query
          </Heading>
          <Appear>
            <Text margin="30px 0 0" textSize="60" bold>
              in React
            </Text>
          </Appear>
          <Resizer fit>
            <Test />
          </Resizer>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" textSize="20">
          <Text margin="10px 0 0" textSize="80">
            Viktor Hubert
          </Text>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" textSize="20">
          <Heading size={1} fit>
            What is a @container query?
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <BlockQuote textColor="secondary">
            <Quote textColor="secondary">
              Container queries allow us to change styles based on a target
              element's size.
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1}>Summary</Heading>
          <List>
            <ListItem>one</ListItem>
            <ListItem>two</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Text textSize="50">Viktor Hubert</Text>
          <Text textSize="50">@ZeeCoder</Text>
        </Slide>
      </Deck>
    );
  }
}
