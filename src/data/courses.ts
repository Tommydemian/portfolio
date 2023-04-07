import { Courses } from '../types/index'
import p5Logo from '../assets/p5logo.jpeg'
import jsFoundation from '../assets/JsFoundationKyle.png'
import jsnewhardparts from '../assets/js-thenewHardParts.png'
import reactIntro  from '../assets/reactIntro.png'
import nodejsIntro from '../assets/nodejs.png'

const courses: Array<Courses> = [
    {
        id: 1,
        courseTitle: 'Plataforma 5 - Coding BootCamp', 
        courseDate:'Sep 2021 - Dec -2021', 
        courseDescription: 'Completed an intensive 14-week coding bootcamp, which involved over 850 hours of immersive training in full-stack web development using the MERN stack (MongoDB, Express, React, Node.js). Developed several web applications from scratch, working individually and in teams, and gained experience with version control, test-driven development, and agile methodologies. Participated in regular code reviews and debugging sessions, and presented final projects to a panel of industry experts. Strengthened my problem-solving skills, honed my attention to detail, and gained valuable experience working in a fast-paced, collaborative environment.',
        courseImage: p5Logo,
        linkedinLink: 'https://www.linkedin.com/in/tomas-gil-amoedo/details/education/', 
              
    },
    {
        id: 2,
        courseTitle: 'Deep JavaScript Foundations, v3',  
        coursePlatform: 'Frontend Masters', 
        courseTeacher: 'Kyle Simpson',
        courseDescription: "Deepen your understanding of JavaScript with Kyle Simpson's 'Deep JavaScript Foundations, v3' course. This course covers the core pillars of the language, including JavaScript's types and how to compare them using == and ===, lexical scope and closure, and the object-oriented system. With over 10 hours of video content, this course will equip you with valuable skills that will benefit you for years to come. In fact, this course inspired me to write my first article on coercion in JavaScript comparisons. Check it out here:",
        courseImage: jsFoundation,
        article:{
            link: 'https://medium.com/@tomasgilamoedo/coerci%C3%B3n-deber%C3%ADa-o-no-deber%C3%ADa-permitirla-en-mis-comparaciones-6a380de61b5', 
            name:'Coerción ¿Debería o no debería permitirla en mis comparaciones de igualdad?'
        }  
    },
    {
        id: 3,
        courseTitle: 'The New Hard Parts',  
        coursePlatform: 'Frontend Masters', 
        courseTeacher: 'Will Sentance',
        courseDescription: "Learn the ins and outs of modern JavaScript with 'JavaScript: The New Hard Parts' course taught by Will Sentance. From parsing and executing code to mastering asynchronous control flow using iterators, generators, promises, and async/await, you'll gain a deep understanding of the new features in ES6+ and how they work under-the-hood. This was my favorite course so far and inspired me to write an article on JavaScript closures, and to share my learnings on LinkedIn.",
        courseImage: jsnewhardparts,
        linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7033213387224289280/', 
        article:{
         link: 'https://dev.to/tommydemian/javascript-closures-and-custom-iterators-a-comprehensive-guide-5a0m', 
         name: 'JavaScript Closures and Custom Iterators: A Comprehensive Guide.' 
        }
    },
    {
        id: 4,
        courseTitle: 'Complete Intro to React, v8',  
        coursePlatform: 'Frontend Masters', 
        courseTeacher: 'Brian Holt',
        courseDescription: "Allow me to put it this way: although I don't currently use React as my JS framework in my current job, I had stopped writing React for a while. Brian Holt's Complete Intro to React v8 course was just what I needed to refresh my knowledge and brush up on the syntax and nuances of the language. After coding two or three applications, I was back to my comfortable self, and React has quickly become my favorite JS framework. In fact, this very portfolio was written using React, As the saying goes, 'you never forget your first love'",
        courseImage: reactIntro ,
        linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7043366723718164480/' 
    },
    {
        id: 5,
        courseTitle: 'Introduction to Node.js, v2',  
        coursePlatform: 'Frontend Masters', 
        courseTeacher: 'Scott Moss',
        courseDescription: "This course, Introduction to Node.js v2, has been a game-changer for me in terms of leveling up my skills as a full-stack developer. Not only did it enable me to transfer my existing JavaScript skills to the server-side, but it also opened up a whole new world of possibilities for me. With Node.js, I am now able to create command-line interfaces and APIs, interact with the file system, and much more. This has enabled me to become a more well-rounded and versatile developer, capable of handling both front-end and back-end tasks with ease. The knowledge and skills I gained from this course have been instrumental in preparing me for a successful career as a full-stack developer.",
        courseImage: nodejsIntro
    },
]

export default courses;