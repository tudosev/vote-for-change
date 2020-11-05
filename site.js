var prevSelection;
var stampSound = new Audio('./sounds/stamp.mp3');
var iAmOnNextPage = false;
onVoteClick = (selection) => {
    stampSound.play();
    window.location.href = "#" + selection;
    iAmOnNextPage = true;
    dataLayer.push({ 'event': 'click-' + selection });

    registerBack(selection);

    var frame = document.querySelector(".container-" + selection + " .round-frame");
    frame.classList.toggle("text-aligner");
    frame.children[0].classList.toggle("hide");
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

registerBack = (selection) => {
    window.onpopstate = (args) => {
        if (iAmOnNextPage) {
            location.reload();
        }
    };
}