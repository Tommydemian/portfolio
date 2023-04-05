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
    projectName: string    
    longDescription: string
    briefDescription: string
    techStack: string[]
}

export enum ButtonType {
    BUTTON = 'button', 
    SUBMIT = 'submit',
    RESET = 'reset',
}