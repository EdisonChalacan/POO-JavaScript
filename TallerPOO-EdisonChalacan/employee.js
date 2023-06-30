// Clase Empleado
class Employee {
  constructor(name, lastname, gender, birthdate, photo, hiredate, salary) {
    this.name = name;
    this.lastname = lastname;
    this.gender = gender;
    this.birthdate = birthdate;
    this.photo = photo;
    this.hiredate = hiredate;
    this.salary = salary;
    this.additionalInfo = {};
  }

  calculateAge() {
    const birthdate = new Date(this.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    return age;
  }

  calculateSeniority() {
    const hiredate = new Date(this.hiredate);
    const today = new Date();
    const seniority = today.getFullYear() - hiredate.getFullYear();
    return seniority;
  }

  calculateBenefits() {
    const seniority = this.calculateSeniority();
    const benefits = seniority * this.salary * 0.15;
    return benefits;
  }
}

// Función para mostrar información adicional del empleado
function showAdditionalInfo() {
  const educationLevel = document.getElementById("education-level").value;
  const school = document.getElementById("school").value;
  const degree = document.getElementById("degree").value;

  employee.additionalInfo = {
    educationLevel,
    school,
    degree
  };

  // Mostrar información adicional en un alert
  alert(`Información Adicional:
  Nivel de Formación Académica: ${educationLevel}
  Escuela: ${school}
  Título: ${degree}`);
}

// Función para realizar la funcionalidad independiente de la opción 2
function option2Function() {
  alert("Funcionalidad Independiente de la Opción 2");
}
