import * as React from 'react'
import Head from 'next/head'
import YouTube from 'react-youtube'
import { useRouter } from 'next/router'
import TopBar from '~/components/TopBar'
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
import CopyrightSection from '~/components/CopyrightSection'
import LessonsSidebar from '~/components/course/LessonsSidebar'
import CourseTab from '~/components/course/CourseTab'
import AboutSection from '~/components/course/AboutSection'
import ResourcesTab from '~/components/course/ResourcesTab'
import QuizeTab from '~/components/course/QuizeTab'

const SingleCoursePage = () => {
  const router = useRouter()

  const [tab, setTab] = React.useState('about')
  const [lesson, setLesson] = React.useState<any>()
  const [lessons, setLessons] = React.useState<any>([])
  const [course, setCourse] = React.useState<any>()

  React.useEffect(() => {
    fetch(`/api/v1/course/details?id=${router.query.course}`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => setCourse(result))
      .catch((error) => console.log('error', error))

    fetch(`/api/v1/lesson/list?course_id=${router.query.course}`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => setLessons(result))
      .catch((error) => console.log('error', error))
  }, [router])

  const TabContent = () => {
    switch (tab) {
      case 'about':
        return <AboutSection lesson={lesson} />
        break
      case 'resources':
        return <ResourcesTab lesson={lesson} lessonCount={lessons.length} />
        break
      case 'quiz':
        return <QuizeTab lessonID={lesson?.id} />
        break
      default:
        return <AboutSection lesson={lesson} />
        break
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Studerakoranen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen font-inter bg-color1 overflow-x-hidden">
        <TopBar />
        <NavBar />
        <div className="flex-grow max-w-5xls container px-5 mx-auto grid grid-cols-12 gap-5 mt-10">
          <div className="order-last lg:order-first text-white col-span-12 lg:col-span-8 py-10">
            <h1 className="text-2xl font-elMessiri py-2">{course?.name}</h1>
            <p className="">{course?.description}</p>
            <div className="mt-5 w-full h-auto ">
              {lesson?.youtube_video && (
                <YouTube
                  opts={{
                    height: '390',
                    width: '100%',
                  }}
                  className="w-full h-auto"
                  videoId={lesson?.youtube_video}
                />
              )}
            </div>
            <div className="mt-10">
              <CourseTab tab={tab} setTab={setTab} />
            </div>
            <div className="mt-5">
              <TabContent />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <LessonsSidebar lessons={lessons} lessonID={lesson?.id} setLesson={setLesson} />
          </div>
        </div>
        <Footer />
        <CopyrightSection />
      </main>
    </React.Fragment>
  )
}

export default SingleCoursePage
