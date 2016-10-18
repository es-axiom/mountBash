class Greeting {
  constructor() {
    this.greetingMessage = $('<div>').addClass('greeting-message').addClass('greet');
    this.nameInput = $('<input>').addClass('name-input').addClass('greet');
    this.greetingString = 'Welcome';

    this.addMessage();
    this.addNameInput();
  }

  addMessage() {
    this.greetingMessage.html(this.greetingString);
    quizlet.append(this.greetingMessage);
  }

  addNameInput() {
    this.nameInput.attr('type', 'text');
    this.nameInput.submit( (e) => {
      this.handleNameSubmit(e.currentTarget.value);
      let master_q = new Question();
    });
    this.nameInput.keypress((e) => {
      if(e.which == 13) {
        this.nameInput.submit();
        return false;
      }
    });
    quizlet.append(this.nameInput);
  }

  handleNameSubmit(name) {
    $('#quizlet').empty();
    $('#game-title').text(name);
    localStorage.setItem('name', name);
    localStorage.setItem('pg', 1);
  }
}
