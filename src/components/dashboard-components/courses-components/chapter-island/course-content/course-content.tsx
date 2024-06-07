import { courses } from "@/app/dashboard/courses/course-constants"

const CourseContent = ({ chapterId, courseId }: { chapterId: any, courseId: any }) => {
    console.log(chapterId, courseId)
    const course = courses.find(course => course.courseId === courseId)
    console.log(course)
    if (!course) {
        return <div>Course not found</div>
    }

    console.log(course)

    return (
        <div>
            {courseId} + {chapterId}
        </div>
    )
}

export default CourseContent