const infos = [{
  image: 'images/cvsu.jpg',
  description: {
    title: 'School',
    body: 'Syrill Dex studied at Cavite State University Carmona Campus. BS in Computer Engineering.'
  }
},{
  image: 'images/coding.jpg',
  description: {
    title: 'Web Development',
    body: 'He is a passionate programmer specially on web develeopment.'
  }
}, {
  image: 'images/mcdo.jpg',
  description: {
    title: 'Work experience',
    body: 'He worked as a part-time crew at McDonalds for almost 3 years while studying.'
  }
}, {
  image: 'images/drums.jpg',
  description: {
    title: 'Hobby',
    body: 'He has a deep love for music, and playing the drums is his favorite hobby.'
  }
}];

let aboutHTML = '';

infos.forEach((info) => {
  aboutHTML += `
    <div class="about-me-card">
        <img src="${info.image}" alt="school image">
        <div>
          <h2>${info.description.title}</h2>
          <div class="card-line"></div>
          <p>${info.description.body}</p>
        </div>
      </div>
  `
});

document.querySelector('.js-cards-container').innerHTML = aboutHTML;