"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// fetchData('api/Goober')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
