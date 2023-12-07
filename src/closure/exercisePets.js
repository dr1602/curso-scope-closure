function createPetList () {

    let petList = [];
    // console.log(petList)

    function addPet(pet) {

        if (typeof(pet) != "undefined") {
            // console.log(pet)
            petList.push(pet)
            console.log(petList)
        }
        
        return petList;
    }

    return addPet;
    
}

const myPetList = createPetList();

myPetList("michi");
myPetList("firulais");
myPetList();

// Instrucciones

// Input:

// const myPetList = createPetList();

// myPetList("michi");

// myPetList("firulais");

// myPetList();

// Output:

// ["michi", "firulais"]
    