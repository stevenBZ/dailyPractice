const timeout = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, ms);
});

const ajax1 = () => timeout(2000).then(() => {
	console.log('1');
	return 1;
});

const ajax2 = () => timeout(1000).then(() => {
	console.log('2');
	return 2;
});

const ajax3 = () => timeout(2000).then(() => {
	console.log('3');
	return 4;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    let data = [];

	let res = Promise.resolve();

        ajaxArray.forEach(i =>{

            res = res.then(i).then(val => {

                 data.push(val);

                 return data;

            })

        })

	return res;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
	console.log('done');
	console.log(data); // data 为 [1, 2, 3]
});