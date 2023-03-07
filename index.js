function calculateBMI() {
  // Don't edit the code
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const male = document.getElementById("m").checked;
  const female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let bmi = (Math.floor(weight/(Math.pow(height/100, 2))))


  let message = '';
  if(bmi<18.5)
    message = 'Underweight';

  else if(bmi<=24.9)
    message = 'Healthy Weight';

  else if(bmi<29.9)
    message = 'Overweight';

  else 
    message = 'Obesity';

  alert(`${message}, ${bmi}`)
  
  message = 'Not Healthy'
  if (age>=19 && age<=24 && bmi>=19 && bmi<=24) message = 'Healthy' 
  if (age>=25 && age<=34 && bmi>=20 && bmi<=25) message = 'Healthy' 
  if (age>=35 && age<=44 && bmi>=21 && bmi<=26) message = 'Healthy'
  if (age>=45 && age<=54 && bmi>=22 && bmi<=27) message = 'Healthy'
  if (age>=55 && age<=64 && bmi>=23 && bmi<=28) message = 'Healthy'
  if (age>=65 && bmi>=24 && bmi<=29) message = 'Healthy'

  alert(`${message}, ${bmi}`)

}
