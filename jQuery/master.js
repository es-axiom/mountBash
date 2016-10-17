let DISP = window;
let quizlet;
let name;
let progress;

$(document).ready(() => {
  quizlet = $('#quizlet');
  addGreeting();
  addNameInput();
});

function addGreeting() {
  let greetingMessage = $('<div>').addClass('greeting-message').addClass('greet');
  let greetingString = 'Welcome';
  greetingMessage.html(greetingString);
  quizlet.append(greetingMessage);
}

function addNameInput() {
  let nameInput = $('<input>').addClass('name-input').addClass('greet');
  nameInput.attr({
    type: 'text'
  });
  nameInput.submit( (e) => {
    handleNameSubmit(e.currentTarget.value);
  });
  nameInput.keypress((e) => {
    if(e.which == 13) {
      name = nameInput.val();
      nameInput.submit();
      return false;
    }
  });
  quizlet.append(nameInput);
}
