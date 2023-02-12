const blogs = [
  {
    title: 'CSS Positons',
    img: './assets/img-3.png',
    link: 'html-css.html',
    subhead: 'Tech',
    sentence: 'Element can sometimes act in very unamusing ways and can seem',
    isFeature: false,
  },

  {
    title: 'Learning Plan',
    img: './assets/img-6.webp',
    link: 'learning-plan.html',
    subhead: 'Core',
    sentence: 'This plan is a core part of your learning and will develop',
    isFeature: false,
  },

  {
    title: 'Explore Values and Identity',
    img: './assets/img-5.png',
    link: 'html-css.html',
    subhead: 'Tech',
    sentence: 'Element can sometimes act in very unamusing ways and can seem',
    isFeature: false,
  },

  {
    title: 'Emotional Intelligence EQ vs IQ',
    img: './assets/emotional.jpeg',
    link: 'emotional-intelligence.html',
    subhead: 'Core',
    sentence:
      "Exploring EQ and it's importance in the work place and in life plus it's differences from IQ",
    isFeature: false,
  },

  {
    title: 'JavaScript and the DOM',
    img: './assets/js-funda.jpeg',
    link: 'javascript-dom.html',
    subhead: 'Tech',
    sentence:
      'This blog should strengthen your understanding of JavaScript and its relationship to HTML',
    isFeature: true,
  },

  {
    title: 'Understanding Neuroplasticity and the Growth Mindset',
    img: './assets/growth-mindset.jpeg',
    link: 'neuroplasticity.html',
    subhead: 'Core',
    sentence:
      'Until recently, the conventional thinking was that our brains were hard-wired at birth and therefore unchange',
    isFeature: false,
  },

  {
    title: 'Problem Solving',
    img: './assets/probelmsolving-blogcard.jpeg',
    link: 'problem-solving.html',
    subhead: 'Tech',
    sentence:
      'This blog should strengthen my understanding of my approach to problem-solving and what technique work for myself',
    isFeature: true,
  },

  {
    title: 'Core Reflection',
    img: './assets/refelction.png',
    link: 'foundations-reflection.html',
    subhead: 'Core',
    sentence:
      "Let's reflect on all you have learnt as part of the core skills component of Foundations",
    isFeature: true,
  },
]

const mainSection = document.getElementById('blog-posts')

const blogSection = document.getElementById('blog-cards')

const articleBlogSection = document.getElementById('article-blog')

const mainBlogs = blogs.filter((prop) => prop.isFeature == true)
if (mainSection) {
  mainSection.innerHTML += `
<div class="container grid border">
<div class="blogcard-text-wrapper">
  <div>
    <h4>${mainBlogs[0].subhead}</h4>
    <h3>${mainBlogs[0].title}</h3>
  </div>
  <div>
    <a href=${mainBlogs[0].link}>
    <p>${mainBlogs[0].sentence}...</p>
    <h5>Read more</h5>
  </a>
  </div>
</div>
  <img src=${mainBlogs[0].img} >
</div>
<div class="container grid-reverse border">
<img src=${mainBlogs[1].img} >
<div class="blogcard-text-wrapper">
  <div>
    <h4>${mainBlogs[1].subhead}</h4>
    <h3>${mainBlogs[1].title}</h3>
  </div>
  <div>
    <a href=${mainBlogs[1].link}>
    <p>${mainBlogs[1].sentence}...</p>
    <h5>Read more</h5>
  </a>
  </div>
</div>
</div>
<div class="container grid">
<div class="blogcard-text-wrapper">
  <div>
    <h4>${mainBlogs[2].subhead}</h4>
    <h3>${mainBlogs[2].title}</h3>
  </div>
  <div>
    <a href=${mainBlogs[2].link}>
    <p>${mainBlogs[2].sentence}...</p>
    <h5>Read more</h5>
  </a>
  </div>
</div>
<img src=${mainBlogs[2].img} >
</div>
`

  for (let i = 0; i < blogs.length; i++) {
    if (!blogs[i].isFeature) {
      blogSection.innerHTML += `
        <div class="blog-tile">
          <a href=${blogs[i].link} ><img src=${blogs[i].img} alt=""></a>
          <a href=${blogs[i].link} ><h6>${blogs[i].title}</h6></a>
          <a href=${blogs[i].link} class="snap-to-bottom"><h5>Read more</h5></a>
        </div>
        `
    }
  }
}

if (articleBlogSection) {
  const numOne = Math.floor(Math.random() * (blogs.length - 2))

  articleBlogSection.innerHTML += `
    <div class="blog-tile" >
      <a href="${blogs[numOne].link}" ><img src=${blogs[numOne].img} alt=""></a>
      <a href="${blogs[numOne].link}" ><h6>${blogs[numOne].title}</h6></a>
      <a href="${
        blogs[numOne].link
      }"  class="snap-to-bottom"><h5>Read more</h5></a>
    </div>
    <div class="blog-tile" >
      <a href="${blogs[numOne + 1].link}" ><img src="${
    blogs[numOne + 1].img
  }" alt=""></a>
      <a href="${blogs[numOne + 1].link}" ><h6>${
    blogs[numOne + 1].title
  }</h6></a>
      <a href="${
        blogs[numOne + 1].link
      }"  class="snap-to-bottom"><h5>Read more</h5></a>
    </div>
    <div class="blog-tile" >
      <a href="${blogs[numOne + 2].link}" ><img src="${
    blogs[numOne + 2].img
  }" alt=""></a>
      <a href="${blogs[numOne + 2].link}" ><h6>${
    blogs[numOne + 2].title
  }</h6></a>
      <a href="${
        blogs[numOne + 2].link
      }"  class="snap-to-bottom"><h5>Read more</h5></a>
    </div>
  `
}
