const formEl = document.querySelector("form")

const formData = {
    email: "",
    message: "",
}

document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("feedback-form-state") != null){
    formData.email = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    formData.message = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    formEl.email.value = formData.email;
    formEl.message.value = formData.message;
    }
})

formEl.addEventListener("input", (event)=>{
    formData.email = formEl.email.value
    formData.message = formEl.message.value

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (formEl.email.value === "" || formEl.message.value === "") { alert("Fill please all fields")}
    else{
        console.log(formData);
        formEl.reset();
        formData.email = '';
        formData.message = '';
        localStorage.removeItem("feedback-form-state")
    }
})
