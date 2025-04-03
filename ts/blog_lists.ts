import {Blog} from "./interfaces";
// import {S3Client, GetObjectCommand} from "@aws-sdk/client-s3";
// const client = new S3Client({});

let blogs: Blog[];

fetchTracks().then((data: Blog[]) => {
  blogs = data;
}).then(generateBlogs).then(() => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen!.style.opacity = '0';
  setTimeout(() => {
    loadingScreen!.style.display = 'none';
  }, 500);});

async function generateBlogs() {
  let blog_panel = document.getElementById('blog-panel')!;
  let blogList = document.getElementById('blog-list')!;

  blogs.forEach(blog => {
    const blogListing = document.createElement('li');
    // blogListing.setAttribute('id', `blog${index}`);
    blogListing.addEventListener('click', () => {
      fetch(blog.s3_Key)
        .then(res => res.text())
        .then(html => {
          blog_panel.innerHTML = html;
        }).then(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen!.style.opacity = '0';
        setTimeout(() => {
          loadingScreen!.style.display = 'none';
        }, 500);});
      blogListing.style.background = "rgba(200,100,200,0.5)";
    });

    blogListing.classList.add('blog');
    const blogTitle = document.createElement('h2');
    const blogDate = document.createElement('h3');
    const blogDescription = document.createElement('p');
    blogTitle.innerText = blog.title;
    blogDate.innerText = "Published "+blog.published;
    blogDescription.innerText = blog.description;

    blogListing.appendChild(blogTitle);
    blogListing.appendChild(blogDate);
    blogListing.appendChild(blogDescription);
    blogList.appendChild(blogListing);
  });
}

async function fetchTracks() {
  // const response = await fetch(`http://localhost:5066/api/Blog`);
  const response = await fetch(`https://tangentbackend.fly.dev/api/Blog`);
  if (!response.ok) {
    throw new Error(`Error fetching data from Blogs`);
  }
  return response.json();
}
