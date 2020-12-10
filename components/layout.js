import styles from "../styles/layout.module.scss"
import Head from 'next/head'
import Link from 'next/link'

// TODO : move these info to a yaml
export const siteName= 'Ngoc Q. Khuat'
export const siteDescription = "I try my best to be good"
export const siteTitle = "An ordinary Homo Sapiens's blog"
export const displayPages = [
	{
		"name":"Blog",
		"url": "/blog"
	},
	{
		"name":"About",
		"url":"/about"
	},
	{
		"name":"My life",
		"url":"/timeline"
	},
	{
		"name":"Contact",
		"url":"/contact"
	}
]

export default function Layout({ children, home }) {
	return (
		<div className="container px-4 sm:px-0">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description" content={siteDescription}
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
