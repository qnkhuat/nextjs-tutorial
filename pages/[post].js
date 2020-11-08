import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import { formatDateStr } from "../lib/utils"
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='container'>
        <h1 className="mb-0">{postData.title}</h1>
				<p className="text-gray-500 text-sm m-0">Posted: {formatDateStr(postData.date)}</p>
				<p className="text-gray-500 text-sm m-0">Categories: {postData.categories}</p>
				<hr/>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

// This function help next.js know all the pages need to be pre-rendered at build time
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.post)
  return {
    props: {
      postData
    }
  }
}
