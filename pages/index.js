import Head from 'next/head'
import Link from 'next/link'
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
						className="w-40 rounded-2xl"
					/>
					<h1>{siteName}</h1>
					<h3>{siteDescription}</h3>
					<div id="urls" className="mt-3">
						<ul className="ul-arrow">
							{displayPages.map(({ name, url }) => (
								<li className="" key={name}>
									<Link href={url}>
										<a className="text-green-500">{name}</a>
									</Link>
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
