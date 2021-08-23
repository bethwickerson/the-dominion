import axios from 'axios';
const KEY = 'AIzaSyAKgE715t20jS7WQPXCbaTHiNJ4TZBQVEU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 99,
    key: KEY
  }
})