let a = {
  Fname: "touqeer",
  age: 22,
  day: 365,
  all: ["ahmad", "ali", "akbar"],
  totalDay: function total() {
    return this.age * this.day;
  },
};

document.getElementById('demo').innerHTML=a.all[1];
// document.getElementById('demo1').innerHTML=a.totalDay();
document.write(a.totalDay())