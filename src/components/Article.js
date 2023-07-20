import React from 'react'

const Article = function ({title, date = "January 1, 1970", preview, key}) {
  return (
    <article key={key} >
      <h3> {title} </h3>
      <small> {date} </small>
      <p> {preview} </p>
    </article>
  )
}

export default Article
