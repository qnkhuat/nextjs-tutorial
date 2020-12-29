
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-WYLJQ23NPL"></script>
					<script dangerouslySetInnerHTML={
						{ __html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){window.dataLayer.push(arguments)}
								gtag("js", new Date());
								gtag("config", "G-WYLJQ23NPL");
						`}
						}>
					</script>
					<link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;700&family=Varela+Round&display=swap" rel="stylesheet"/>	
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument


