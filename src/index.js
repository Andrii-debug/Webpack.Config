import './styles/styles.css'

class user {
    constructor(name, id, location, city) {
        this.name = name;
        this.id = id;
        this.location = location;
        this.city = city;
    }


}


const user2 = new user('Andrii', 24, 'Ukraine', 'Kiev')

console.log(user2);