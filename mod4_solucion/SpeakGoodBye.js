(function (window) {
    let byeSpeaker = {}

    let speakword = "bye"

    byeSpeaker.speak = function () {
        console.log(speakword + " " + byeSpeaker.name)
    }
    window.byeSpeaker = byeSpeaker;
})(window);
