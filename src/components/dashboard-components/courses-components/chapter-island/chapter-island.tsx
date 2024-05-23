import React from 'react';

interface Chapter {
  title: string;
  content: string;
}

interface Course {
  title: string;
  description: string;
  image: string;
  courseId: string;
  duration: string;
  ratings: number;
  category: string;
  difficulty: string;
  tags: string[];
  syllabus: string[];
  format: string;
  reviews: { rating: number; comment: string }[];
  certificates: boolean;
  faqs: { question: string; answer: string }[];
  media: string[];
  chapters: Chapter[];
}

interface ChapterIslandProps {
  course: Course;
}

const ChapterIsland: React.FC<ChapterIslandProps> = ({ course }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-primary">{course.title} - Chapters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {course.chapters.map((chapter, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">{index + 1}</text>
            </svg>
            <h2 className="text-xl font-semibold mb-2 text-center">{chapter.title}</h2>
            <p className="text-gray-700 text-center">{chapter.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterIsland;
