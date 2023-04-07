export type IconDescription = {
    name: string 
    icon: string
}

export type Project = {
    id: number
    title: string
    subtitle: string
    briefDescription: string
    imgUrl: string
    stackIcons: IconDescription[]
    link: string
}

export type Experience = {
    id: number
    year: string
    title: string
    duration: string
    details: string
}

type Asset = {
    default: string;
  };

export type Slide = {
    id: number
    url: Asset | string 
    description: string
}

export type ProjectDescription = {
    projectTitle: string    
    briefDescription: string
    longDescription: string
    techStack: string[]
}

export enum ButtonType {
    BUTTON = 'button', 
    SUBMIT = 'submit',
    RESET = 'reset',
}

interface Article {
    link: string, 
    name: string
}

export interface Courses {
    id: number
    courseTitle: string
    courseDate?: string
    courseTeacher?: string
    coursePlatform?: string
    courseDescription: string
    courseImage: string
    linkedinLink?: string,
    article?: Article, 
  }