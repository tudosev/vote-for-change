var prevSelection;
onVoteClick = (s) => {
    reset();
    var element = document.querySelector(".candidate-" + s + " .round-frame");
    element.classList.add("text-aligner");
    element.children[0].classList.remove("hide");
    prevSelection = s;

}

reset = () => {
    var element = document.querySelector(".candidate-" + prevSelection + " .round-frame");

    if (!element)
        return;
    element.classList.remove("text-aligner");
    element.children[0].classList.add("hide");
}