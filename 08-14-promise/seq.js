let a = new Promise((resolve, reject) => {
    console.log('four');
    resolve();
})
a.then(res => {
    console.log('five');
})
setTimeout(function () {
    console.log('three');
  }, 0);
  
  Promise.resolve().then(function () {
    console.log('two');
  });
  
  console.log('one');