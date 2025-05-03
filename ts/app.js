"use strict";
// async function fetchData(endpoint: string) {
//   // const response = await fetch(`${BACKEND_URL}/${endpoint}`);
//   const response = await fetch(`https://tangentbackend.fly.dev/${endpoint}`);
//   if (!response.ok) {
//     throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
//   }
//   return response.json();
// }
// fetchData('api/Goober')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// const projectPanel = document.getElementById("project-panel")!;
// const mangaEntries = Array.from(document.getElementsByClassName("manga-img")!);
// const miscPanels = document.getElementById("misc-panels")!;
//
// mangaEntries.forEach(entry => {
//   entry.addEventListener("mouseenter", () => {
//     projectPanel.style.transform = "skewY(-1deg)";
//     miscPanels.style.transform = "skewY(1deg)";
//   });
//
//   entry.addEventListener("mouseleave", () => {
//     projectPanel.style.transform = "";
//     miscPanels.style.transform = "";
//   });
// });
