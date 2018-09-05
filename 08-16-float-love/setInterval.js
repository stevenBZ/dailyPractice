function mySetInterval(fn, ms, count) {
    function interval() {
        if(typeof count === 'undefined' || count-- > 0) {
            setTimeout(interval, ms);
            try {
                fn();
            } catch(e) {
                t = 0;
                throw e.toString();
            }
        }
    }
    setTimeout(interval, ms);
}

function test(){
    console.log('ok')
}

mySetInterval(test, 1000,3);
