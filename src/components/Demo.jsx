import React from 'react'
import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  // State

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })
  const [allArticles, setAllArticles] = useState([])
  const [copied, setCopied] = useState("")

  // Fetch article summary

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  // Load articles from local storage

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('articles'))

    if (articles) {
      setAllArticles(articles)
    }
  }, []);

  // Handle form submission

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { data } = await getSummary({ articleUrl: article.url })

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }

      const updatedArticles = [newArticle, ...allArticles]

      setArticle(newArticle)
      setAllArticles(updatedArticles)

      localStorage.setItem('articles', JSON.stringify(updatedArticles))
      console.log(newArticle)
    };
  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(false), 3000)
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
            className='submit_btn'>Enter</button>
        </form>

        {/* browse url history */}

        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img src={copied == item.url ? tick : copy} alt='copy_icon' className='w-[40%] h-[40%] object-contain' />
              </div>

              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>{article.url}</p>

            </div>
          ))}
        </div>
      </div>

      {/* result */}

      <div className='mt-8 w-full flex flex-col gap-4'>

        {isFetching && (
          <div className='flex justify-center items-center gap-2'>
            <img src={loader} alt='loader' className='w-8' />
            <p className='text-blue-700 font-medium'>Summarizing...</p>
          </div>
        )}

        {error && (
          <p className='text-red-500 font-medium'>{error.data.message}</p>
        )}

        {article.summary && (
          <div className='result_card'>
            <div className='copy_btn'>
              <img src={copy} alt='copy' className='w-[40%] h-[40%] object-contain' />
            </div>

            <p className='font-satoshi text-blue-700 font-medium text-sm truncate'>{article.url}</p>

            <p className='font-inter text-gray-800 text-sm'>{article.summary}</p>
          </div>
        )}
      </div>

    </section>
  )
}

export default Demo