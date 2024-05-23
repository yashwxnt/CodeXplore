// src/app/courses/course-enroll/page.tsx
import React from 'react';
import { useRouter } from 'next/router';

const CourseEnroll = () => {
  const router = useRouter();
  const { courseId } = router.query;

  if (!courseId) {
    return <div>No Course Selected</div>;
  }

  return <div>Select a course to view its details</div>;
};

export default CourseEnroll;
