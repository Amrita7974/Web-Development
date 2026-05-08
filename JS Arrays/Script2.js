let fd = [
  ["Amrita", "2-10-2006", "9343203402", "Bhopal", "student"],
  ["Ayush", "2-10-2006", "9343203402", "Bhopal", "student"],
  ["Amrita", "2-10-2006", "9343203402", "Bhopal", "student"],
  ["Ayush", "2-10-2006", "9343203402", "Bhopal", "student"],
  ["Amrita", "2-10-2006", "9343203402", "Bhopal", "student"],
];
fd.forEach((element) => {
  console.log(element);
});



let fData = [
  {
    name: "Ayush",
    dob: "2007-05-12",
    phone: "9876543210",
    city: "Bhopal",
  },
  {
    name: "Rohit",
    dob: "2001-08-21",
    phone: "9123456780",
    city: "Indore",
  },
  {
    name: "Priya",
    dob: "2002-11-10",
    phone: "9988776655",
    city: "Delhi",
  },
  {
    name: "Neha",
    dob: "2004-03-05",
    phone: "9090909090",
    city: "Mumbai",
  },
  {
    name: "Karan",
    dob: "2000-12-25",
    phone: "9871234567",
    city: "Pune",
  },
];

fData.forEach((item) => {
  console.log(item["city"]);
});

//Bracket
console.log(fData);
console.log(fData[1]["name"]);

console.log(fData);
console.log(fData[2].phone);

let Ayush = {
  name: "Ayush",
  dob: "2007-05-12",
  phone: "9876543210",
  city: "Bhopal",
};

console.log(Object.keys(Ayush));
console.log(Object.values(Ayush));
console.log(Object.values(Ayush.city));

console.log(Object.entries(Ayush));

let a = [23, 45, 6, 7, 8, 9];
a.sort((a, b) => a - b);
console.log(a);

console.log(a.find((val) => val > 20));
console.log(a.find((val) => val == 34));
console.log(a.findIndex((val) => val == 6));


let ar = [23,34,45,67,45,67,5];
console.log(ar.filter((val) => val>22));
console.log(ar.find((val) => val>20));

console.log(ar.slice(0,4));

let a1 = "This is Web, Development Class"
console.log(a1.split(" "));
console.log(a1.split("-"));

let str = "this is a string";

console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let x = 3.14;
console.log(typeof x);
let z = x.toString();
console.log(z);


let c = 3.14;
console.log(c.toFixed(5));




