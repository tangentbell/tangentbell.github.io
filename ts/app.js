"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const BACKEND_URL = process.env.BACKEND_URL || '';
function fetchData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch(`${BACKEND_URL}/${endpoint}`);
        const response = yield fetch(`https://tangentbackend.fly.dev/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
        }
        return response.json();
    });
}
// Usage
fetchData('api/Goober')
    .then(data => console.log(data))
    .catch(error => console.error(error));
