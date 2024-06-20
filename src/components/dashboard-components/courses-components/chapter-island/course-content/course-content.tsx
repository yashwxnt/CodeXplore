import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { courses as staticCourses } from '@/app/dashboard/courses/course-constants';
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChapterQuiz from '@/components/dashboard-components/exams/quiz/chapterquiz';

const CourseContent = ({ chapterId, courseId }: { chapterId: any, courseId: any }) => {
  const params = useParams();
  const courseParamId = typeof params.courseId === 'string' ? params.courseId : courseId;

  const [currentPage, setCurrentPage] = useState(0);
  const [quiz, setQuiz] = useState(false);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to set the course data when the backend is not available
  const setStaticCourse = (courseId: string) => {
    const staticCourse = staticCourses.find(course => course.courseId === courseId);
    if (staticCourse) {
      setCourse(staticCourse);
      setLoading(false);
    } else {
      setError('Course not found');
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log(courseParamId);
        const response = await axios.get(`http://localhost:4500/courses/getCourse/${courseParamId}`, {
          withCredentials: true,
        });
        console.log(`getCourse/${courseParamId}: `, response.data);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        // If backend is not available, set the static course
        setStaticCourse(courseParamId);
      }
    };

    fetchCourse();
  }, [courseParamId]);

  const paginate = (index: number) => {
    if (course) {
      console.log(index, Object(course).chapters[chapterId].topics.length);
      setCurrentPage(index);
    }
  };

  const handleQuiz = () => {
    setQuiz(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !course) {
    return <div>{error || 'Course not found'}</div>;
  }

  return (
    <div className="max-h-full h-full w-full">
      <Tabs>
        <TabsList className="overflow-hidden">
          {course.chapters.map((chapter: any) => (
            <TabsTrigger key={chapter.chapterName} className="mr-10 font-brenet-regular bg-transparent text-3xl" value={chapter.chapterName}>
              {chapter.chapterName}
            </TabsTrigger>
          ))}
        </TabsList>
        {quiz ? (
          <ChapterQuiz />
        ) : (
          course.chapters.map((chapter: any) => (
            <TabsContent key={chapter.chapterName} className="rounded-sm" value={chapter.chapterName}>
              <Card className="border-[0.5vmin] border-primary mb-4 mr-3 bg-primary shadow-[0.4rem_0.4rem_] shadow-primary transition-shadow duration-300 hover:shadow-[0.6rem_0.6rem_] hover:shadow-primary">
                <CardHeader>
                  <CardTitle>{chapter.topics[currentPage].topicName}</CardTitle>
                </CardHeader>
                <CardContent className="bg-background h-[57vh] overflow-auto text-secondary-foreground">
                  {Object(chapter.topics)[currentPage] ? Object(chapter.topics)[currentPage]['topicContent'] : 'No content'}
                </CardContent>
              </Card>
              <div className="flex justify-between">
                <Pagination className="mx-[-10%] mt-2 text-secondary-foreground w-2/6 flex justify-center">
                  <PaginationContent className="flex space-x-2">
                    {chapter.topics.map((topic: any, index: number) => (
                      <PaginationItem
                        onClick={() => { paginate(index) }}
                        key={topic.topicName}
                      >
                        <PaginationLink
                          key={topic.topicName}
                          className={`p-4 rounded-full cursor-pointer ${currentPage === index ? 'bg-primary text-transparent' : 'bg-secondary text-transparent'} hover:bg-primary hover:text-white`}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                </Pagination>
                {currentPage === chapter.topics.length - 1 && <Button className="mt-2 mr-3" onClick={handleQuiz}>Take Quiz</Button>}
              </div>
            </TabsContent>
          ))
        )}
      </Tabs>
    </div>
  );
};

export default CourseContent;
