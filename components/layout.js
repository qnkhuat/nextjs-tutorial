import styles from "../styles/layout.module.scss"
import Head from 'next/head'
import Link from 'next/link'

// TODO : move these info to a yaml
export const siteName= 'Ngoc Q. Khuat'
export const siteDescription = "👋, I'm an Earther. What do you think about Solar Energy?" // If change this, change in pages/index.js too
export const siteTitle = "An ordinary Homo Sapiens's blog"
export const displayPages = [
	{
		"name":"blog",
		"url": "/blog"
	},
	{
		"name":"about",
		"url":"/about"
	},
	{
		"name":"my life",
		"url":"/timeline"
	},
	{
		"name":"contact",
		"url":"/contact"
	}
]

export default function Layout({ children, home }) {
	return (
		<div className="container px-4 sm:px-0">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta
					name="description" content={siteDescription}
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header>
				{home ? (
					<>
					</>
				):(
					<>
						<div id="navbar" className="flex justify-between mt-2">
							<div>
								<Link href="/">
									<a className={`${styles.h_site} ${styles.font_rokkitt} 
										text-black hover:no-underline font-bold
										hover:text-green-500
										`}
									>Ngoc<br></br>Khuat</a>
								</Link>
							</div>
							<div>
								<ul className='list-none text-right m-0 '>
									{displayPages.map(({ name, url }) => (
										<li className={`${styles.font_rokkitt} ${styles.li_site}`} key={name}>
											<Link href={url}>
												<a className="text-black hover:no-underline hover:text-green-500 font-bold">{name}</a>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</>
				)}
			</header>
			<main>{children}</main>
		</div>
	)
}
