import React from 'react';
// types
import { Courses } from '../types/index';

type CoursesProps = Courses;

const CoursesComponent = ({
  courseTitle,
  courseDescription,
  courseDate,
  id,
  courseImage,
  article,
  courseTeacher,
  coursePlatform,
  linkedinLink
}: CoursesProps) => {
  return (
    <div className='my-20 shadow-lg dark:shadow-gray100 flex flex-col sm:flex-row'>
      <div className='basis-1/2 items-center justify-center'>
        <img
          src={courseImage}
          alt={courseTitle}
          className={` w-full
            ${courseTitle === 'Plataforma 5 - Coding BootCamp'
              ? 'h-64 object-none'
              : 'h-full object-cover'
            }`}
        />
      </div>
      <div className='mt-4 sm:mt-0 p-4 sm:flex-1'>
        <h1 className='text-2xl font-bold font-Montserrat'>{courseTitle}</h1>
        {courseDate && (
          <p className='text-gray600 dark:text-gray100 font-Montserrat'>{courseDate}</p>
        )}
        {courseTeacher && (
          <p className='text-gray600 dark:text-gray100 font-semibold font-Montserrat'>{courseTeacher}</p>
        )}
        {coursePlatform && (
          <p className='font-semibold font-Montserrat text-[#e55934]'>{coursePlatform}</p>
        )}
        <p className='mt-4 text-gray600 dark:text-gray100 font-Lato'>
          {courseDescription}
        </p>
        <div>
          { article && (
              <a className='text-left text-sm sm:text-base cursor-pointer text-[#6bb7d6] underline' target="_blank" href={article.link}>
                {article.name}
              </a>
          )
          }
          {linkedinLink && ( <a
            href={linkedinLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 dark:text-blue-400 underline mr-4 block'
          >
            Linkedin Post
          </a>)}
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
