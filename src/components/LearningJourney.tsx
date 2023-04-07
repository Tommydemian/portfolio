import React from 'react'

import Disclaimer from './Disclaimer'
import CoursesComponent from './CoursesComponent'


import courses from '../data/courses'
const reversedOrderCourses = courses.reverse()

const LearningJourney = () => {
  return (
    <section>
      <Disclaimer />
      {
        reversedOrderCourses.map(course => (
          <CoursesComponent
          courseDate={course.courseDate}
          key={course.id}
          id={course.id}
          courseTitle={course.courseTitle}
          courseTeacher={course.courseTeacher}
          coursePlatform={course.coursePlatform}
          courseDescription={course.courseDescription}
          article={course.article}
          linkedinLink={course.linkedinLink}
          courseImage={course.courseImage}
           />
        ))
      }
    </section>
  )
}

export default LearningJourney