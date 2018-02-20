import React, { Component } from "react";
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
  Appear,
  CodePane,
  Image
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import "normalize.css";
import "./styles.css";
import Comment from "./components/Comment";
import Window from "./components/Window";
import BackgroundChanger from "./components/BackgroundChanger";
import * as ExMQMyComponent from "./code-examples/MQMyComponent";
import * as ExComment from "./code-examples/Comment";
import MQBackgroundChanger from "./components/MQBackgroundChanger";

const theme = createTheme(
  {
    primary: "#182025",
    secondary: "#94D1CC",
    tertiary: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const fixedComment = fixedProps => props => (
  <Comment {...props} {...fixedProps} />
);

const Jupiter = fixedComment({
  avatar: "/img/Jupiter.png",
  username: "Jupiter"
});

const Sun = fixedComment({
  avatar: "/img/Sun.png",
  username: "Sun"
});

const Mars = fixedComment({
  avatar: "/img/Mars.png",
  username: "Mars"
});

const Pluto = fixedComment({
  avatar: "/img/Pluto.png",
  username: "Pluto"
});

// Grid and flexbox works great with container queries, the same way they do with media queries.

const notes = notesArr => notesArr.map(note => `- ${note}`).join("<br>");

const Container = props => {
  if (window.location.href.indexOf("?presenter") !== -1) {
    return <div {...props} />;
  }

  return (
    <div
      {...props}
      style={Object.assign({}, props.style || {}, {
        margin: "0 auto",
        width: props.width,
        height: props.height
      })}
    />
  );
};

const RegularContainer = props => (
  <Container {...props} width={1500} height="auto" />
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={200}
        theme={theme}
        progress="bar"
        contentWidth={1920}
        contentHeight={1000}
      >
        <Slide
          notes={notes([
            "thank you for having me",
            "Viktor, eventstag",
            "use at EventsTag, for responsive design",
            "talk about what container queries are, what containers are, and about my lib"
          ])}
        >
          <RegularContainer>
            <Heading size={1} fit lineHeight={1}>
              @container {"{}"} query
            </Heading>
            <div style={{ transform: "translateY(130px)" }}>
              <Text textSize="60" bold textColor="secondary">
                in React
              </Text>
              <Text margin="120px 0 0" bold textSize="70" textColor="secondary">
                Viktor Hubert
              </Text>
              <Text margin="20px 0 0" textSize="50" textColor="secondary">
                EventsTag
              </Text>
            </div>
          </RegularContainer>
        </Slide>

        <Slide>
          <Heading>The Problem</Heading>
        </Slide>

        <Slide notes={notes(["simple", "media queries"])}>
          <Window>
            <BackgroundChanger />
          </Window>
        </Slide>

        <Slide>
          <RegularContainer>
            <CodePane
              lang="less"
              source={ExMQMyComponent.mqCSS}
              margin="20px auto"
              overflow="overflow"
              textSize="40px"
            />
          </RegularContainer>
        </Slide>

        <Slide>
          <Window width={[500, 900]}>
            <MQBackgroundChanger />
          </Window>
        </Slide>

        <Slide notes={notes(["let's go back to the MQ example"])}>
          <RegularContainer>
            <CodePane
              lang="less"
              source={ExMQMyComponent.mqCSS}
              margin="20px auto"
              overflow="overflow"
              textSize="40px"
            />
          </RegularContainer>
        </Slide>

        <Slide notes={notes(["string replace", "familiar css syntax"])}>
          <RegularContainer>
            <CodePane
              lang="less"
              source={ExMQMyComponent.cqCSS}
              margin="20px auto"
              overflow="overflow"
              textSize="40px"
            />
          </RegularContainer>
        </Slide>

        <Slide>
          <Window width={[500, 900]}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: "2" }}>
                <BackgroundChanger />
              </div>
              <div style={{ flex: "1" }}>
                <BackgroundChanger />
              </div>
            </div>
            <BackgroundChanger />
          </Window>
        </Slide>

        <Slide notes={notes(["expected to work"])}>
          <Window width={[650, 850, 900, 1100]}>
            <BackgroundChanger>
              <div style={{ margin: "0 100px" }}>
                <BackgroundChanger>
                  <div style={{ margin: "0 100px" }}>
                    <BackgroundChanger />
                  </div>
                </BackgroundChanger>
              </div>
            </BackgroundChanger>
          </Window>
        </Slide>

        <Slide
          bgColor="primary"
          textColor="secondary"
          notes={notes(["what it boils down to"])}
        >
          <RegularContainer>
            <Heading size={1} fit>
              What is a @container query?
            </Heading>
            <Appear>
              <Text
                textColor="secondary"
                bold
                style={{ transform: "translateY(150px)" }}
                textSize={70}
              >
                Container queries allow you to change styles based on a target
                element's size.
              </Text>
            </Appear>
          </RegularContainer>
        </Slide>

        <Slide>
          <RegularContainer>
            <Heading size={1} fit margin="0 0 60px">
              What is a Container?
            </Heading>
            <List>
              <ListItem margin="15px 0 0">
                Styling only the queried element itself ➡️ "element query"
              </ListItem>
              <ListItem margin="15px 0 0">
                Styling descendants too ➡️ "container query"
              </ListItem>
              <ListItem margin="15px 0 0">Any element</ListItem>
              <ListItem margin="15px 0 0">A React Component</ListItem>
            </List>
          </RegularContainer>
        </Slide>

        <Slide bgColor="primary" textSize="20">
          <RegularContainer>
            <Heading textColor="tertiary">How does it work?</Heading>
            <Text
              bold
              textColor="tertiary"
              style={{ transform: "translateY(100px)" }}
            >
              CSS ➡️ PostCSS ➡️ React Component
            </Text>
          </RegularContainer>
        </Slide>

        <Slide>
          <RegularContainer>
            <CodePane
              lang="js"
              source={ExMQMyComponent.webpackConfig}
              margin="20px auto"
              overflow="overflow"
              textSize="35px"
            />
          </RegularContainer>
        </Slide>

        <Slide>
          <RegularContainer>
            <CodePane
              lang="js"
              source={ExMQMyComponent.postCssConfig}
              margin="20px auto"
              overflow="overflow"
              textSize="35px"
            />
          </RegularContainer>
        </Slide>

        <Slide notes={notes(["all are live demos (spectacle)"])}>
          <CodePane
            lang="js"
            source={ExMQMyComponent.js}
            margin="20px auto"
            overflow="overflow"
            textSize="30px"
          />
        </Slide>

        <Slide>
          <Window>
            <Jupiter comment="Lorem ipsum">
              <Pluto comment="Lorem ipsum">
                <Mars comment="Lorem ipsum" />
                <Pluto comment="Lorem ipsum" />
              </Pluto>
              <Mars comment="Lorem ipsum" />
            </Jupiter>
          </Window>
        </Slide>

        <Slide
          notes={notes([
            "stripped out bits",
            "could handle json stats differently",
            "webpack loader"
          ])}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flex: "2" }}>
              <CodePane
                lang="less"
                source={ExComment.css}
                overflow="overflow"
                textSize="20px"
              />
            </div>
            <div style={{ width: "10px" }} />
            <div style={{ flex: "3" }}>
              <CodePane
                lang="js"
                source={ExComment.js}
                overflow="overflow"
                textSize="20px"
              />
            </div>
          </div>
        </Slide>

        <Slide>
          <Container width={600}>
            <Heading size={2} textColor="tertiary">
              Highlights
            </Heading>
            <List style={{ transform: "translateY(50px)" }}>
              <ListItem margin="15px 0 0">Familiar syntax</ListItem>
              <ListItem margin="15px 0 0">Made for React</ListItem>
              <ListItem margin="15px 0 0">ResizeObserver</ListItem>
              <ListItem margin="15px 0 0">CSS preprocessing</ListItem>
            </List>
          </Container>
        </Slide>

        <Slide>
          <RegularContainer>
            <Heading textColor="tertiary" size={2} fit>
              The Future of Container Queries
            </Heading>
          </RegularContainer>
        </Slide>

        <Slide>
          <RegularContainer>
            <Heading textColor="tertiary" size={2}>
              Houdini
            </Heading>
            <Text textSize={35} margin="10px 0 0" textColor="secondary">
              (Layout API)
            </Text>
          </RegularContainer>
        </Slide>

        <Slide>
          <RegularContainer>
            <Heading size={2} textColor="tertiary">
              WICG!
            </Heading>
            <Text margin="30px auto 80px" textColor="secondary" textSize={30}>
              (Web Incubator Community Group)
            </Text>
            <Image src="/img/TweetWICG.png" />
          </RegularContainer>
        </Slide>

        <Slide
          bgColor="primary"
          notes={notes([
            "so much more",
            "demos are recommended",
            "coworkers",
            "fiancee"
          ])}
        >
          <RegularContainer>
            <Heading size={2} textColor="tertiary" margin="0 0 130px">
              Thank You
            </Heading>
            <Text textSize="50" margin="20px 0 0" textColor="tertiary">
              Viktor Hubert
            </Text>
            <Text textSize="40" margin="20px 0 0" textColor="tertiary">
              @ZeeCoder
            </Text>
            <Container width={1150} style={{ textAlign: "left" }}>
              <Text textSize="50" margin="100px 0 0" textColor="secondary">
                https://codesandbox.io/u/ZeeCoder/sandboxes
              </Text>
              <Text textSize="50" margin="10px 0 0" textColor="secondary">
                https://github.com/ZeeCoder/container-query
              </Text>
              <Text textSize="50" margin="10px 0 0" textColor="secondary">
                https://github.com/WICG/cq-usecases
              </Text>
              <Text textSize="50" margin="10px 0 0" textColor="secondary">
                https://github.com/WICG/container-queries
              </Text>
            </Container>
          </RegularContainer>
        </Slide>
      </Deck>
    );
  }
}
