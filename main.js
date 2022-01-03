const menuOver = document.querySelector('#menu-over');
const mobileMenu = document.querySelector('.mobile-menu');
const closeTab = document.querySelector('.closeMenu');

function mobileMenuToogle() {
  menuOver.style.width = '100%';
  menuOver.style.display = 'block';
}

function closeMenu() {
  menuOver.style.width = '0';
}

mobileMenu.addEventListener('click', () => {
  mobileMenuToogle();
});

closeTab.addEventListener('click', () => {
  closeMenu();
});

const speakers = [
  {
    image: 'Images/speaker_01.png',
    Name: 'Richard Serra',
    job: 'American artist',
    text: 'An american artist known for his large-scale sculptures made for site-specific landscape, urban, and architectural settings.',
  },
  {
    image: 'Images/speaker_02.png',
    Name: 'Vija Celmins',
    job: 'Visual artist',
    text: 'Vija Celmins is a visual artist best known for photo-realistic paintings and drawings of natural environments and phenomena such as the ocean, spider webs, star fields, and rocks.',
  },
  {
    image: 'Images/speaker_03.png',
    Name: 'Robert Gober',
    job: 'American Sculptor',
    text: 'Robert Gober is an American sculptor. His work is often related to domestic and familiar objects such as sinks, doors, and legs.',
  },
  {
    image: 'Images/speaker_04.png',
    Name: 'David Ferreira',
    job: 'French painter',
    text: 'David Ferreira paintings are recognisable by his signature, but also by his fetish number, 15.',
  },
  {
    image: 'Images/speaker_05.png',
    Name: 'Jeff murray',
    job: 'A pen & ink artist',
    text: 'Jeff Murray creates visuals that all artistic lovers can get lost within, and each time you gaze into them, you find something new. With inspiration taken from the exploration of the world, the endless search for new outcomes never tires.',
  },
  {
    image: 'Images/speaker_06.png',
    Name: 'Luc Tuymans',
    job: 'Belgian visual artist',
    text: 'Luc Tuymans is a Belgian visual artist best known for his paintings which explore peoples relationship with history and confront their ability to ignore it.',
  },
];

function speakersDisplay() {
  if (window.screen.width < 768) {
    for (let i = 0; i < 2; i += 1) {
      const speaker = `<div id="speaker1"><img src=${speakers[i].image}><h2 id="speaker-name">${speakers[i].Name}</h2><h3 id="pro">${speakers[i].job}</h3><p id="info">${speakers[i].text}</p></div>`;
      speaker.innerHTML += speakers;
    }
  }
}

speakersDisplay();