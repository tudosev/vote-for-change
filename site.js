var prevSelection;
onVoteClick = (selection) => {

    dataLayer.push({'event': 'click-' + selection});

    if (selection === prevSelection) {
        reset(selection);
        prevSelection = undefined;
        return;
    }

    removeOther(selection);

    var element = document.querySelector(".container-" + selection + " .round-frame");
    element.classList.toggle("text-aligner");
    element.children[0].classList.toggle("hide");
    prevSelection = selection;
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
        element.classList.add("hide");
        changeBackground(selection);
    });
}

changeBackground = (selection) => {
    var bkg = document.querySelector(".background");
    if (selection == "one") {
        bkg.classList.add("bag");
    }
    else {
        bkg.classList.add("pas");
    }
}