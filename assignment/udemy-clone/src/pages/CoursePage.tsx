import CourseTitle from '../components/course/CourseTitle'
import CourseDesc from '../components/course/CourseDesc'
import CourseList from '../components/course/CourseList'
import CouresTeacher from '../components/course/CouresTeacher'
import CourseReview from '../components/course/CourseReview'
import AnotherCourse from '../components/course/AnotherCourse'
import CourseDetail from '../components/course/CourseDetail'

const CoursePage: React.FC = () => {
  return (
    <>
      <CourseTitle />
      <CourseDesc />
      <CourseList />
      <CourseDetail />
      <AnotherCourse />
      <CouresTeacher />
      <CourseReview />
    </>
  )
}

export default CoursePage