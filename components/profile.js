import Link from 'next/link'
import styles from "../styles/layout.module.scss"
import {siteName, siteDescription, siteTitle, displayPages} from "../components/constants"

export default function Profile() {
	return (
		<div>
			<img
				src="/images/crazy_frog.gif"
				className="w-60 rounded-2xl"
			/>

			<h1 className='mb-0 name'>{siteName}</h1>
			<h4 className="m-0">👋, I'm an <Link href="/earther">Earther</Link>. What do you think about Solar Energy?</h4>
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
	)
}
