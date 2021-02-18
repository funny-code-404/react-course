

const sortByName = (a, b) => {
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB){
        return -1;
    }
    if (nameA > nameB){
        return 1;
    }
    return 0;
};


const sortByAge = (a, b) => {
    const ageA = a.age.toLowerCase(), ageB = b.age.toLowerCase();
    if (ageA < ageB){
        return -1;
    }
    if (ageA > ageB){
        return 1;
    }
    return 0;
};



export { sortByName, sortByAge };