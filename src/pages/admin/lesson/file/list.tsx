/* eslint-disable no-console */
// @ts-nocheck
import * as React from 'react'
import { DataTable } from 'mantine-datatable'
import sortBy from 'lodash/sortBy'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import {
  // HiOutlineTrash,
  HiOutlinePencilAlt,
} from 'react-icons/hi'
import Link from 'next/link'
import { IRootState } from '~/store'
import { setPageTitle } from '~/store/themeConfigSlice'
import DefaultLayout from '~/components/Layout/DefaultLayout'

type RowData = {
  id: number
  lesson_id: number
  name: string
  file: string
  description: string
  created_at: string
  updated_at: string
  lesson_name: string
}

const AdminLessonFileList = () => {
  const [rowData, setRowData] = React.useState<RowData[]>([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setPageTitle('Course List'))
  })
  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl'

  const [page, setPage] = React.useState(1)
  const PAGE_SIZES = [10, 20, 30, 50, 100]
  const [pageSize, setPageSize] = React.useState(PAGE_SIZES[1])
  const [initialRecords, setInitialRecords] = React.useState<RowData[]>(sortBy(rowData, 'id'))
  const [recordsData, setRecordsData] = React.useState(initialRecords)

  const [search, setSearch] = React.useState('')
  const [sortStatus, setSortStatus] = React.useState({
    columnAccessor: 'id',
    direction: 'asc',
  })

  React.useEffect(() => {
    setPage(1)
  }, [pageSize])

  React.useEffect(() => {
    const from = (page - 1) * pageSize
    const to = from + pageSize
    setRecordsData([...initialRecords.slice(from, to)])
  }, [page, pageSize, initialRecords])

  React.useEffect(() => {
    setInitialRecords(() => {
      return rowData.filter((item) => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.lesson_name.toLowerCase().includes(search.toLowerCase())
        )
      })
    })
  }, [search, rowData])

  const getData = () => {
    fetch('/api/v1/file/list', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => setRowData(result))
      .catch((error) => console.log('error', error))
  }

  React.useEffect(() => {
    getData()
  }, [])

  React.useEffect(() => {
    const data: RowData[] = sortBy(initialRecords, sortStatus.columnAccessor) as RowData[]

    setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data)
    setPage(1)
  }, [initialRecords, sortStatus])

  // const deleteData = (id: number) => {
  //   const confirmation = confirm('Do you want to delete?')
  //   if (confirmation) {
  //     const formdata = new FormData()

  //     fetch(`/api/v1/file/delete?id=${id}`, {
  //       method: 'DELETE',
  //       body: formdata,
  //       redirect: 'follow',
  //     })
  //       .then((response) => response.json())
  //       .then(({ success, msg }) => {
  //         getData()
  //       })
  //       .catch((error) => console.log('error', error))
  //   }
  // }

  return (
    <DefaultLayout>
      <div className="panel">
        <div className="flex justify-end pb-5">
          <Link href={'/admin/lesson/file/add'} className="rounded-full btn btn-outline-primary">
            Add Lesson File
          </Link>
        </div>
        <div className="flex flex-col gap-5 mb-5 md:flex-row md:items-center">
          <h5 className="text-lg font-semibold dark:text-white-light">Lesson Files</h5>
          <div className="ltr:ml-auto rtl:mr-auto">
            <input
              type="text"
              className="w-auto form-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="datatables">
          <DataTable
            highlightOnHover
            className={`${
              isRtl ? 'table-hover whitespace-nowrap' : 'table-hover whitespace-nowrap'
            }`}
            records={recordsData}
            columns={[
              {
                accessor: 'id',
                title: 'ID',
                sortable: true,
                render: ({ id }) => <strong className="text-info">#{id}</strong>,
              },
              { accessor: 'name', title: 'File', sortable: true },
              { accessor: 'lesson_name', title: 'Lesson', sortable: true },
              {
                accessor: 'created_at',
                title: 'Created at',
                sortable: true,
                render: ({ created_at }) => <p>{moment(created_at).format('DD MMM, YYYY')}</p>,
              },
              {
                accessor: 'updated_at',
                title: 'Updated at',
                sortable: true,
                render: ({ updated_at }) => <p>{moment(updated_at).format('DD MMM, YYYY')}</p>,
              },
              {
                accessor: '',
                title: 'Action',
                render: ({ id }) => (
                  <div className="flex items-center gap-3 text-lg">
                    <Link href={`/admin/lesson/file/edit?id=${id}`} className="">
                      <HiOutlinePencilAlt />
                    </Link>
                    {/* <button onClick={() => deleteData(id)} className="">
                      <HiOutlineTrash />
                    </button> */}
                  </div>
                ),
              },
            ]}
            totalRecords={initialRecords.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
            minHeight={200}
            paginationText={({ from, to, totalRecords }) =>
              `Showing  ${from} to ${to} of ${totalRecords} entries`
            }
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default AdminLessonFileList
