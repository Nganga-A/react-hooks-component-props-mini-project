import React from 'react'
import Article from './Article'

const ArticleList = function({posts}) {
  console.log(posts)
  const articlesArr = posts.map(article => 
    <Article
    key={article.id}
    title={article.title}
    date={article.date}
    minutes={article.minutes}
    preview={article.preview}
    ></Article>)
  return (
    <main> 
        {articlesArr}
    </main>
  )
}

export default ArticleList