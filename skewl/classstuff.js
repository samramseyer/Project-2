const temperatures = [88, 97, 92, 100, 85];

function checkTemperatures(arr) {
  return new Promise((resolve) => {
    arr.forEach(temp => {
      if (temp >= 95) {
        console.log('Hot day');
      } else {
        console.log('Good weather');
      }
    });
    resolve();
  });
}

checkTemperatures(temperatures);

console.log
