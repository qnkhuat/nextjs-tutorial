import fs from 'fs'
import path from 'path'
import _ from "lodash"
import matter from 'gray-matter'
import remark from 'remark'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import mathjax from 'rehype-mathjax'
import stringify from 'rehype-stringify'
import raw from 'rehype-raw'



const postsDirectory = path.join(process.cwd(), 'posts')


// convert a fileName to id to use as route
function fileName2id(f) { return f.replace(".md", "") }

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
		const id = fileName2id(fileName)

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

	// group posts by categorie sand sort date descending
  const postsByCategory = _.groupBy(allPostsData.sort(
      (a,b) => {return new Date(b.date) - new Date(a.date)}
    ), "categories")
	return postsByCategory
	
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory).filter(f => f.includes(".md"))

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
				post: fileName2id(fileName)
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
  .use(remark2rehype, {allowDangerousHtml: true})
  .use(raw) // Keep any html in markdown
  .use(math) // convert $$ blog to html
  .use(mathjax) // hanle latex
  .use(stringify)
  .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
