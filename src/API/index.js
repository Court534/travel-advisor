import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidAPI-key': '0c5473f3b2msh7789711f0739a0dp175067jsnd9ac4565d860',
        'x-rapidAPI-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}