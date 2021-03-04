import styles from "../styles/layout.module.scss"
import {siteName, siteDescription, siteTitle, displayPages} from "../components/constants"
import Head from 'next/head'
import Link from 'next/link'

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
