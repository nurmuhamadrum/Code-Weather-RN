import axios from "axios";

export const getForeCast = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-6.732023&lon=108.552315&appid=88d6a0a13c818b801307e7c3a44de3da';

      const result = await axios.get(url);

      if (result?.status === 200) {
        resolve(result?.data);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log('error@getForeCast', error);
      resolve(false);
    }
  })
}

export const temperatureConverter = (valNum) => {
  valNum = parseFloat(valNum);
  return `${Math.floor(valNum - 273.15)}°C`;
}