import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'

export default function setupAxios () {
  const eventbriteAPIInstance = axios.create({
    baseURL: 'https://www.eventbriteapi.com/v3',
    // params: {
    //   categories: '103'
    // },
    headers: { 'Authorization': 'Bearer 5BYEDDTQIW2JM3NQEMJT' },
    transformResponse: (data) => data,
    withCredentials: true // MIKE: try making this true in case CORS complains
    // timeout: 1000,
  })

  Vue.prototype.$eventbriteAPI = eventbriteAPIInstance
}

// Vue.use(VueAxios, axios)

// NOTES:

// MIKE: this is the query string u need for 50 random charity events:
// /v3/events/search/?categories=103;token=5BYEDDTQIW2JM3NQEMJT

// MIKE: use this category to get the random data:
// {
//   "resource_uri": "https://www.eventbriteapi.com/v3/categories/111/",
//   "id": "111",
//   "name": "Charity & Causes",
//   "name_localized": "Charity & Causes",
//   "short_name": "Charity & Causes",
//   "short_name_localized": "Charity & Causes"
// },

// When using then, you will receive the response as follows:

// axios.get('/user/12345')
//   .then(function (response) {
//     console.log(response.data)
//     console.log(response.status)
//     console.log(response.statusText)
//     console.log(response.headers)
//     console.log(response.config)
//   })

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
