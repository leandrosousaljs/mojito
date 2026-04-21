export interface NavLink {
  id: string;
  title: string;
}

export interface DrinkItem {
  name: string;
  country: string;
  detail: string;
  price: string;
}

export interface ProfileItem {
  imgPath: string;
}

export type FeatureItem = string;

export type GoodItem = string;

export interface StoreContact {
  phone: string;
  email: string;
}

export interface StoreInfo {
  heading: string;
  address: string;
  contact: StoreContact;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface SocialItem {
  name: string;
  icon: string;
  url: string;
}

export interface SliderItem {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}
