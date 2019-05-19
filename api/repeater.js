const { randomSliceRange, selectEvents } = require('./helper.js');
var getEvents;

if (process.env.NODE_ENV === 'production') {
  getEvents = require('./test/eventbrite.js');
} else {
  getEvents = require('./axios.js');
}

module.exports = async (req, res) => {
  var data = await getEvents();
  const sliceRange = randomSliceRange(0, 50, 5);
  data = selectEvents(sliceRange) (data);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(data));
}
