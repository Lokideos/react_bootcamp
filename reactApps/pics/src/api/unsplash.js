import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID EuSR-b1VRcZtrUvxh9F3aAJfM6UWlDxO2OmB6i72Vqw'
  }
})
