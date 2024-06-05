const radio = document.querySelectorAll(".radioDiv");
const radioBtn = document.querySelectorAll(".radioBtn");
const btnSubmit = document.querySelector("#btnSubmit");
const mytext = document.querySelectorAll(".mytext");
const help = document.querySelectorAll("#help");
const generalenquiry = document.getElementById("generalenquiry");
const supportrequest = document.getElementById("supportrequest");
const queryHelp = document.getElementById("queryHelp");
const myCheckbox = document.getElementById("myCheckbox");
const checkHelp = document.getElementById("checkHelp");
const validHelp = document.getElementById("validHelp");
const alert = document.getElementById("alert");
const container = document.getElementById("container");

radioBtn.forEach((e, key) => {
    e.addEventListener("click", () => {
        radio.forEach((el) => {
            el.classList.remove("radio");
        });
        radio[key].classList.add("radio");
    });
});

mytext[2].addEventListener("input", () => {
    if (mytext[2].value.includes("@")) {
        validHelp.classList.add("d-none");
    } else {
        validHelp.classList.remove("d-none");
    }
})

function animAlert(){
    alert.classList.add("animate");
    alert.classList.remove("opacity-0");
    setTimeout(() => {
        alert.classList.remove("animate");
        alert.classList.add("opacity-0");
    }, 5000);
}

btnSubmit.addEventListener("click", () => {
    mytext.forEach((e, key) => {
        if (!e.value.trim()) {
            help[key].classList.remove("d-none");
        } else {
            help[key].classList.add("d-none");
            if (generalenquiry.checked == false && supportrequest.checked == false) {
                queryHelp.classList.remove("d-none");
            } else {
                queryHelp.classList.add("d-none");
                if (myCheckbox.checked == false) {
                    checkHelp.classList.remove("d-none");
                } else {
                    checkHelp.classList.add("d-none");
                    animAlert();
                }
            }
        }
    })
})
