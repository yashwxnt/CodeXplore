import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import { ChevronDown, Star, User } from 'lucide-react';

interface CourseEnrollProps {
  course: {
    courseName: string;
    description: string;
    courseImage: string;
    courseDuration: string;
    courseCategory: string;
    difficulty: string;
    chapters: { chapterName: string; content: string; topics: { topicName: string; topicType: string; topicContent: string[] }[] }[];
    format: string;
    courseReviews: { rating: number; comment: string }[];
    certificates: boolean;
    faqs: { question: string; answer: string }[];
    media: string[];
  };
}

const CourseEnroll: React.FC<CourseEnrollProps> = ({ course }) => {
  const {
    courseName,
    description,
    courseImage,
    courseDuration,
    courseCategory,
    difficulty,
    chapters = [],
    format = '',
    courseReviews = [],
    certificates = false,
    faqs = [],
    media = [],
  } = course;

  const totalLectures = chapters.reduce((acc, chapter) => acc + chapter.topics.length, 0);
  const totalMinutes = chapters.reduce((acc, chapter) => {
    const timeParts = chapter.topics.map(topic => topic.topicName.split(' '));
    let total = 0;
    timeParts.forEach(part => {
      const value = parseInt(part[0], 10);
      const unit = part[1];
      if (unit.includes('hr')) {
        total += value * 60;
      } else if (unit.includes('min')) {
        total += value;
      }
    });
    return acc + total;
  }, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const totalLength =` ${totalHours}h ${remainingMinutes}min`;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row relative">
      {/* Existing Course Card */}
      <div className="flex-1 md:mr-4">
        <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
          {/* Card Header */}
          <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <CardTitle className="text-3xl font-bold">{courseName}</CardTitle>
          </CardHeader>
          {/* Card Content */}
          <CardContent className="p-6">
            <img
              src={courseImage}
              alt={courseName}
              className="w-full h-56 object-cover mb-6 rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-900 mb-4">{description}</p>
            <p className="text-md text-gray-700 mb-1"><strong>Duration:</strong> {courseDuration}</p>
            <p className="text-md text-gray-700"><strong>Category:</strong> {courseCategory}</p>
            <p className="text-md text-gray-700"><strong>Difficulty:</strong> {difficulty}</p>
            <p className="text-md text-gray-700"><strong>Format:</strong> {format}</p>
          </CardContent>
        </Card>

        {/* Course Syllabus */}
        <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
            <h2 className="text-lg font-semibold">Course Syllabus</h2>
          </div>
          <div className="p-6 bg-white">
            <p className="text-md text-gray-700 mb-6">
              {chapters.length} sections • {totalLectures} lectures • {totalLength} total length
            </p>
            <Accordion type="multiple" className="w-full">
              {chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4 last:border-b-0 w-full">
                  <AccordionTrigger className="flex justify-between items-center p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors w-full shadow-sm">
                    <span className="font-semibold">{chapter.chapterName}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{chapter.topics.length} lectures</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 p-4 bg-gray-50 rounded-lg w-full shadow-sm">
                    <ul className="list-disc list-inside">
                      {chapter.topics.map((topic, subIndex) => (
                        <li key={subIndex} className="text-gray-800">{topic.topicName}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {chapters.length > 10 && (
              <div className="text-center">
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Show More Sections
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reviews and Testimonials */}
        {courseReviews.length > 0 && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>Reviews and Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              {courseReviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm flex items-start">
                  <User className="h-10 w-10 text-gray-500 mr-4" />
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Certificates */}
        {certificates && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>Certificates</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <p className="text-gray-900">You will receive a certificate upon completion of this course.</p>
            </CardContent>
          </Card>
        )}

        {/* FAQs and Support */}
        {faqs.length > 0 && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>FAQs and Support</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Media Gallery */}
        {media.length > 0 && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>Media Gallery</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {media.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Course media ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-sm"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CourseEnroll;