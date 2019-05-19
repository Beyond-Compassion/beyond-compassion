const axios = require('axios')
const L = require('partial.lenses');
const R = require('ramda');
const moment = require('moment');
const dummy = require('./test/eventbrite-data.json');

const axiosInstance = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3',
  headers: { 'Authorization': 'Bearer 5BYEDDTQIW2JM3NQEMJT' },
  withCredentials: true,
})

const getEvents = async () => {
  const { data } = await axiosInstance.get(
    '/events/search/',
    {
      params: {
        categories: 103,
        expand: 'venue'
      },
    }
  )

  return data;
}

const formatDateString = (date) => moment(date).format('LLL')

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// will return an invalid range (start will be negative), if length is greater
// than distance between start and end
const randomSlice = (arrayStart, arrayEnd, length) => {
  const subrangeStart = randomInt(arrayStart, arrayEnd - length);
  return [subrangeStart, subrangeStart + length];
}

const lenseSelect = R.pipe(
  R.mapObjIndexed(R.unary(L.get)),
  R.applySpec,
)

const Model = {
  events: ['events'],
}

// MIKE: i will need to pass the client's local timezone in to format it
// properly on this server
const Event = {
  name: ['name', 'text'],
  start: ['start', 'local', formatDateString],
  end: ['end', 'local', formatDateString],
  url: ['url'],
  logoUrl: ['logo', 'url'],
  venue: ['venue'],
}

const Venue = {
  address: ['address', 'localized_multi_line_address_display'],
  name: ['name'],
}

const Transform = {
  sliceEvents: (start, end) => L.subseq(start, end, [Model.events, L.elems]),
  selectEvent: lenseSelect({
    name: Event.name,
    url: Event.url,
    start: Event.start,
    end: Event.end,
    venueName: [Event.venue, Venue.name],
    address: [Event.venue, Venue.address],  
  })
} 

const selectEvents = range => L.collectAs(
  Transform.selectEvent,
  Transform.sliceEvents(...range)
);

// DEBUG:
// const testSubrange = randomSubrange(0, 50, 5);
// selectEvents(testSubrange) (dummy); // ?

module.exports = async (req, res) => {
  var data = await getEvents();
  const slice = randomSlice(0, 50, 5);
  data = selectEvents(slice) (data);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.end(JSON.stringify(data));
}
