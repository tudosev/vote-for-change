var prevSelection;
var stampSound = new Audio('./sounds/stamp.wav');
onVoteClick = (selection) => {
    stampSound.play();

    dataLayer.push({ 'event': 'click-' + selection });
    var frame = document.querySelector(".container-" + selection + " .round-frame");
    frame.classList.toggle("text-aligner");
    frame.children[0].classList.toggle("hide");
    prevSelection = selection;

    removeOther(selection);
}

reset = (selection) => {
    var opposite = selection === "one" ? "two" : "one";
    var element = document.querySelector(".container-" + opposite);
    element.classList.toggle("hide");
    element.style.opacity = "1";

    var frame = document.querySelector(".container-" + selection + " .round-frame");
    frame.classList.toggle("text-aligner");
    frame.children[0].classList.toggle("hide");

    var bkg = document.querySelector(".background");
    bkg.classList.remove("bag");
    bkg.classList.remove("pas");
}

removeOther = (selection) => {
    var opposite = selection === "one" ? "two" : "one";
    var element = document.querySelector(".container-" + opposite);
    element.style.opacity = "0";
    element.addEventListener('transitionend', () => {
        var content = document.querySelector(".content");
        content.classList.add("hide");
        changeBackground(selection);
    });
}

changeBackground = (selection) => {
    var bkg = document.querySelector(".background");
    var overlay = document.querySelector(".inner-overlay");

    var attributes = document.querySelector(".attributes."+ selection);
    attributes.classList.toggle("hide");

    overlay.style.alignItems = "baseline";
    if (selection == "one") {
        bkg.classList.add("bag");
    }
    else {
        bkg.classList.add("pas");
    }
}