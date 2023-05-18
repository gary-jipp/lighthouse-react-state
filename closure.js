
const App = function() {
  let counter = 0;

  const increment = function() {
    counter++;
    console.log(counter);
  };

  return increment;
};

let increment = App();
increment();
increment();
increment();

increment = App();
increment();
increment();
increment();