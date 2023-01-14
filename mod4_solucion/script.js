(function saludo() {
  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim",];
  console.log(names)
  for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.name = names[i];
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.name = names[i];
      helloSpeaker.speak(names[i]);
    }
  }


})();