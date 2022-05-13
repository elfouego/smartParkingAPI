const database = require('../utils/database');

// Here, we are implementing the class with Singleton design pattern

class Place {
    constructor() {
        if (this.instance) return this.instance;
        Place.instance = this;
    }

    get() { return database.getList('place') }

    getById(id) { return database.get('place', id) }

    create(place) { return database.create('place', place) }

    delete(id) { return database.delete('place', id) }

    update(id, place) { return database.set('place', id, place) }
}

module.exports = new Place();
