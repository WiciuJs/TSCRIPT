function handleFormSubmit(event) {
    event.preventDefault();
    var form = document.getElementById('personForm');
    var firstNameInput = form.elements.namedItem('firstName');
    var lastNameInput = form.elements.namedItem('lastName');
    var ageInput = form.elements.namedItem('age');
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var age = parseInt(ageInput.value);
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
    displayFullName(person);
}
function displayFullName(person) {
    var fullName = "".concat(person.firstName, " ").concat(person.lastName);
    console.log('Pełne imię i nazwisko:', fullName);
}
var form = document.getElementById('personForm');
form.addEventListener('submit', handleFormSubmit);
