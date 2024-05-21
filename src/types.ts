export interface PersonalInfo {
  name: string;
  gender: string;
  age: string | number;
  position: string;
  workingYears: string | number;
  phoneNumber: string;
  email: string;
  picture: string;
  github?: string;
}

export interface PersonalSkill {
  icons?: string[];
  descriptions: string[];
}

export interface Experience {
  type: string;
  icon?: string;
  company?: string;
  position?: string;
  school?: string;
  degree?: string;
  major?: string;
  time: string;
  descriptions: string[];
}

export interface Project {
  icon?: string;
  name: string;
  description: string;
  stack: string[];
  details: string[];
}
