### React State

- [ ] Quick Review: Components, JSX, Props
- [ ] React Functional Components
- [ ] JavaScript Functions * Closures Review
- [ ] Component Life Cycle & "Render": what is that?
- [ ] 'State' in React
- [ ] The purpose of useState()
- [ ] Why did they call it 'React'?
- [ ] Dealing with 'Stale' State
- [ ] Sharing State between Components: "lifting up"

### Components

- Components are the building blocks of react
- Take a functionality of a small piece of your application and encapsulated its own isolated container
- A component encapsulate or hide the underlying complexity of what's going on(state, events, etc)
- You build a large app out of multiple smaller apps

### Props

- Props are to components what attributes are to an HTML element
  (the 'src' attribute in an <img> is needed to make the image work)
- Props are arguments given to the component so that it can do it's job properly
- Props are accessible in an object in the first argument of a functional component: `props`

### State
- We use State to allow variables to "survive" a re-render
- State is information that our app uses and modifies
- State is built to be changed during the course of our app
- Using state with functional components needs the useState hook
