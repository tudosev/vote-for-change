var prevSelection;
var stampSound = new Audio('./sounds/stamp.mp3');
onVoteClick = (selection) => {
    stampSound.play();
    dataLayer.push({ 'event': 'click-' + selection });
    var frame = document.querySelector(".container-" + selection + " .round-frame");
    frame.classList.toggle("text-aligner");
    frame.children[0].classList.toggle("hide");

    var opposite = selection === "one" ? "two" : "one";
    oppositeFrame = document.querySelector(".container-" + opposite + " .round-frame");
    oppositeFrame.style.pointerEvents = "none";

    prevSelection = selection;
    removeOther(selection);
}

removeOther = (selection) => {
    var opposite = selection === "one" ? "two" : "one";
    var element = document.querySelector(".container-" + opposite);
    element.style.opacity = "0";
    element.addEventListener('transitionend', () => {
        var content = document.querySelector(".content");
        content.classList.add("hide");
        var navTo = selection === "one" ? "dodonigor.html" : "pas.html"
        window.location.href = "./" + navTo;
        changeBackground(selection);
    });
}

changeBackground = (selection) => {
    var bkg = document.querySelector(".background");

    var attributes = document.querySelector(".attributes." + selection);
    attributes.classList.toggle("hide");

    if (selection == "one") {
        bkg.classList.add("bag");
    }
    else {
        bkg.classList.add("pas");
    }
}