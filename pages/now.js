import Layout from "../components/layout"
import Head from 'next/head'
export default function Error() {
	return (
		<Layout>
			<Head>
				<title>Now</title>
				<meta name="og:title" content="What am I doing?" />
				<meta name="description" content="What am I doing?"/>
			</Head>
			
			<div id="now"> 
		   	<h4>Last Update: Mar 4th 2021</h4>
				<h1 className="mb-0">In general</h1>
				<p>I'm lost.</p>
				<p>And I love it, I believe the expense of finding the right path is choosing some wrong ones along the way</p>
				<h1 className="mb-0">Career</h1>
				<p>Unemployed</p>
				<p>I'm in the process of finding my next journey, it could be :</p>
				<ul>
					<li>An idea I'll be dead if I'm not going to work on</li>
					<li>A company that I admired ( Tesla ) </li>
					<li>Pursuing a Master Degree in Physics</li>
				</ul>
				<h1 className="mb-0">Location</h1>
				<p>Going to reallocate to Ho Chi Minh City, Viet Nam (April 2021)
						with my friends</p>
				<h1 className="mb-0">Learning</h1>
				<ul>
						<li>Chess</li>
						<li>Physics</li>
						<li>Go</li>
				</ul>
				<h1 className="mb-0">Working on</h1>
				<p><a href="https://github.com/qnkhuat/chessterm">Chessterm</a> - Playground for chess but on terminal (currently private)</p>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
		</div>

			

		</Layout>
	)
}

