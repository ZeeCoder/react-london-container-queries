import React from "react";
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={200}
        theme={theme}
        progress="bar"
        contentWidth={1500}
        contentHeight={900}
      >
        <Slide
          notes={notes([
            "thank you for having me",
            "My name is Viktor, I work at EventsTag",
            "At EventsTag we use something called a Container Query for better, easier RWD",
            "I have a lib for React too, which I'd like to briefly present to you"
          ])}
        >
          <Heading size={1} fit lineHeight={1}>
            @container {"{}"} query
          </Heading>
          <div style={{ transform: "translateY(130px)" }}>
            <Text textSize="60" bold textColor="secondary">
              in React
            </Text>
            <Text margin="90px 0 0" textSize="60" textColor="secondary">
              Viktor Hubert
            </Text>
            <Text margin="20px 0 0" textSize="60" textColor="secondary">
              EventsTag
            </Text>
          </div>
        </Slide>

        <Slide
          notes={notes([
            "let's take a step back first to see what my library is trying to solve"
          ])}
        >
          <Heading>What's the Problem?</Heading>
        </Slide>

        <Slide
          notes={notes([
            "just a very basic example to show you what it's about",
            "this is doable with media queries"
          ])}
        >
          <Window>
            <BackgroundChanger />
          </Window>
        </Slide>

        <Slide notes={notes(["this could be achieved with @media queries"])}>
          <CodePane
            lang="less"
            source={ExMQMyComponent.mqCSS}
            margin="20px auto"
            overflow="overflow"
            textSize="40px"
          />
        </Slide>

        <Slide notes={notes(["The problem"])}>
          <Window width={[500, 900]}>
            <MQBackgroundChanger />
          </Window>
        </Slide>

        <Slide notes={notes(["let's go back to the MQ example"])}>
          <CodePane
            lang="less"
            source={ExMQMyComponent.mqCSS}
            margin="20px auto"
            overflow="overflow"
            textSize="40px"
          />
        </Slide>

        <Slide
          notes={notes([
            "some string replace",
            "one of the main goals were familiar css syntax"
          ])}
        >
          <CodePane
            lang="less"
            source={ExMQMyComponent.cqCSS}
            margin="20px auto"
            overflow="overflow"
            textSize="40px"
          />
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

        <Slide notes={notes(["You would probably expect this to work too"])}>
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
          notes={notes(["Probably the most abstract definition I could find"])}
        >
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
        </Slide>

        <Slide
          notes={notes([
            `You can basically think of it as a "Component"`,
            '"container" => historical reasons'
          ])}
        >
          <Heading size={1} fit>
            What is a Container?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Styling only the queried element itself ➡️ "element query"
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Styling descendants too ➡️ "container query"</ListItem>
            </Appear>
            <Appear>
              <ListItem>Any element</ListItem>
            </Appear>
            <Appear>
              <ListItem>A React Component</ListItem>
            </Appear>
          </List>
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
            "took the liberty to strip out all irrelevant styling to make the CSS easier to digest"
          ])}
        >
          <CodePane
            lang="js"
            source={ExMQMyComponent.webpackConfig}
            margin="20px auto"
            overflow="overflow"
            textSize="35px"
          />
          <CodePane
            lang="js"
            source={ExMQMyComponent.webpackConfig}
            margin="20px auto"
            overflow="overflow"
            textSize="35px"
          />
        </Slide>

        <Slide bgColor="primary" textSize="20">
          <Heading textColor="tertiary">How does it work?</Heading>
        </Slide>

        <Slide bgColor="primary" textSize="20" notes={[""]}>
          <Text bold textColor="tertiary">
            CSS ➡️ PostCSS ➡️ React Component
          </Text>
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            source={ExMQMyComponent.webpackConfig}
            margin="20px auto"
            overflow="overflow"
            textSize="35px"
          />
        </Slide>

        <Slide>
          <CodePane
            lang="js"
            source={ExMQMyComponent.postCssConfig}
            margin="20px auto"
            overflow="overflow"
            textSize="35px"
          />
        </Slide>

        <Slide
          notes={notes([
            "Mention that all the animations were live demos (spectacle)"
          ])}
        >
          <CodePane
            lang="js"
            source={ExMQMyComponent.js}
            margin="20px auto"
            overflow="overflow"
            textSize="25px"
          />
        </Slide>

        <Slide>
          <Heading size={2} textColor="tertiary">
            The Present and Future
          </Heading>
          <List>
            <Appear>
              <ListItem>ResizeObserver</ListItem>
            </Appear>
            <Appear>
              <ListItem>Houdini (Layout API)</ListItem>
            </Appear>
            <Appear>
              <ListItem>WICG</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Image src="/img/TweetWICG.png" />
        </Slide>

        <Slide
          bgColor="primary"
          notes={notes([
            "Please give it a try using the online editable demos with codesandbox",
            "basically codepan for react, where everything I've mentioned is already set up",
            "If those convince you, feel free to visit the project's GitHub page"
          ])}
        >
          <Heading size={2} textColor="tertiary" margin="0 0 130px">
            Thank You
          </Heading>
          <Text textSize="50" margin="20px 0 0" textColor="secondary">
            Viktor Hubert
          </Text>
          <Text textSize="40" margin="20px 0 0" textColor="secondary">
            @ZeeCoder
          </Text>
          <Text textSize="50" margin="100px 0 0" textColor="secondary">
            https://github.com/ZeeCoder/container-query
          </Text>
          <Text textSize="50" margin="10px 0 0" textColor="secondary">
            https://codesandbox.io/u/ZeeCoder/sandboxes
          </Text>
        </Slide>
      </Deck>
    );
  }
}
