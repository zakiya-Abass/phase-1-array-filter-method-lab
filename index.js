// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, driverName) {
  return drivers.filter(
    (member) => member.toLowerCase() === driverName.toLowerCase()
  );
}

function fuzzyMatch(drivers, driverName) {
  let partialMatch = drivers.filter(
    (member) => member.substr(0, 2) === driverName
  );
  return partialMatch;
}

const filtered = drivers.filter(function (value) {
  return value == drivers;
});
console.log(filtered);

const drivers2 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers2, driverName) {
  return drivers2.filter((member) => member.name === driverName);
}

matchName(drivers2);
