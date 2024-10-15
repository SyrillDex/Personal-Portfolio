const contacts = [{
  title: 'Go to LinkedIn profile',
  href: 'https://www.linkedin.com/in/syrill-dex-laguerta-52a1b22bb/',
  icon: 'fa-brands fa-linkedin',
  name: 'LinkedIn'
},{
  title: 'Go to Facebook profile',
  href: 'https://www.facebook.com/syrilldex.laguerta.47',
  icon: 'fa-brands fa-facebook',
  name: 'Facebook'
},{
  title: 'Email Syrill Dex',
  href: 'mailto:syrilldexl@gmail.com',
  icon: 'fa-solid fa-envelope',
  name: 'Mail'
},{
  title: 'Go to indeed profile',
  href: 'https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage',
  icon: 'fa-solid fa-info',
  name: 'Indeed'
},{
  title: 'Go to GitHub profile',
  href: 'https://github.com/SyrillDex',
  icon: 'fa-brands fa-github',
  name: 'GitHub'
}];

let contactsHTML = '';

contacts.forEach((contact) =>{
  contactsHTML += `
    <div  title="${contact.title}">
      <a href="${contact.href}" target="_blank">
        <i class="${contact.icon}"></i>
        <p>${contact.name}</p>
      </a>
    </div>
  `
});

document.querySelector('.js-icons').innerHTML = contactsHTML;