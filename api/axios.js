const axios = require('axios')

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

module.exports = getEvents;