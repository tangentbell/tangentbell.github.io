var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import {S3Client, GetObjectCommand} from "@aws-sdk/client-s3";
// const client = new S3Client({});
let blogs;
fetchTracks().then((data) => {
    blogs = data;
}).then(generateBlogs).then(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});
function generateBlogs() {
    return __awaiter(this, void 0, void 0, function* () {
        let blog_panel = document.getElementById('blog-panel');
        let blogList = document.getElementById('blog-list');
        blogs.forEach(blog => {
            const blogListing = document.createElement('li');
            // blogListing.setAttribute('id', `blog${index}`);
            blogListing.addEventListener('click', () => {
                fetch(blog.s3_Key)
                    .then(res => res.text())
                    .then(html => {
                    blog_panel.innerHTML = `<h2>${blog.title}</h2>` + html;
                }).then(() => {
                    const loadingScreen = document.getElementById('loading-screen');
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                });
                blogListing.style.background = "rgba(200,100,200,0.5)";
            });
            blogListing.classList.add('blog');
            const blogTitle = document.createElement('h2');
            const blogDate = document.createElement('h3');
            const blogDescription = document.createElement('p');
            blogTitle.innerText = blog.title;
            blogDate.innerText = "Published " + blog.published;
            blogDescription.innerText = blog.description;
            blogListing.appendChild(blogTitle);
            blogListing.appendChild(blogDate);
            blogListing.appendChild(blogDescription);
            blogList.appendChild(blogListing);
        });
    });
}
function fetchTracks() {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch(`http://localhost:5066/api/Blog`);
        const response = yield fetch(`https://tangentbackend.fly.dev/api/Blog`);
        if (!response.ok) {
            throw new Error(`Error fetching data from Blogs`);
        }
        return response.json();
    });
}
export {};
