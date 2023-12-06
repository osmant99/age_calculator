let currentDate;
let currentMon;
const handleClick = () => {
  let userDOB = document.getElementById("userDOB").value;
  let nowDate = new Date();
  let date = nowDate.getDate();
  let month = nowDate.getMonth();
  let year = nowDate.getFullYear();

  let arr = userDOB.split("-");

  let userYear = arr[0];

  let userMonth = arr[1];
  let userDay = arr[2];
  if (date < 10) {
    currentDate = "0" + date;
  } else {
    currentDate = date;
  }
  if (month < 10) {
    currentMon = "0" + month;
  } else {
    currentMon = month;
  }
  let calcDays = Number(currentDate) - Number(userDay);
  let calcMon = Number(currentMon) + 1 - Number(userMonth);
  let calcYear = Number(year) - Number(userYear);
  let finalAge = `${calcYear} years ${calcMon} months ${calcDays} days`;
  console.log(finalAge);
  let userAge = document.getElementById("user_age");
  userAge.value = finalAge;
};
