const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const dayName = (number) => {
  return days[number];
};

export const dayNumber = (name) => {
  return days.indexOf(name);
};

let day = new Date().getDay();

console.log(dayName(day));
