import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteName, siteDescription, displayPages } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
			<div id='homepage' className="flex items-center h-full absolute">
				<div id='profile' className="flex-col">
					<img
						src="/images/profile.jpg"
						className="w-40 rounded-2xl"
					/>
					<h1 className='mb-0'>{siteName}</h1>
					<h4 className="m-0">{siteDescription}</h4>
					<div id="urls" className="mt-3">
						<ul className="ul-arrow">
							{displayPages.map(({ name, url }) => (
								<li className="" key={name}>
									<Link href={url}>
										<a>{name}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
    </Layout>
  )
}
