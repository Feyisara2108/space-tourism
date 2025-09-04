export const destinations = [
  {
    id: 'moon',
    name: 'Moon',
    image: '/assets/destination/image-moon.png',
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 km',
    travel: '3 days'
  },
  {
    id: 'mars',
    name: 'Mars', 
    image: '/assets/destination/image-mars.png',
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: '225 mil. km',
    travel: '9 months'
  },
  {
    id: 'europa',
    name: 'Europa',
    image: '/assets/destination/image-europa.png', 
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 mil. km',
    travel: '3 years'
  },
  {
    id: 'titan',
    name: 'Titan',
    image: '/assets/destination/image-titan.png',
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: '1.6 bil. km', 
    travel: '7 years'
  }
];

export const crewMembers = [
  {
    id: 'douglas-hurley',
    name: 'Douglas Hurley',
    role: 'Commander',
    image: '/assets/crew/image-douglas-hurley.png',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He was the commander of the final flight of the Space Shuttle program, shuttle mission STS-135, and will command the first crewed flight of the SpaceX Dragon 2.'
  },
  {
    id: 'mark-shuttleworth',
    name: 'Mark Shuttleworth',
    role: 'Mission Specialist', 
    image: '/assets/crew/image-mark-shuttleworth.png',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    id: 'victor-glover',
    name: 'Victor Glover',
    role: 'Pilot',
    image: '/assets/crew/image-victor-glover.png',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    id: 'anousheh-ansari', 
    name: 'Anousheh Ansari',
    role: 'Flight Engineer',
    image: '/assets/crew/image-anousheh-ansari.png',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  }
];

export const technologies = [
  {
    id: 'launch-vehicle',
    name: 'Launch vehicle',
    description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    images: {
      portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
      landscape: '/assets/technology/image-launch-vehicle-landscape.jpg'
    }
  },
  {
    id: 'spaceport',
    name: 'Spaceport',
    description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation for launch.',
    images: {
      portrait: '/assets/technology/image-spaceport-portrait.jpg',
      landscape: '/assets/technology/image-spaceport-landscape.jpg'
    }
  },
  {
    id: 'space-capsule',
    name: 'Space capsule', 
    description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry vehicle designed to return from space to Earth\'s surface or that of another celestial body. Our capsule is where you\'ll spend your time during the flight. It includes a luxury window, space toilet, and of course the specially-designed seats that accommodate space suits.',
    images: {
      portrait: '/assets/technology/image-space-capsule-portrait.jpg',
      landscape: '/assets/technology/image-space-capsule-landscape.jpg'
    }
  }
];

export const backgroundImages = {
  home: {
    desktop: '/assets/home/background-home-desktop.jpg',
    tablet: '/assets/home/background-home-tablet.jpg', 
    mobile: '/assets/home/background-home-mobile.jpg'
  },
  destination: {
    desktop: '/assets/destination/background-destination-desktop.jpg',
    tablet: '/assets/destination/background-destination-tablet.jpg',
    mobile: '/assets/destination/background-destination-mobile.jpg'
  },
  crew: {
    desktop: '/assets/crew/background-crew-desktop.jpg',
    tablet: '/assets/crew/background-crew-tablet.jpg',
    mobile: '/assets/crew/background-crew-mobile.jpg'
  },
  technology: {
    desktop: '/assets/technology/background-technology-desktop.jpg',
    tablet: '/assets/technology/background-technology-tablet.jpg',
    mobile: '/assets/technology/background-technology-mobile.jpg'
  }
};