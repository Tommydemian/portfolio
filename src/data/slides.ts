import { Slide } from '../types'

// Assets
import jsHardParts from '../assets/jshardOne.png'
import jsHardParts2 from '../assets/hardPartsnew.png'
import reactOne from '../assets/reactOne.png'

const slides: Slide[] = [
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

export default slides;