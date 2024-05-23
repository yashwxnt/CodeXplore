 'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { courses } from '../../course-constants';
import CourseEnroll from '@/components/dashboard-components/courses-components/course-enroll/course-enroll';

const CourseEnrollPage = () => {
  const params = useParams();
  const courseId = params.courseId;

  const course = courses.find(course => course.courseId === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <CourseEnroll
      title={course.title}
      description={course.description}
      image={course.image}
      duration={course.duration}
      category={course.category}
      syllabus={course.syllabus}
      format={course.format}
      reviews={course.reviews}
      certificates={course.certificates}
      faqs={course.faqs}
      media={course.media}  />
  );
};

export default CourseEnrollPage;