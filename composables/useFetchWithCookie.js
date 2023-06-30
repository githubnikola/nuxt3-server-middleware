import { appendResponseHeader } from 'h3'

export const useFetchWithCookie = async (event, url) => {
  const res = await $fetch.raw(url)
  const cookies = (res.headers.get('test') || '').split(',')
  for (const cookie of cookies) {
    appendResponseHeader(event, 'test', cookie)
  }
  return res._data
}
