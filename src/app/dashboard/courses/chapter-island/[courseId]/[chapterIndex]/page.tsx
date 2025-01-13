'use client';
import CourseContent from "@/components/dashboard-components/courses-components/chapter-island/course-content/course-content"
import { useParams } from "next/navigation";

const chapterPage = () => {
    const params = useParams();
    const chapterIndex = params.chapterIndex;
    const courseId = params.courseId;

    
    return <CourseContent chapterId={chapterIndex as string} courseId={courseId as string}/>
}

export default chapterPage