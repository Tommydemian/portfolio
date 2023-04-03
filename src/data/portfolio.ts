// each object is a project: 
import { Project } from '../types'
import redPadelApp from '../assets/redPadelApp.png'
import luvinkaSite from '../assets/luviankaPage.png'

export default [
  {
    id: 1,
    title: 'Red Padel App',
    subtitle: 'Padel Platform for Digitizing the Sport in the United States',
    briefDescription:'I played a crucial role in building a comprehensive Padel platform using modern technologies such as Vue.js, Tailwind CSS, TypeScript, Node.js, and GraphQL. As a frontend developer, I implemented UI designs with API connections, ensuring a reactive user experience and reducing resource consumption. Additionally, I contributed to the migration of the functions used in E2E testing to Node.js, resulting in a significant reduction in test execution time. This platform streamlined reservations and payments, improving the user experience and fostering the growth of the Padel community in the United States. Click on Learn more to explore further details.',
    imgUrl: redPadelApp,
    stackIcons: [
          {name: 'HTML', icon: 'icomoon-free:html-five'},
          {name: 'CSS', icon: 'cib:css3-shiled'}, 
          {name: 'javascript', icon: 'mdi:language-javascript'},
          {name: 'typescript', icon: 'mdi:language-typescript'}, 
          {name: 'vue', icon: 'akar-icons:vue-fill'}, 
          {name: 'tailwindcss', icon: 'simple-icons:tailwindcss'},
          {name: 'node-js', icon: 'fa6-brands:node-js'}, 
          {name: 'mongodb', icon: 'bxl:mongodb'}, 
          {name: 'GQL', icon: 'simple-icons:graphql'},
          {name: 'cypress', icon: 'tabler:brand-cypress'},
        // 'icomoon-free:html-five',
        // 'cib:css3-shiled',
        // 'mdi:language-javascript',
        // 'akar-icons:typescript-fill',
        // 'akar-icons:vue-fill',
        // 'simple-icons:tailwindcss',
        // 'fa6-brands:node-js',
        // 'bxl:mongodb',
        // 'tabler:brand-cypress',
        // 'simple-icons:graphql'
    ],
    stack: ['HTML', 'CSS', 'VueJs', 'TypeScript', 'Cypress', 'GQL', 'ApolloClient', 'MongoDb'],
    link: ''
  },
  {
    id: 2,
    title: 'Terminal Website',
    subtitle: '',
    briefDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    imgUrl: luvinkaSite,
    stackIcons:[],
    link: ''
  },
  {
    id: 3,
    title: 'Terminal Website',
    briefDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    imgUrl: '',
    stack: ['GoogleMaps API', 'Express', 'TypeScript', 'Vite'],
    link: ''
  },

] as Project[]