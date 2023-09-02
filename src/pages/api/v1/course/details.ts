// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CourseController } from '~/controllers/CourseController'
import { db } from '~/database'

const dotenv = require('dotenv')

dotenv.config()

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const course = await CourseController.view(req.query.id)

  course.image = `/uploads/${course.image}`
  res.status(200).json(course)
}
