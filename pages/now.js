import fs from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Profile from '../components/profile'
import {siteName, siteDescription, siteTitle, displayPages} from "../components/constants"

export default function Home() {
  return (
    <Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div id='homepage' className="center w-4/5">
				<Profile></Profile>
				<div id='now'> 
					
				</div>
			</div>
    </Layout>
  )
}
