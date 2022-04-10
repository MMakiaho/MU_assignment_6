function myFunction1() {
    document.getElementsByClassName("hidden1")[0].style.display="flex";
    document.getElementsByClassName("hidden2")[0].style.display="none";
    document.getElementsByClassName("hidden3")[0].style.display="none";
    document.getElementById("ScrollToView").scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function myFunction2() {
    document.getElementsByClassName("hidden1")[0].style.display="none";
    document.getElementsByClassName("hidden2")[0].style.display="flex";
    document.getElementsByClassName("hidden3")[0].style.display="none";
    document.getElementById("ScrollToView").scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function myFunction3() {
    document.getElementsByClassName("hidden1")[0].style.display="none";
    document.getElementsByClassName("hidden2")[0].style.display="none";
    document.getElementsByClassName("hidden3")[0].style.display="flex";
    document.getElementById("ScrollToView").scrollIntoView({ behavior: 'smooth', block: 'end'});
}
