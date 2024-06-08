import { request } from '@/utils/request'

export const fetchChat = (text) => {
  return request.post('/chat', {
    text:text
  })
}

export const postInfo = (datas) => {
  return request.post(
    '/predict',
    datas,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }
  )
}
