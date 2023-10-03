
const myFunction = function() {
  let count = 0;

  const increment = function() {
    count++;
    console.log("count =", count);
  };

  return increment;
};


let inc = myFunction();
console.log("inc");

inc();
inc();
inc();
