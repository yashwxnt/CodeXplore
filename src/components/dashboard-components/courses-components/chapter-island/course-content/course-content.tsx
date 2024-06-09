import { courses } from "@/app/dashboard/courses/course-constants"
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const CourseContent = ({ chapterId, courseId }: { chapterId: any, courseId: any }) => {


    const course = courses.find(course => course.courseId === courseId)
    console.log(course)

    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <div className="max-h-full h-full w-full">
            <Tabs>
                <TabsList className="overflow-auto">
                    {course.chapters.map(chapter => (
                        <TabsTrigger key={chapter.chapterName} className="mr-10 font-brenet-regular bg-transparent text-3xl" value={chapter.chapterName}>
                            {chapter.chapterName}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {course.chapters.map(chapter => (
                    //? This shows the contents of the chapters
                    <TabsContent className="bg-red-600" value={chapter.chapterName}>
                        <p>{chapter.chapterName}</p>

                        {/* MAKE THIS INTO A PAGINATION */}
                        {/* {chapter.topics.map(topic => (
                            <div key={topic.topicName} className="p-4">
                                <h1 className="text-2xl font-bold">{topic.topicName}</h1>
                                <p className="text-lg">{topic.topicContent}</p>
                            </div>
                        ))} */}

                        <Pagination className="mt-8">
                            <PaginationPrevious
                            // onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                            // className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                            <PaginationContent>

                                {chapter.topics.map((topic, index) => (
                                    <PaginationItem
                                        key={topic.topicName}>
                                        <PaginationLink key={topic.topicName} className="p-4">
                                            {index}
                                        </PaginationLink>

                                    </PaginationItem>
                                ))}
                            </PaginationContent>
                            <PaginationNext
                            // onClick={() =>
                            //     paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)
                            // }
                            // className={currentPage === pageNumbers.length ? 'pointer-events-none opacity-50' : ''}
                            />
                        </Pagination>

                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default CourseContent