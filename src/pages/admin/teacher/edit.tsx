/* eslint-disable no-console */
import * as React from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '~/components/Layout/DefaultLayout'
import TeacherForm from '~/components/admin/Forms/TeacherForm'

const EditTeacherPage = () => {
  const router = useRouter()
  const [teacher, setTeacher] = React.useState()

  React.useEffect(() => {
    fetch(`/api/v1/teacher/details?id=${router.query.id}`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => setTeacher(result))
      .catch((error) => console.log('error', error))
  }, [router.query.id])
  return (
    <DefaultLayout>
      <div className="panel">
        <div className="flex flex-col gap-5 mb-5 md:flex-row md:items-center">
          <h5 className="text-lg font-semibold dark:text-white-light">Edit Teacher</h5>
        </div>
        <TeacherForm teacher={teacher} />
      </div>
    </DefaultLayout>
  )
}

export default EditTeacherPage
