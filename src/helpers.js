const getAge = (year) =>{
    const d = new Date()
    console.log(d)
    return d.getFullYear()-year;
}
export {getAge}