'use client';
import React, { useState } from 'react';
import CourseCard from './course-card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { BookOpenIcon, CodeIcon, DatabaseIcon, SearchIcon } from 'lucide-react';
import CourseFilter from './course-filter';
import { courses } from '@/app/dashboard/courses/course-constants';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { motion } from 'framer-motion';

const categories = [
  { label: 'All', icon: null },
  { label: 'Web Development', icon: <BookOpenIcon className="w-6 h-6 mr-2" /> },
  { label: 'Computer Science', icon: <CodeIcon className="w-6 h-6 mr-2" /> },
  { label: 'Data Science', icon: <DatabaseIcon className="w-6 h-6 mr-2" /> },
];

const CourseCardWrapper: React.FC<{ className: string; children: React.ReactNode }> = ({ children, className }) => {
  return <motion.div className={className} whileHover={{ scale: 1.05 }}>{children}</motion.div>;
  
};

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState<{ rating: number; duration: string; tags: string[] }>({ rating: 0, duration: '', tags: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesRating = course.ratings >= filters.rating;
    const courseDuration = parseInt(course.duration);
    const matchesDuration =
      !filters.duration ||
      (filters.duration === 'short' && courseDuration < 5) ||
      (filters.duration === 'medium' && courseDuration >= 5 && courseDuration <= 20) ||
      (filters.duration === 'long' && courseDuration > 20);
    const matchesTags = filters.tags.length === 0 || filters.tags.some(tag => course.tags?.includes(tag));

    return matchesCategory && matchesRating && matchesDuration && matchesTags;
  });

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(filteredCourses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mx-auto px-4 py-12">
  <motion.h1
    className="text-4xl font-extrabold mb-12 font-brenet-regular text-center text-primary leading-tight"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Discover Our Courses
  </motion.h1>
  <div className="flex justify-center mb-8">
    <motion.div className="relative w-full sm:w-1/2" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <input
        type="text"
        className="w-full border border-input rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary font-inter"
        placeholder="Search for courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon className="w-6 h-6 absolute right-3 top-3 text-muted-foreground" />
    </motion.div>
  </div>
  <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
    <TabsList className="flex justify-center space-x-3 bg-muted p-3 rounded-full shadow-lg overflow-x-auto">
      {categories.map(({ label, icon }) => (
        <TabsTrigger
          key={label}
          value={label}
          className={`flex items-center px-5 py-2 mx-1 rounded-full transition font-inter ${
            selectedCategory === label
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-card text-card-foreground border border-border shadow-sm'
          } hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          {icon}
          {label}
        </TabsTrigger>
      ))}
    </TabsList>

    {categories.map(({ label }) => (
      <TabsContent key={label} value={label}>
        <div className="flex flex-col sm:flex-row gap-8 mt-8">
          <div className="w-full sm:w-1/5 pr-4 mb-10 sm:mb-0 font-inter">
            <CourseFilter onFilterChange={setFilters} />
          </div>
          <div className="w-full sm:w-4/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentCourses.map((course, index) => (
                <CourseCardWrapper key={index} className="transition  transform hover:scale-105">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    courseId={course.courseId}
                    duration={course.duration}
                    ratings={course.ratings}
                    category={course.category}
                  />
                </CourseCardWrapper>
              ))}
            </div>
            <Pagination className="mt-8">
              <PaginationPrevious
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
              <PaginationContent>
                {pageNumbers.map(number => (
                  <PaginationItem key={number}>
                    <PaginationLink
                      isActive={number === currentPage}
                      onClick={() => paginate(number)}
                      className={number === currentPage ? 'pointer-events-none' : ''}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {pageNumbers.length > 5 && (
                  <PaginationEllipsis className="text-muted-foreground" />
                )}
              </PaginationContent>
              <PaginationNext
                onClick={() =>
                  paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)
                }
                className={currentPage === pageNumbers.length ? 'pointer-events-none opacity-50' : ''}
              />
            </Pagination>
          </div>
        </div>
      </TabsContent>
    ))}
  </Tabs> 

  <div className="border-t-2 border-border my-8 mx-auto w-3/4"></div>
</div>

  );
};

export default CourseList;