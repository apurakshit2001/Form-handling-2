const showDetails = () => {
    // Retrieve form values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let phone = document.getElementById("phone").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    let interests = document.querySelectorAll('input[name="interests"]:checked');
    let message = document.getElementById("message").value;

    // Validate form fields
    function validateForm() {
        if (!checkFirstName(firstName)) return false;
        if (!checkLastName(lastName)) return false;
        if (!checkEmail(email)) return false;
        if (!checkPhone(phone)) return false;
        if (!checkDOB(dob)) return false;
        if (!message.trim()) {
            alert("Please enter a message in the message box.");
            return false;
        }
        return true;
    }

    // Check if first name is valid
    function checkFirstName(firstName) {
        if (!firstName) {
            alert("Please enter your first name");
            return false;
        } else if (firstName.length < 2) {
            alert("Please enter a valid name");
            return false;
        } else if (parseInt(firstName)) {
            alert("Names can't contain numbers");
            return false;
        } else {
            document.getElementById("fnametxt").innerHTML = "<strong>First name: </strong>" + firstName;
            return true;
        }
    }

    // Check if last name is valid
    function checkLastName(lastName) {
        if (!lastName) {
            alert("Please enter your last name");
            return false;
        } else if (lastName.length < 2) {
            alert("Please enter a valid last name");
            return false;
        } else if (parseInt(lastName)) {
            alert("Surnames can't contain numbers");
            return false;
        } else {
            document.getElementById("lnametxt").innerHTML = "<strong>Last name: </strong>" + lastName;
            return true;
        }
    }

    // Check if email is valid
    function checkEmail(email) {
        let flagAt = false;
        let atIndex = 0;
        let flagDot = false;
        let dotPos = -1;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                flagAt = true;
                atIndex = i;
            }
            if (email[i] === '.') {
                flagDot = true;
                dotPos = i;
            }
        }

        const domainLength = email.length - dotPos;
        const dotAtDistance = dotPos - atIndex;

        if (flagAt && flagDot && domainLength > 2 && dotAtDistance > 4 && atIndex > 3) {
            document.getElementById("emailtxt").innerHTML = "<strong>Email: </strong>" + email;
            return true;
        } else {
            alert("Please enter a valid email address");
            return false;
        }
    }

    // Check if phone number is valid
    function checkPhone(phone) {
        phone = phone.trim();

        if (phone.includes("@") || phone.includes("#") || phone.includes("$") || phone.includes("%") || phone.includes("*")) {
            alert("Please enter a valid phone number");
            return false;
        } else if (phone.length === 10) {
            document.getElementById("phonetxt").innerHTML = "<strong>Phone number: </strong>" + phone;
            return true;
        } else {
            alert("Phone number should be exactly 10 digits long");
            return false;
        }
    }

    // Check if date of birth is valid
    function checkDOB(dob) {
        let today = new Date(); // Current date
        let birthDate = new Date(dob); // Birthdate from the parameter

        // Check if the birthDate is valid
        if (isNaN(birthDate)) {
            alert("Please enter a valid date of birth");
            return false;
        }

        let age = today.getFullYear() - birthDate.getFullYear(); // Initial age calculation
        let month = today.getMonth() - birthDate.getMonth(); // Difference in months

        // Adjust age if the birth month is later in the year or if it's the birth month but the day hasn't occurred yet
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--; // Decrease age by one if the birthday hasn't occurred yet this year
        }

        document.getElementById("agetxt").innerHTML = "<strong>Your age is: </strong>" + age;
        return true;
    }

    // If form is valid, display the details
    if (validateForm()) {
        let genderText = gender ? gender.value : "Not specified";

        let interestsList = [];
        interests.forEach(function (interest) {
            interestsList.push(interest.value);
        });

        document.getElementById("gendertxt").innerHTML = "<strong>Gender: </strong>" + genderText;
        document.getElementById("intereststxt").innerHTML = "<strong>Interests: </strong>" + interestsList.join(", ");
        document.getElementById("countrytxt").innerHTML = "<strong>Country: </strong>" + country;
        document.getElementById("messagetxt").innerHTML = "<strong>Message: </strong>" + message;
    }
};



