var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const art = [
    {
        year: "2024",
        images: ["kaitohalloween.png", "pagelogo.png", "source.png"]
    },
    {
        year: "2023",
        images: ["boss.png", "kaito.png", "stseqlink.png", "mbison.png", "mobilepowerarmor.png"]
    },
    {
        year: "2022",
        images: ["majora.png", "gril.png", "yaoi.png", "hoodie.png", "beats.png", "antipathpromo2.png", "antipathpromo.png"]
    },
    {
        year: "2021",
        images: ["tangentbell.jpg", "skirt.png", "smtfg1.jpg", "newface.jpg"]
    },
    {
        year: "2020",
        images: ["thechazz.jpg", "finn.jpg", "yugimean.jpg", "yamcgha.jpg", "tbot.png", "lilguy.png", "getup.png"]
    },
    {
        year: "2019",
        images: ["xbox.jpg", "run.png", "prospero.png", "chad.png", "fallpakik.png", "eyes.png", "forearm.png", "sigh.png",
            "jell.jpg", "thefloaters.png", "huh3.png"]
    },
    {
        year: "2018",
        images: ["freemo.png", "darn.png", "freem.png", "betasuit.png", "theboys.png"]
    },
];
let pics;
fetchArt().then((data) => {
    pics = data;
    pics.sort((a, b) => b.year - a.year);
}).then(generateGallery).then(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});
function generateGallery() {
    const galleryDiv = document.getElementById('art-panels');
    if (galleryDiv) {
        let currentYear = 0;
        pics.forEach((pic) => {
            let newYear = pic.year;
            let yearSection;
            let imageContainer;
            if (newYear !== currentYear) {
                // Create a section for the year
                yearSection = document.createElement('div');
                yearSection.id = `section-${pic.year.toString()}`;
                yearSection.classList.add('art-year');
                const yearTitle = document.createElement('h2');
                yearTitle.textContent = pic.year.toString();
                yearSection.appendChild(yearTitle);
                imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.id = `container-${pic.year.toString()}`;
            }
            else {
                yearSection = document.getElementById(`section-${pic.year.toString()}`);
                imageContainer = document.getElementById(`container-${pic.year.toString()}`);
            }
            const imgElement = document.createElement('img');
            imgElement.src = pic.s3_Key;
            imgElement.alt = '';
            imgElement.classList.add('gallery-image');
            imgElement.addEventListener('click', () => showImageModal(pic.s3_Key));
            imageContainer.appendChild(imgElement);
            yearSection.appendChild(imageContainer);
            if (newYear !== currentYear) {
                galleryDiv.appendChild(yearSection);
                currentYear = newYear;
            }
        });
    }
    const images = document.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
        return new Promise(resolve => {
            if (img.complete) {
                resolve("Image already loaded"); // If image is already loaded
            }
            else {
                img.onload = resolve; // Resolve once the image is loaded
                img.onerror = resolve; // Resolve even if there’s an error (optional)
            }
        });
    });
    return Promise.all(imagePromises); // Wait for all images to load
}
function showImageModal(imageSrc) {
    // Create modal background
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
    // Create modal content (image)
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('modal-image');
    modalContent.appendChild(img);
    modalOverlay.appendChild(modalContent);
    // Append modal to the body
    document.body.appendChild(modalOverlay);
    // Close modal when clicking anywhere outside the image
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
}
function fetchArt() {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch(`http://localhost:5066/api/Art`);
        const response = yield fetch(`https://tangentbackend.fly.dev/api/Art`);
        if (!response.ok) {
            throw new Error(`Error fetching data from Music`);
        }
        return response.json();
    });
}
export {};
