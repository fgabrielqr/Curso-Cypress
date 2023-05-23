it('Agora nada', () => { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000);
    })
}

const system = () => {
    console.log('Init');
    getSomething().then(some => {
        console.log(`Somethng is ${some}`);
    })
    console.log('End');
}

system();