(function (window) {
    let helloSpeaker = {}

    let speakword = "hello"

    helloSpeaker.speak = function () {
        console.log(speakword + " " + helloSpeaker.name)
    }
    window.helloSpeaker = helloSpeaker;
})(window);

