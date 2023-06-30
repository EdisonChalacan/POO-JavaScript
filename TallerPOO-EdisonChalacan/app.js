// Crear instancia del empleado
const employee = new Employee(
  "Edison",
  "Chalacan",
  "masculino",
  "1999-08-27",
  "photo.jpg",
  "2023-03-29",
  1600000
);

// Obtener elementos del DOM
const nameElement = document.getElementById("name");
const lastnameElement = document.getElementById("lastname");
const genderElement = document.getElementById("gender");
const birthdateElement = document.getElementById("birthdate");
const photoElement = document.getElementById("photo");
const hiredateElement = document.getElementById("hiredate");
const salaryElement = document.getElementById("salary");

// Mostrar información del empleado en el DOM
nameElement.textContent = employee.name;
lastnameElement.textContent = employee.lastname;
genderElement.textContent = employee.gender;
birthdateElement.textContent = employee.birthdate;
photoElement.src = employee.photo;
hiredateElement.textContent = employee.hiredate;
salaryElement.textContent = employee.salary;

// Actualizar el salario del empleado al hacer clic en el botón correspondiente
const updateSalaryBtn = document.getElementById("update-salary-btn");
updateSalaryBtn.addEventListener("click", () => {
  const newSalary = prompt("Ingrese el nuevo salario:");
  if (newSalary) {
    employee.salary = parseFloat(newSalary);
    salaryElement.textContent = employee.salary;
  }
});

// Calcular y mostrar la edad del empleado al hacer clic en el botón correspondiente
const calculateAgeBtn = document.getElementById("calculate-age-btn");
calculateAgeBtn.addEventListener("click", () => {
  const age = employee.calculateAge();
  alert(`Edad del Empleado: ${age} años`);
});

// Calcular y mostrar la antigüedad del empleado al hacer clic en el botón correspondiente
const calculateSeniorityBtn = document.getElementById("calculate-seniority-btn");
calculateSeniorityBtn.addEventListener("click", () => {
  const seniority = employee.calculateSeniority();
  alert(`Antigüedad del Empleado: ${seniority} años`);
});

// Calcular y mostrar las prestaciones del empleado al hacer clic en el botón correspondiente
const calculateBenefitsBtn = document.getElementById("calculate-benefits-btn");
calculateBenefitsBtn.addEventListener("click", () => {
  const benefits = employee.calculateBenefits();
  alert(`Prestaciones del Empleado: $${benefits}`);
});

// Mostrar formulario de información adicional al hacer clic en el botón correspondiente
const option1Btn = document.getElementById("save-info-btn");
option1Btn.addEventListener("click", (e) => {
  e.preventDefault();
  showAdditionalInfo();
});

// Realizar la funcionalidad independiente de la opción 2 al hacer clic en el botón correspondiente
const option2Btn = document.getElementById("option2-btn");
option2Btn.addEventListener("click", option2Function);
