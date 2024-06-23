import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { courses as staticCourses } from '@/app/dashboard/courses/course-constants';
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChapterQuiz from '@/components/dashboard-components/exams/quiz/chapterquiz';
import Compiler from '@/components/Editor';
import topicContent from './topiccontent';
import HTMLFlipBook from 'react-pageflip';

const CourseContent = ({ chapterId, courseId }: { chapterId: any, courseId: any }) => {
  const params = useParams();
  const courseParamId = typeof params.courseId === 'string' ? params.courseId : courseId;

  const [currentPage, setCurrentPage] = useState(0);
  const [quiz, setQuiz] = useState(false);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState(topicContent.interactiveElements.codingExercise);

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
        const response = await axios.get(`http://localhost:4500/courses/getCourse/${courseParamId}`, {
          withCredentials: true,
        });
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setStaticCourse(courseParamId);
      }
    };

    fetchCourse();
  }, [courseParamId]);

  const handleQuiz = () => {
    setQuiz(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !course) {
    return <div>{error || 'Course not found'}</div>;
  }

  const renderTopicContent = (content: any) => (
    <HTMLFlipBook 
      width={300} 
      height={500} 
      className="page-flip-book" 
      style={{ margin: '0 auto' }} 
      startPage={0} 
      size="fixed" 
      minWidth={315} 
      maxWidth={1000} 
      minHeight={420} 
      maxHeight={1350} 
      maxShadowOpacity={0.5}
    >
      <div className="p-4 font-comic">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-blue-800">Story:</h2>
          <p className="text-xl mt-2 text-gray-800">{content.story}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Introduction:</h3>
          <p className="text-xl mt-2 text-gray-800">{content.introduction}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Main Story:</h3>
          <p className="text-xl mt-2 text-gray-800">{content.mainStory}</p>
        </div>
      </div>
      <div className="p-4 font-comic">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Interactive Elements:</h3>
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">💬</span>
            <span className="text-xl text-gray-800"><strong>Question:</strong> {content.interactiveElements.question}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">💻</span>
            <div className="text-xl text-gray-800">
              <strong>Coding Exercise:</strong>
              <Compiler language="html" code={code} setCode={setCode} />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">🔍</span>
            <div className="text-xl text-gray-800">
              <strong>Decision Point:</strong> {content.interactiveElements.decisionPoint}
              <div className="flex gap-2 mt-2">
                <Button className="bg-blue-800 text-white py-2 px-4 rounded">Hobby</Button>
                <Button className="bg-blue-800 text-white py-2 px-4 rounded">School Project</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">🐞</span>
            <div className="text-xl text-gray-800">
              <strong>Debugging Scenario:</strong>
              <div className="flex flex-col mt-2">
                <pre className="bg-gray-100 p-2 rounded mt-2">&lt;h1Hello, world!&lt;/h1&gt;</pre>
                <Compiler language="html" code="<html><body><h1>Hello, world!</h1></body></html>" setCode={setCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 font-comic">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Conclusion:</h3>
          <p className="text-xl mt-2 text-gray-800">{content.conclusion}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">What did you learn?</h3>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            {content.whatDidYouLearn.map((item: string, index: number) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Challenge:</h3>
          <p className="text-xl mt-2 text-gray-800">{content.challenge}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600">Next Step:</h3>
          <p className="text-xl mt-2 text-gray-800">{content.nextStep}</p>
        </div>
      </div>
    </HTMLFlipBook>
  );

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
                  {renderTopicContent(topicContent)}
                </CardContent>
              </Card>
              <div className="flex justify-between mt-4">
                {currentPage > 0 && (
                  <Button
                    className="bg-blue-800 text-white py-2 px-4 rounded"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous Topic
                  </Button>
                )}
                {currentPage < chapter.topics.length - 1 ? (
                  <Button
                    className="bg-blue-800 text-white py-2 px-4 rounded"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next Topic
                  </Button>
                ) : (
                  <Button className="bg-blue-800 text-white py-2 px-4 rounded" onClick={handleQuiz}>
                    Take Quiz
                  </Button>
                )}
              </div>
            </TabsContent>
          ))
        )}
      </Tabs>
    </div>
  );
};

export default CourseContent;
