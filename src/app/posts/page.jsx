import React from 'react'

export default async function page() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

  return (
    <div>
        <h1>All posts : {posts.length}</h1>
    </div>
  )
}
