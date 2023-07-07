async function callme() {
    let res = await mainusers.create({
        name: 'mayowa',
        age: 12,
        address: 'ofada'
    })
    console.log(res)
}

// callme()

async function findall() {
    let res = await  mainusers.find();
    console.log(res)

}
findall()
