# react-london-container-queries

https://github.com/FormidableLabs/spectacle

## Draft

* separate questions (titles) from answers on separate pages

* introduction: my name, employer, WICG
* Disclaimer: my opinions might not represent the opinion of the whole group
* Aa word on how designing social content was part of the inspiration for me to
look for a solution.
* ‎What is a Container Query?
* basic description: container queries allow us to change styles based on a target
element's size.
* ‎What does it do?
* ‎Explain by comparing to media queries, where the implicit query target is the viewport, while a container query has an explicit target. The same way media queries apply styles in the context of the viewport, I believe container queries should apply styles in the context of their target element. (in most cases you probably want to avoid affecting the styles outside of the container boundaries.)
* ‎but... what is a Container though?
* ‎for the sake of simplicity I'll spare you the history on where container query name comes from. A more react-like name would be: component-query, but that's just not what we call it, since it's not a react-specific idea.
* ‎What are container boundaries?
* ‎example on nestable media component, and illustration on the theory on how scoping would work.
* Can I start using it today?
* sort of. there are several plugins out there but if you're using react, I'd advise you to use my solution.
* ‎Showing a dead simple demo featuring multiple and nested components, by walking through them making a Comment component with media queries (maybe using flexbox to showcase how well it works with container queries), then once we're done, we replace everything with @container, and by applying the HoC, everything just starts to work. (mention that there's a render-prop version, if someone likes that better)
* ‎So... how does it work?
* ‎show the basic idea with the postcss plugin and runtime combination, then showing practical guide about how to set up the postcss plugin configuration. (tip on how I apply different plugins for different css files to make container queries an opt-in feature)
* ‎Last words, summary
* ‎The plugin is a pet-project of mine (rfc, a lot of enhancements planned), while with container queries we aim to make it available to everyone.
* ‎didn't like my version? give a chance to some of the other great solutions out there.

## Original Abstract

**Title:** "@container queries in React"

* The problem: in the advent of reusable components, we should be able to
  conditionally apply styling based on the space available to a given component.
* Idea: `@container` queries in CSS, applied with a JS runtime.
* Introducing `react-container-query`, example (Gifs / Videos).
* Talk about the current WICG efforts to create a spec for browsers.
* Before it's standardized: ResizeObserver, Houdini.
* Mention other libs, polyfills and size-aware react component.

## Prepare for Questions

* Does it work with CSS-in-JS solutions?
* Performance?
* SSR?
* Does it work in non-react environments?
* Does it work with vue.js? Other component libs?
