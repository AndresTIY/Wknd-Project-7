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

### Checkboxes

------PLAN-------
- [ ] Figure out Components/Views needed

- [ ] Figure out what each Component will do

- [ ] Figure out if any special methods are needed on these Components
  - [ ]Clicking activates Modal



-----Working Through-------
- [X] Comp: Start Page to Add Name
  - [X] Button to progress to Game Screen/Board
  - [X] Name should be saved to the GLOBAL state

- [X] Reducer Needs to be created for State
- [X] Set up API
- [ ] Populate Correct API Data in their Components
  - [X] Categories, h3, get's _Title_
  - [X] Each Block/LI item get's a _Value_

----------Get Done on Saturday----------

- [X] Clicking LI item brings up a MODAL
  - [ ] _Question_ appears, with an input
  - [ ] input needs to be compared to _answer_
-[ ] map out each category, so then i only have questions, answers, etc



-----------------------------------------------

- [ ] Comp: When $ Value is Clicked, Modal Pops Up with answer and 2 Buttons

  - [ ] Answer Button
    - [ ] Creates Input and Submit Button
      - [ ] Correct Answer adds points
      - [ ] Wrong Answer ....


  - [ ] Pass Button
    - [ ] Removes that Answer Card from that Category

- [X] Comp: Name Card, takes input from Start Page
- [ ] Comp: Points Card, adds Points and show's Total Point Value
