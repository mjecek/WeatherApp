import axios from 'axios';

export default {
  async search(data) {
    try {
      return await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${data}`,
      );
    } catch (error) {
      return error;
    }
  },

  async location(data) {
    try {
      return await axios.get(
        `https://www.metaweather.com/api/location/${data}`,
      );
    } catch (error) {
      return error;
    }
  },
};
