import { Slide } from '../types'

// Assets
import jsHardParts from '../assets/jshardOne.png'
import jsHardParts2 from '../assets/hardPartsnew.png'
import reactOne from '../assets/reactOne.png'

// RedPadel images:
import redpadel1 from '../assets/redPadelApp.png'
import redpadel2 from '../assets/tournamentRedpadel.png'
import redpadel3 from '../assets/clubs.png'
import redpadel4 from '../assets/discover.png'


export const slides: Slide[] = [
    {
            id: 1,
            url: jsHardParts,
            description:"In this course, you will develop an intuitive understanding of the new features of JavaScript in ES6+: iterators, generators, promises, and async/await. You'll understand how promises are implemented under-the-hood to truly help fix the challenge of inversion of control in asynchronous code design. Plus, use iterators and generators to master asynchronous control flow. Go under the hood and solve complex async challenges by using the call stack, event loop, callback queue, micro-task queue and browser APIs so that you can navigate complex asynchronous problems, easily!"
        },
        {   id: 2,
            url: jsHardParts2,
            description: 'Hello Champ'
        },
        {   id: 3,
            url: reactOne,
            description: 'Hello'
        }
];

export const redPadelSlides: Slide[] = [
    {
        id: 1,
        url:redpadel1,
        description: ''
    },
    {
        id: 2,
        url: redpadel2,
        description: ''
    },
    {
        id: 3,
        url: redpadel3,
        description: ''
    },
    {
        id: 4,
        url: redpadel4,
        description: ''
    },
]