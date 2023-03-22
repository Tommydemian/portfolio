// each object is a project: 
import { Project } from '../types'
import redPadelApp from '../assets/redPadelApp.png'
import luvinkaSite from '../assets/luviankaPage.png'

export default [
    {
      id: 1,  
      title: 'RedPadel App',
      imgUrl: redPadelApp, 
      stack: ['HTML', 'CSS', 'VueJs', 'TypeScript', 'Cypress', 'GQL', 'ApolloClient', 'MongoDb'], 
      link:''
    },
    {
      id: 2,  
      title: 'Terminal Website',
      imgUrl: luvinkaSite, 
      stack: ['Vuejs', 'Sass', 'Google maps API', 'Vite'], 
      link:''
    },
    {
      id: 3,  
      title: 'Terminal Website',
      imgUrl: '', 
      stack: ['GoogleMaps API', 'Express', 'TypeScript', 'Vite'], 
    link:''
    },
    
] as Project[]