console.log('Starting app');

setTimeout(() => { //non blocking
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Zero ms callback');
}, 0);

console.log('Finishing App');