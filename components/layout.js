import Head from 'next/head'
import Link from 'next/link'

// TODO : move these info to a yaml
export const siteName= 'Ngoc Q. Khuat'
export const siteDescription = "I try my best do do goods"
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
		<div>
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
				//<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className="">
				{!home ? (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile.jpg"
									className=""
									alt={siteName}
								/>
							</a>
						</Link>
						<h2 className="">
							<Link href="/">
								<a className="">{siteName}</a>
							</Link>
						</h2>
					</>
				):(
					<>
					</>
				)}
			</header>
			<main>{children}</main>
		</div>
	)
}
