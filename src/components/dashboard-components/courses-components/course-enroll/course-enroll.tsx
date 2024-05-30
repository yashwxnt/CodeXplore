'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import { ChevronDown, Star, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

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
    courseReviews: {
      userAvatar: string | undefined; rating: number; comment: string 
    }[];
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

  const averageRating = courseReviews.reduce((acc, review) => acc + review.rating, 0) / courseReviews.length;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { toast } = useToast();

  const tabs = ['About', 'Curriculum', 'Reviews', 'FAQs'];
  const [activeTab, setActiveTab] = useState(tabs[0].toLowerCase());

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    about: null,
    curriculum: null,
    reviews: null,
    faqs: null,
  });

  const handleScroll = (tab: string) => {
    sectionRefs.current[tab]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = Object.values(sectionRefs.current);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast({ title: "Enrolled", description: `You have successfully enrolled in ${courseName}!` });
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-8">
        {/* Course Header */}
        <Card className="shadow-lg rounded-lg overflow-hidden bg-card relative">
          <div className="flex flex-col md:flex-row">
            <img src={courseImage} alt={courseName} className="w-full md:w-1/3 object-cover" />
            <CardContent className="flex-1 p-6">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-4">{courseName}</CardTitle>
              </CardHeader>
              <p className="text-lg text-gray-700 mb-4">{description}</p>
              <div className="flex items-center space-x-4 mb-4">
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded cursor-pointer">{courseCategory}</span>
                  </TooltipTrigger>
                  <TooltipContent className="p-2 bg-gray-800 text-white rounded shadow-lg">
                    More information about the course category.
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded cursor-pointer">{difficulty}</span>
                  </TooltipTrigger>
                  <TooltipContent className="p-2 bg-gray-800 text-white rounded shadow-lg">
                    This indicates the difficulty level of the course.
                  </TooltipContent>
                </Tooltip>
                <span className="text-sm font-bold text-gray-500">{courseDuration}</span>
              </div>
              <div className="flex items-center font-bold space-x-2 mb-4">
                <Tooltip>
                  <TooltipTrigger>
                    <span className="flex items-center text-yellow-500 cursor-pointer">
                      <Star className="w-5 h-5" /> {averageRating.toFixed(1)}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="p-2 bg-gray-800 text-white rounded shadow-lg">
                    Average rating based on {courseReviews.length} reviews.
                  </TooltipContent>
                </Tooltip>
                <span className="text-gray-500">({courseReviews.length} reviews)</span>
              </div>
            </CardContent>
            {/* Enrollment Section */}
            <div className="lg:w-1/4 lg:sticky lg:top-20 right-0">
              <div className="sticky top-0">
                <Card className="shadow-lg rounded-lg overflow-hidden bg-card p-6">
                  {isEnrolled ? (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-primary">Your Progress</h2>
                      <Progress />
                      <Badge>Course Completed!</Badge>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold mb-4 text-primary">Enroll in this Course</h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <DollarSign className="w-6 h-6 text-green-500" />
                        <span className="text-2xl font-bold text-gray-900">$99.99</span>
                      </div>
                      <Button onClick={handleEnroll} className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded w-full hover:shadow-lg transition-shadow duration-300">Enroll Now</Button>
                    </>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs Navigation */}
        <div className="sticky top-0 bg-white z-10 my-8">
          <Tabs value={activeTab} onValueChange={handleScroll}>
            <TabsList className="flex border-b border-gray-300">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.toLowerCase()}
                  className={`py-2.5 px-4 text-sm font-medium leading-5 transition-colors duration-150
                    ${activeTab === tab.toLowerCase() ? 'border-b-2 -mb-px border-primary text-primary' : 'text-gray-500'}`}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* About Section */}
        <div id="about" ref={(el) => { sectionRefs.current.about = el; }} className="my-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-primary">About</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" ref={(el) => { sectionRefs.current.curriculum = el; }} className="my-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-primary">Curriculum</h2>
          <div className="border rounded-md overflow-hidden shadow-sm bg-white">
            <Accordion type="single">
              {chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`chapter-${index}`} className="border-b">
                  <AccordionTrigger className="flex justify-between w-full items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                    {chapter.chapterName} <ChevronDown className="w-4 h-4" />
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <ul className="list-disc pl-6">
                      {chapter.topics.map((topic, i) => (
                        <li key={i} className="mb-2">
                          <strong>{topic.topicName}:</strong> {topic.topicContent.join(', ')}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" ref={(el) => { sectionRefs.current.reviews = el; }} className="my-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-primary">Reviews</h2>
          {courseReviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border-b">
              <div className="flex items-center mb-2">
                {review.userAvatar ? (
                  <img src={review.userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
                    <span className="font-bold">{review.rating}</span>
                  </div>
                )}
                <div className="text-sm font-bold text-gray-800">{review.rating}</div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div id="faqs" ref={(el) => { sectionRefs.current.faqs = el; }} className="my-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-primary">FAQs</h2>
          <div className="border rounded-md overflow-hidden shadow-sm bg-white">
            <Accordion type="single">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b">
                  <AccordionTrigger className="flex justify-between w-full items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                    {faq.question} <ChevronDown className="w-4 h-4" />
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CourseEnroll;
