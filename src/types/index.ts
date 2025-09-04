// src/types/index.ts

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}