import _ from "lodash"
import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteName, siteDescription, siteTitle, displayPages } from '../../components/layout'
import { getSortedPostsData  } from '../../lib/posts'
import { formatDateStr} from "../../lib/utils"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



export default function Posts({ allPostsData }) {
  return (
    <Layout>
			<Head>
				<title>{siteTitle}</title>
      </Head>

			<div>
				{Object.keys(allPostsData).map((cat, i) => {
					return (
						<>
							<h3 className='capitalize'>{cat}</h3>
							<ul>
								{allPostsData[cat].map(({ id, title, categories, date}) => (
									<li className="list-none" key={id}>
										<div className="flex-row sm:flex">
											<div className="tabular-nums 
												w-full text-xs text-gray-600
												sm:w-32 sm:text-base
												">
												{formatDateStr(date)}
											</div>
											<div>
												<Link href={`/p/${id}`}>
													<a className="capitalize">{title}</a>
												</Link>
											</div>
										</div>
									</li>
								))}
							</ul>
						</>
					)
				})}
			</div>
		</Layout>
	)
}
