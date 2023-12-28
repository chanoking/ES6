const computers = [
  { brand: "Apple", ram: 16 },
  { brand: "Samsung", ran: 20 },
  { brand: "LG", ram: 5 },
];

const computer = computers.some((computer) => computer.ram < 5);
console.log(computer);
