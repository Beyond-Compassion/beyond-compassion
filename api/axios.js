const axios = require('axios')

// NOTE: use something like this for quick api testing:
// https://www.eventbriteapi.com/v3/categories/?token=5BYEDDTQIW2JM3NQEMJT

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
        categories: 111,
        'location.address': 'new york, new york',
        expand: 'venue'
      },
    }
  )

  return data;
}

module.exports = getEvents;