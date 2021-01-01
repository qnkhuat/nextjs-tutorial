import Layout from "../components/layout"
import Head from 'next/head'
export default function Error() {
  return (
    <Layout>
			<Head>
				<title>Site not found!</title>
			</Head>

			<h2 className='text-center m-0'>I'm working on it</h2>	
			<h4 className="text-center m-0">Enjoy!</h4>
			<div className="iframe-wrapper">
				<iframe className='iframe'src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
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
		</Layout>
  )
}
