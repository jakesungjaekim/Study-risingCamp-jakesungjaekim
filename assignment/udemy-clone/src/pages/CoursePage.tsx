import CourseTitle from '../components/course/CourseTitle'
import CourseDesc from '../components/course/CourseDesc'
import CourseList from '../components/course/CourseList'
import CouresTeacher from '../components/course/CouresTeacher'
import CourseReview from '../components/course/CourseReview'
import Asidebar from '../components/course/Asidebar'
import AnotherCourse from '../components/course/AnotherCourse'

const CoursePage: React.FC = () => {
  return (
    <>
      <CourseTitle />
      <CourseDesc />
      <CourseList />
      <CouresTeacher />
      <CourseReview />
      <Asidebar />
      <AnotherCourse />
    </>
  )
}

export default CoursePage