let addUserFormEl = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male",
};

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

statusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
}

function submitFormData(formData) {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 30621246647f5a8b3d1c70422b450d7151a237e2801e711a43e5e0540ec2c017"
        },
        body: JSON.stringify(formData)
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[1].message === "has already been taken") {
                    emailErrMsgEl.textContent = "Email Already Exists";
                }
            }
        });
}

addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});