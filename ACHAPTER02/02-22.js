let p = new Promise((resolve, reject) => {
    resolve('first');
});

p.then((msg) => {
    console.log(msg);
    // throw new Error('##에러!!');
    return 'second';
})

    // 그 전에 return 된 값을 이어서 받음
    .then((msg) => {
        console.log(msg); //second
        throw new Error('##에러!!');

        return 'third';
    })
    .then((msg) => {
        console.log(msg); //third
    })
    .catch((error) => {
        console.log('오류 발생 ==> ' + error);
    });
