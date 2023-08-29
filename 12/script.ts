interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  function handleFormSubmit(event: Event) {
    event.preventDefault();
  
    const form = document.getElementById('personForm') as HTMLFormElement;
    const firstNameInput = form.elements.namedItem('firstName') as HTMLInputElement;
    const lastNameInput = form.elements.namedItem('lastName') as HTMLInputElement;
    const ageInput = form.elements.namedItem('age') as HTMLInputElement;
  
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = parseInt(ageInput.value);
  
    const person: Person = {
      firstName,
      lastName,
      age,
    };
  
    displayFullName(person);
  }
  function displayFullName(person: Person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    console.log('Pełne imię i nazwisko:', fullName);
  }
  
  const form = document.getElementById('personForm');
  form.addEventListener('submit', handleFormSubmit);
  