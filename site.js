var prevSelection;
onVoteClick = (selection) => {
    if (selection !== prevSelection)
        reset();

    var element = document.querySelector(".candidate-" + selection + " .round-frame");
    element.classList.toggle("text-aligner");
    element.children[0].classList.toggle("hide");
    prevSelection = selection;

}

reset = () => {
    var element = document.querySelector(".candidate-" + prevSelection + " .round-frame");

    if (!element)
        return;

    element.classList.remove("text-aligner");
    element.children[0].classList.add("hide");
}