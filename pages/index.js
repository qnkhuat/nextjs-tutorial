import Head from 'next/head'
import Layout, {siteName, siteDescription, siteTitle, displayPages } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
			<Head>
				<title>{siteTitle}</title>
      </Head>

			<div id='homepage' className="container flex items-center h-screen">
				<div id='profile' className="flex-col">
					<img
						src="/images/profile.jpg"
						className="w-40 rounded-2xl border-black border-2"
					/>
					<h1>{siteName}</h1>
					<h3>{siteDescription}</h3>
					<div id="urls" className="mt-3">
						<ul className="">
							{displayPages.map(({ name, url }) => (
								<li className="li-arrow" key={name}>
									<a href={url}>{name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>

			</div>

			<section className="hidden">
				<h2 className="">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <a href={`/posts/${id}`}>{title}</a>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


