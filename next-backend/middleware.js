export async function middleware(req) {
  // validate the user is authenticated
  // const verifiedToken = await verifyAuth(req).catch((err) => {
  //   console.error(err.message)
  // })

  // // redirect if the token is invalid
  // if (!verifiedToken) {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

}
export const config = {
  matcher: ['/Home'],
}