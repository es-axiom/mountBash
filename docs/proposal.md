#Mount Bash#

Mount Bash is an educational game focusing on \*nix terminal usage. It will cover the basics on navigating the file system and system information requests. The user will progress through checkpoints as they answer correctly.

##Functionality & MVP##

###Mount Bash will offer:###
  * Profile creation, reset character points
  * Trivia questions answered in 2 ways: _text input_ and _options_
  * Production Readme
  * A Modal with links to Terminal resources and common commands
  * Bonus:
    * Upgradeable 'terminal' styles.
    * Bonus questions

##Wireframes##
  - included in Docs -> wireframes/... -

##Architecture & Technologies##

Mount Bash will be a full screen app with keyboard and mouse controls set for navigating the menus/questions. The greeting screen consists of a character creator - allowing you to name your character. The app proceeds to ask you increasingly difficult questions until you reach the last question and receive a congratulatory message for finishing.

  * _JavaScript_ and _JQuery_ for overall game logic and building.
  * _Easel.js_ & _HTML5 Canvas_
  * _Webpack_

  * ```classroom.js``` will handle the _classroom_ logic for creating, updating, destroying it's _blackboard_ and elements, as well as rendering this to the DOM.
  * ```screen.js``` will represent each _blackboard_, handling the rendering of questions, as well as communicating attribute updates to the _user_.
  * ```question.js``` will represent each _question_, telling it's _blackboard_ about response validity.
  * ```user.js``` will handle the user's profile, tracking points and progress. Communicates with _classroom.js_ it's progress to render the correct question.

##Implementation Timeline##
  ####Day 1####
    * Spend time setting up the dependencies for the project, including the webpack ```entry.js``` file to get things rolling.
    * Set up initial Canvas _blackboard_ element - get it rendering.
    * Plan out trivia questions and checkpoint architecture.
    * Review functionality.

  ####Day 2####
    * Create initial _screen_ to create profile and add name.
    * Add option to this screen to set progress (initial starting point)
    * Get a landing page rendering for post user creation.

  ####Day 3####
    * Get correct question to render in _screen_.
    * Set up ```question.js``` to serve correct information and respond to answer.
    * Style all features.
    * Start work on animation after correct answer is submitted.

  ####Day 4####
    * Write Production README.
    * Add finished-game animation.
    * Add option to navigate back to app landing screen.

##Bonus Features##
  * Add questions pertaining to Atom text editor.
  * Add in-game _blackboard_ upgrades to modernize look on a scale depending on _user_ points.
  * Add animation of character's avatar climbing a metaphorical mountain as it progresses through questions.
