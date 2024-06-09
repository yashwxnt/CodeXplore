import { courses } from "@/app/dashboard/courses/course-constants"
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ChapterQuiz from "@/components/dashboard-components/exams/quiz/chapterquiz"

const CourseContent = ({ chapterId, courseId }: { chapterId: any, courseId: any }) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [quiz, setQuiz] = useState(false)
    const course = courses.find(course => course.courseId === courseId)
    console.log(course)

    const paginate = (index: number) => {
        console.log(index, Object(course).chapters[chapterId].topics.length)
        setCurrentPage(index)
    }

    const handleQuiz = () => {
        setQuiz(true)
    }

    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <div className="max-h-full h-full w-full">
            <Tabs>
                <TabsList className="overflow-hidden">
                    {course.chapters.map(chapter => (
                        <TabsTrigger key={chapter.chapterName} className="mr-10 font-brenet-regular bg-transparent text-3xl" value={chapter.chapterName}>
                            {chapter.chapterName}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {
                    quiz ?
                        <ChapterQuiz /> :

                        course.chapters.map(chapter => (
                            //? This shows the contents of the chapters
                            <TabsContent className="rounded-sm" value={chapter.chapterName}>
                                <Card className="border-primary mb-4 mr-3 shadow-[5px_5px_0px_0px_red]">
                                    <CardHeader>
                                        <CardTitle>{chapter.topics[currentPage].topicName}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="bg-background h-[57vh] overflow-auto text-secondary-foreground">
                                        {Object(chapter.topics)[currentPage] ? Object(chapter.topics)[currentPage]['topicContent'] : 'No content'}
                                    </CardContent>
                                </Card>
                                <div className="flex justify-between">
                                    <Pagination className="mx-0 mt-2 text-secondary-foreground w-2/6 flex bg-primary rounded-lg">
                                        <PaginationPrevious
                                            onClick={() => paginate(currentPage > 0 ? currentPage - 1 : 0)}
                                            className={currentPage === 0 ? 'pointer-events-none opacity-50' : ''}
                                        />
                                        <PaginationContent>
                                            {chapter.topics.map((topic, index) => (
                                                <PaginationItem
                                                    onClick={() => { paginate(index) }}
                                                    key={topic.topicName}>
                                                    <PaginationLink key={topic.topicName} className="p-4">
                                                        {index}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            ))}
                                        </PaginationContent>
                                        <PaginationNext
                                            onClick={() =>
                                                paginate(currentPage <= chapter.topics.length - 1 ? currentPage + 1 : chapter.topics.length)
                                            }
                                            className={currentPage === chapter.topics.length - 1 ? 'pointer-events-none opacity-50' : ''}
                                        />
                                    </Pagination>
                                    {currentPage === chapter.topics.length - 1 && <Button className="mt-2 mr-3" onClick={handleQuiz}>Take Quiz</Button>}
                                </div>
                            </TabsContent>
                        ))
                }

            </Tabs>
        </div>
    )
}

export default CourseContent