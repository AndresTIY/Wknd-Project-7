## Weekend Project 7 - Build a Game of Jeopardy!

Build Jeopardy
- Include a 'start page' to add your name before starting
- game board with 6 categories, each cat containing 5 questions worth 200, 400, 600, 800, 1000 points
- a question page or modal that shows the question when you click on it in the game board
- an input field to type in the correct answer
- a total point value for how many points you've received
- think about how many components you will have
- think about what state will need to exist outside your components and in the store's application state. (same thing)

Plan it!
- what components are needed?
- what will the components do?
- any special methods on these components?
- what data is needed from the API?
  - api = http://jservice.io/api/
- how will I get it(hint: actions and the store)
- polish


-----------------Working Through--------------------

- [X] Component: Start Page to Add Name
  - [X] Button to progress to Game Screen/Board
  - [X] Name should be saved to the GLOBAL state

- [X] Reducer Needs to be created for State
- [X] Set up API
- [X] Populate Correct API Data in their Components
  - [X] Categories, h3, get's _Title_
  - [X] Each Block/LI item get's a _Value_

  - [X] Clicking LI item brings up a MODAL
    - [ ] _Question_ appears, with an input
    - [ ] input needs to be compared to _answer_
- [ ] Component: When $ Value is Clicked, Modal Pops Up with _Question_ , 2 buttons, and an input field

  - [X] Input and Submit Button
    - [ ] Correct Answer adds points
    - [ ] Wrong Answer displays a Wrong Answer Alert
- [ ] Pass Button
  - [ ] Removes that Answer Card from that Category

- [X] Comp: Name Header Card, takes input from Start Page
- [ ] Comp: Points Card, adds Points and show's Total Point Value

-----------------Challenges--------------------

**Clicking `<li>` item brings up a MODAL**

There is a correct Modal for each value. Going through the inspector, you can see that each list item has a hidden Modal with the correct data. The problem here is that when the onClick event occurs, every single Modal pop ups. The user will see the final modal every time which corresponds to the last category with the highest value. Tried to give each <ModalView/> an ID, so that if the ID's match, only that specific Modal would show, but could not get that to work properly.
