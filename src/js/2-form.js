const formEl = document.querySelector("form")

const formData = {
    email: "",
    message: "",
}

formEl.addEventListener("input", (event)=>{
    formData.email = formEl.email.value
    formData.message = formEl.message.value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("feedback-form-state") != null){
    formEl.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    formEl.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message
    }
})

formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (formEl.email.value === "" || formEl.message.value === "") { alert("Fill please all fields")}
    else{
        console.log(localStorage.getItem("feedback-form-state"))
        formEl.reset()
    }
})
