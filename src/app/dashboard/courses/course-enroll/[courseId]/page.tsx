'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { courses } from '../../course-constants';
import CourseEnroll from '@/components/dashboard-components/courses-components/course-enroll/course-enroll';
import { courses as staticCourses } from '@/app/dashboard/courses/course-constants';


const CourseEnrollPage = () => {
  const params = useParams();
  const courseId = params.courseId;
  const [course, setCourse] = useState<any>(staticCourses[1]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:4500/courses/${courseId}`);
  //       setCourse(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError('Course not found');
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourse();
  // }, [courseId]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !course) { // Check if course is null
  //   return <div>{error || 'Course not found'}</div>;
  // }

  return <CourseEnroll course={course} />;
};

export default CourseEnrollPage;