import { StaticImageData } from "next/image";
export interface IconsType {
  link: string;
  icon: JSX.Element;
}
export interface NavType {
  name: string;
  path: string;
}
export interface AboutType {
  heading: string;
  num: number;
}
export interface SerPortType {
  img: StaticImageData;
  heading: string;
  des: string;
  icon?: Element;
}
export interface SkillType {
  name: string;
  range: number;
}
