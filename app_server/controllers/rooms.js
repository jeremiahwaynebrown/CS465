var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

/* GET room view */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways" });
};

module.exports = {
    rooms
}