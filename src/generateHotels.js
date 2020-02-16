var faker = require('faker');

const priceCategories = ['high', 'medium', 'low'];
const amenities = ['free_parking', 'free_wifi', 'pets', 'restaurant', 'gym', 'pool', 'spa'];
const roomTypes = ['Deluxe suite', 'Standard', 'Superior Room', 'Premium Family Room', 'Deluxe double suite'];
const randomData = {
    hotels: [],
    rooms: [],
    bookings: []
};
function generateHotels() {
    for (let i = 0; i < 6; i++) {
        const data = {
            "id": faker.random.uuid(),
            "name": faker.lorem.words(),
            "description": faker.lorem.paragraph(),
            "distance_to_venue": faker.random.number({ min: 0, max: 5000, precision: 1 }),
            "rating": faker.random.number({ min: 0, max: 5, precision: 0.1 }).toFixed(2),
            "price_category": faker.random.arrayElement(priceCategories),
            "amenities": getAmenities(),
            "images": [
                "http://via.placeholder.com/140x100",
                "http://via.placeholder.com/100x140",
                "http://via.placeholder.com/140x140"
            ]
        }
        randomData.hotels.push(data);
        generateRooms(data.id);
    }

    return randomData;
}

function generateRooms(id) {
    const randomNumber = faker.random.number({ min: 2, max: 6, precision: 1 });
    const rooms = [];
    for (let i = 0; i < randomNumber; i++) {
        const data = {
            "id": faker.random.uuid(),
            "name": faker.random.arrayElement(roomTypes),
            "description": faker.lorem.paragraphs(),
            "max_occupancy": faker.random.number({ min: 1, max: 4, precision: 1 }),
            "price_in_usd": faker.random.number({ min: 50, max: 150, precision: 0001 })
        }
        rooms.push(data);
    }
    
    randomData.rooms.push({ id, rooms });
}

function getAmenities() {
    const data = [];
    const randomNumber = faker.random.number({ min: 1, max: amenities.length, precision: 1 });
    let i = 1;
    while(i <= randomNumber) {
        const ame = faker.random.arrayElement(amenities);
        if(!data.find(data => data === ame)) {
            data.push(ame);
            i++
        }
    }
    return data
}

module.exports = generateHotels;