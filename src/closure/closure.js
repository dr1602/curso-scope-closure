function greeting() {
    let username = 'Allison';

    function displayUserName() {
        return `Bonjour ${username}`;
    }

    return displayUserName;
}

const  g = greeting();
console.log(g);
console.log(g());