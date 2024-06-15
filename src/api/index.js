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

export const generate_pdf = (formdata)=>{
  return request.post('/generate_pdf', formdata, {
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'blob'
  })
}

export const searchInfo = (text) => {
  return request.post('/search',text,{
    headers:{
      "Content-Type":"application/json"
    },
  })
}

export const removeBytel = (text) => {
  return request.post('/delete_by_contact', text, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const removeBydate = (text) => {
  return request.post('/delete_by_date', text, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}