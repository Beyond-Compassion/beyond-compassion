const L = require('partial.lenses');
const R = require('ramda');
const moment = require('moment');

const formatDateString = (date) => moment(date).format('LLL')

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
  thumbnail: ['logo', 'url'],
  venue: ['venue'],
  categoryId: ['category_id']
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
    thumbnail: Event.thumbnail,
    venueName: [Event.venue, Venue.name],
    address: [Event.venue, Venue.address],
  })
} 

module.exports = {
  Model,
  Event,
  Venue,
  Transform,
}