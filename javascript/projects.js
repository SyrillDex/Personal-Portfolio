const projects = [{
  id: 'card1',
  image: 'images/P1.png',
  href: 'https://startling-marigold-daaacb.netlify.app/',
  title: 'Real Estate website'
},{
  id: 'card2',
  image: 'images/P2.png',
  href: 'https://syrilldex.github.io/ROTG-website/',
  title: 'Rice on the Go(Future business website)'
},{
  id: 'card3',
  image: 'images/P3.png',
  href: 'https://github.com/SyrillDex/thesis',
  title: 'DoCapture(Thesis project)'
},{
  id: 'card4',
  image: 'images/P4.png',
  href: 'https://syrilldex.github.io/Personal-Portfolio/',
  title: 'Personal portfolio'
},{
  id: 'card5',
  image: 'images/IG.jpg',
  href: 'https://github.com/SyrillDex/php-practice',
  title: 'Fake IG using PHP'
}];

let projectHTML = '';

projects.forEach((project) =>{
  projectHTML += `
    <li class="card" id="${project.id}">
        <div class="card-body">
            <img src="${project.image}" alt="Project">
            <div class="view-site"><a target="_blank" href="${project.href}"><p>Visit Site <i class="fa-solid fa-link fa-xs"></i></p></a></div>
        </div>
    </li>
    <h2>${project.title}</h2>
  `
})

document.querySelector('.js-cards').innerHTML = projectHTML;

//try reuploading to github