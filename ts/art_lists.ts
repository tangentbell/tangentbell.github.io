interface ImageSet {
  year: string;
  images: string[];
}

const art: ImageSet[] = [
  {
    year: "2024",
    images: ["pagelogo.png", "source.png"]
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

function generateGallery() {
  const galleryDiv = document.getElementById('art-panels');

  if (galleryDiv) {
    art.forEach((yearData) => {
      // Create a section for the year
      const yearSection = document.createElement('div');
      yearSection.classList.add('art-year');

      const yearTitle = document.createElement('h2');
      yearTitle.textContent = yearData.year;
      yearSection.appendChild(yearTitle);

      // Create image container
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');

      // Add images
      yearData.images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = `/img/art/${yearData.year}/${image}`;
        imgElement.alt = `${yearData.year} - ${image}`;
        imgElement.classList.add('gallery-image');

        imgElement.addEventListener('click', () => showImageModal(`/img/art/${yearData.year}/${image}`));

        imageContainer.appendChild(imgElement);
      });

      yearSection.appendChild(imageContainer);
      galleryDiv.appendChild(yearSection);
    });
  }
}

function showImageModal(imageSrc: string) {
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

window.onload = generateGallery;