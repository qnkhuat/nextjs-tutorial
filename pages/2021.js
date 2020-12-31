import Layout from "../components/layout"
import Head from 'next/head'
export default function Error() {
	return (
		<Layout>
			<Head>
				<title>2021 in Conway game of life</title>
				<meta name="og:title" content="2021 in Conway game of life" />
				<meta name="description" content="https://github.com/qnkhuat/lifeterm"/>
			</Head>

			<h2 className='text-center m-0'>Wanna see how is 2021 like in <a href="http://conwaylife.com">Conway</a> game of life?</h2>	
			<div className="iframe-wrapper">
				<iframe className='iframe' src="https://www.youtube.com/embed/kT_zufFcNt8?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
				<style jsx>{`
				.iframe-wrapper{
					position:relative;
					padding-top:56.25%;
				}
				.iframe{
					position:absolute;
					top:0;
					left:0;
					width:100%;
					height:100%;
				}
				`}
				</style>
			</div>
			<h4 className="text-center m-0">Is the app cool? Check out my repo <a href="https://github.com/qnkhuat/lifeterm">here</a></h4>
		</Layout>
	)
}

