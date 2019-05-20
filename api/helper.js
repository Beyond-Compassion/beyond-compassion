const L = require('partial.lenses');
const R = require('ramda');
const { Transform } = require ('./lenses.js');
var getEvents;
if (process.env.NODE_ENV === 'development') {
  getEvents = require('./test/eventbrite.js');
} else {
  getEvents = require('./axios.js');
}
const cur = R.curry;

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// will return an invalid range (start will be negative), if length is greater
// than distance between start and end
const randomSliceRange = (arrayStart, arrayEnd, length) => {
  const sliceStart = randomInt(arrayStart, arrayEnd - length);
  return [sliceStart, sliceStart + length];
}

const selectEvents = (sliceRange, data) => L.collectAs(
  Transform.selectEvent,
  Transform.sliceEvents(...sliceRange),
  data,
);

// TEST:
if (process.env.NODE_ENV == 'development') {
  const test = async () => {
    const dummy = await getEvents();
    const testSlice = randomSliceRange(0, 50, 5);
    selectEvents(testSlice, dummy); // ?
  }

  test();
}

module.exports = {
  randomSliceRange,
  selectEvents,
}