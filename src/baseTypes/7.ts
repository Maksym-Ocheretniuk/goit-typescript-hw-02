/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(weekDay: WeekDay): boolean {
  console.log(WeekDay);
  if (weekDay === "Saturday" || "Sunday") {
    return true;
  }
  return false;
}

isWeekend(WeekDay.Monday);
