let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Success!');
    }, 2000);
});
