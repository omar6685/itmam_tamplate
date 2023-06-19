const prevBtns = document.querySelectorAll(".n-p");
const nextBtns = document.querySelectorAll(".n-x");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const body = document.body;

let formStepsNum = 0;
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
        updatePageHeight();
        ddd(); // Call the ddd function
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
        updatePageHeight();
        ddd(); // Call the ddd function
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

function updatePageHeight() {
    if (formStepsNum === 0) {
        body.classList.remove("bg-im-2");
        body.classList.add("bg-im");
    } else {
        body.classList.remove("bg-im");
        body.classList.add("bg-im-2");
    }
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
const ddd = () => {
    if (body.classList.contains("bg-im")) {
        console.log("aaaa")
    }

}

