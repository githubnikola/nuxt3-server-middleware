
export default eventHandler(async (event) => {
  const reqUrl = getRequestURL(event)
  console.log("SERVER MIDDLEWARE - PATHNAME", reqUrl.pathname)

  const cookie = getCookie(event, 'test')
  if (!cookie) {
    console.log("SERVER MIDDLEWARE - NO COOKIE")
    setCookie(event, 'test', 123)
  }
})
