<!--

# next js
==

# 3 ways of fetching data

  # server side rendering (SSR)
  # static Site Generation (SSG)
  # Incremental static generation (ISR)

# server side render

async function Page({params}) {
  const res = await fetch('url', {
    cache: 'no-store',
  })
}

# static generation

async function Page({params}) {
  const res = await fetch('url')
}

# Incremental static generation

async function Page({params}) {
  const res = await fetch('url', {
    next: {revalidate: 10},
  })
}

============================

# static vs dynamic meta data

===========================

# to set the cookie on server-side
import {cookies } from 'next/headers'

# next js ./api/route.ts

import {NextResponse} from 'next/server'

export async function POST(req: NextRequest) {

  return NextResponse.json({
    message: '',
  },
  {status: 200}
  )
}

# code for setting http-only-cookies

cookies().set({
  name: 'auth-token',
  value: '',
  httpOnly: true,
  sameSite: 'strict',
  secure: process.env.NODE_ENV !== 'development',
  maxAge: 3600,
})

# get the cookie
const authToken = cookies().get("auth-token");

==============================================

# some tips on authentication:

# Token Refresh: Ensure you have a strategy for refreshing tokens if they expire but the user is still active.
# Error Handling: Handle cases where the JWT is invalid or missing, both on the client and server side.
# Optimistic UI: Depending on your app's needs, you might consider implementing an optimistic UI where certain actions assume the user is authenticated until proven otherwise, reducing the perception of loading times.

=============================================

# remove refresh and access token from cookies

cookies().delete('auth-refresh-token');
cookies().delete('auth-token');

==================================

# client-component navigation

  const router = useRouter();

  router.replace('/');
  router.push('/');

===================================

#

-->
