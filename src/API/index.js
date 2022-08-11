import axios from "axios";

export const getPlaceData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidAPI-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        'x-rapidAPI-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
  }
}

export const getWeatherData = async () => {
  try {
    const { data: { data } } = await axios.get('https://open-weather13.p.rapidapi.com/city/landon');
  } catch (error) {
    console.log(error)  
  }
}