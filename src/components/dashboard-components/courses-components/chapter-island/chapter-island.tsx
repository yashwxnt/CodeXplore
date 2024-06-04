import React from 'react';
import { motion } from 'framer-motion';

interface Chapter {
  chapterName: string;
  content: string;
}

interface Course {
  chapters: Chapter[];
}

interface ChapterIslandProps {
  course: Course;
}

const ChapterIsland: React.FC<ChapterIslandProps> = ({ course }) => {
  return (

      <div className="absolute inset-0 w-full h-full bg-[url('/images/chapter-island.svg')] bg-no-repeat bg-cover" />


         
   
  
  );
};

export default ChapterIsland;
