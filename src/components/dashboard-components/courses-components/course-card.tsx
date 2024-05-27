// src/components/courses-components/course-card.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  courseId: string;
  duration: string;
  ratings: number;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  courseId,
  duration,
  ratings,
  category,
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-3.09 1.64.59-3.45-2.5-2.44 3.47-.5L10 7l1.53 3.25 3.47.5-2.5 2.44.59 3.45L10 15z" />
        </svg>
      );
    }

    if (halfStars) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12.5l-2.25 1.18.43-2.53-1.84-1.8 2.55-.37L10 7.25l1.14 2.34 2.55.37-1.84 1.8.43 2.53L10 12.5z" />
        </svg>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12.5l-2.25 1.18.43-2.53-1.84-1.8 2.55-.37L10 7.25l1.14 2.34 2.55.37-1.84 1.8.43 2.53L10 12.5z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="transition-transform transform hover:scale-105">
      <Card className="w-full max-w-xs m-4 bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <CardTitle className="text-2xl font-bequest mb-2">{title}</CardTitle>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-cyan-500 font-brenet-outline text-muted-foreground">{duration}</p>
              <div className="flex items-center space-x-1">
                {renderStars(ratings)}
              </div>
            </div>
            <p className="text-sm font-inter text-muted-foreground mb-4">{category}</p>
          </div>
          <Link href={`/dashboard/courses/course-enroll/${courseId}`} passHref>
            <Button className="text-lg font-semibold text-primary-foreground bg-primary py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary self-stretch mt-auto">
              View Course
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
