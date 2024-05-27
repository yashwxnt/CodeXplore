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
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  syllabus?: { title: string; lectures: number; time: string; subtopics: string[] }[];
  format?: string;
  reviews?: { rating: number; comment: string }[];
  certificates?: boolean;
  faqs?: { question: string; answer: string }[];
  media?: string[];
}

const CourseEnroll: React.FC<CourseEnrollProps> = ({
  title,
  description,
  image,
  duration,
  category,
  syllabus = [],
  format = '',
  reviews = [],
  certificates = false,
  faqs = [],
  media = [],
}) => {
  const totalLectures = syllabus.reduce((acc, chapter) => acc + chapter.lectures, 0);
  const totalMinutes = syllabus.reduce((acc, chapter) => {
    const timeParts = chapter.time.split(' ');
    let total = 0;
    for (let i = 0; i < timeParts.length; i += 2) {
      const value = parseInt(timeParts[i], 10);
      const unit = timeParts[i + 1];
      if (unit.includes('hr')) {
        total += value * 60;
      } else if (unit.includes('min')) {
        total += value;
      }
    }
    return acc + total;
  }, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  const totalLength = `${totalHours}h ${remainingMinutes}min`;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row relative">
      {/* Existing Course Card */}
      <div className="flex-1 md:mr-4">
        <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
          {/* Card Header */}
          <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          </CardHeader>
          {/* Card Content */}
          <CardContent className="p-6" style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}>
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover mb-6 rounded-lg shadow-lg"
            />
            <p className="text-lg mb-4">{description}</p>
            <p className="text-md mb-1"><strong>Duration:</strong> {duration}</p>
            <p className="text-md"><strong>Category:</strong> {category}</p>
          </CardContent>
        </Card>

        {/* Course Syllabus */}
        <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
            <h2 className="text-lg font-semibold">Course Syllabus</h2>
          </div>
          <div className="p-6" style={{ backgroundColor: 'var(--popover)', color: 'var(--popover-foreground)' }}>
            <p className="text-md mb-6">
              {syllabus.length} sections • {totalLectures} lectures • {totalLength} total length
            </p>
            <Accordion type="multiple" className="w-full">
              {syllabus.map((chapter, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4 last:border-b-0 w-full">
                  <AccordionTrigger className="flex justify-between items-center p-4 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors w-full shadow-sm">
                    <span className="font-semibold">{chapter.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{chapter.lectures} lectures • {chapter.time}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 p-4 bg-gray-50 rounded-lg w-full shadow-sm">
                    <ul className="list-disc list-inside">
                      {chapter.subtopics.map((subtopic, subIndex) => (
                        <li key={subIndex}>{subtopic}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {syllabus.length > 10 && (
              <div className="text-center">
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Show More Sections
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reviews and Testimonials */}
        {reviews.length > 0 && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>Reviews and Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="p-6" style={{ backgroundColor: 'var(--popover)', color: 'var(--popover-foreground)' }}>
              {reviews.map((review, index) => (
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
                    <p>{review.comment}</p>
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
            <CardContent className="p-6" style={{ backgroundColor: 'var(--popover)', color: 'var(--popover-foreground)' }}>
              <p>You will receive a certificate upon completion of this course.</p>
            </CardContent>
          </Card>
        )}

        {/* FAQs and Support */}
        {faqs.length > 0 && (
          <Card className="mb-8 shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
              <CardTitle>FAQs and Support</CardTitle>
            </CardHeader>
            <CardContent className="p-6" style={{ backgroundColor: 'var(--popover)', color: 'var(--popover-foreground)' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{faq.question}</p>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Payment Card */}
      <div className="md:w-64 fixed top-20 right-4">
        <Card className="w-full h-64 rounded-lg mb-4 shadow-lg p-4" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
          <div className="flex justify-around mb-4">
            <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
            <div className="bg-purple-500 w-3 h-3 rounded-full"></div>
            <div className="bg-pink-500 w-3 h-3 rounded-full"></div>
          </div>
          <div className="text-center">
            <p className="font-semibold">Enroll Now</p>
            <p className="mb-4">To enroll in this course, complete the payment process.</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Pay Now
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseEnroll;
