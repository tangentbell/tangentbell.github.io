// const getUsers = async () => {
//   try {
//     const response = await fetch('https://tangentbackend.fly.dev/WeatherForecast', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };
//
// getUsers();

// const BACKEND_URL = process.env.BACKEND_URL || '';

async function fetchData(endpoint: string) {
  // const response = await fetch(`${BACKEND_URL}/${endpoint}`);
  const response = await fetch(`https://tangentbackend.fly.dev/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
  }
  return response.json();
}

// Usage
fetchData('api/Goober')
  .then(data => console.log(data))
  .catch(error => console.error(error));
