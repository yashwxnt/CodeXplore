'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { courses } from '../../course-constants';
import ChapterIsland from '@/components/dashboard-components/courses-components/chapter-island/chapter-island';


const ChapterIslandPage = () => {
  const params = useParams();
  const courseId = params.courseId;
  const course = courses.find(course => course.courseId === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return <ChapterIsland course={course} />;
};

export default ChapterIslandPage;
