
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(err = new Error);
  }, 2000);
  
});

p.then(result => console.log("Result: ", result))
.catch(err => console.log(err.message));