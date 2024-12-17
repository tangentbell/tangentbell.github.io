const getUsers = async () => {
  try {
    const response = await fetch('https://tangentbackend.fly.dev/WeatherForecast', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

getUsers();
