function addInformationPage() {
  if($('aside').length == 0) {
    createExample();
  }
}

function createExample() {
  let example = $('<aside>').addClass('example-terminal');
  let example_text = $('<p>').addClass('example-text');
  example_text.html(questions[0][progress].example.t);
  example_link = questions[0][progress].example.link;
  example.append(example_text);
  quizlet.append(example);
}
