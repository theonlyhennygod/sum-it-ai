import React from 'react'
import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { data } = await getSummary({ articleUrl: article.url })

    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary }
    };

    setArticle(newArticle)

    console.log(newArticle)
  }



  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* search */}
      <div className='flex flex-col w-full gap-4'>
        <form
          onSubmit={handleSubmit}
          className='relative flex justify-center items-center'>
          <img
            src={linkIcon}
            alt='link'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Enter a URL...'
            value={article.url}
            onChange={(event) => setArticle({ ...article, url: event.target.value })} 
            required
            className='url_input peer'
          />

          <button
            type='submit'
            className='submit_btn'>Summarize</button>
        </form>

        {/* browse url history */}

      </div>

      {/* result */}

    </section>
  )
}

export default Demo