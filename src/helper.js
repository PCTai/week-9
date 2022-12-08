

const getLocation = async (marker) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${marker.lat}&lon=${marker.lng}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
    .then(res => res.json())
    .then(res => {
      return res.city.name;
    });
  return data;
}
const getWeatherFormLocation = async (location) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`)
    .then(res => res.json())
    .then(res => {
      return res;
    })
  return data;
}

export { getLocation, getWeatherFormLocation }