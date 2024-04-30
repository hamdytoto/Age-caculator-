function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const now = new Date();
  const diff = now - dob;
  const ageDate = new Date(diff);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  document.getElementById("age").innerText =`${calculatedAge}  years old`;
}
