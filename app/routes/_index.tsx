import { LinksFunction, type V2_MetaFunction } from '@remix-run/node'
import indexStyles from '../styles/index.css'

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: indexStyles }]
}

export const meta: V2_MetaFunction = () => {
	return [
		{ title: 'Petar Todorov | Blog' },
		{
			name: 'description',
			content:
				"Explore Petar's Blog: Dive into insightful posts on fullstack development, latest trends, and best practices. Join the journey of code and creativity!",
		},
	]
}

export default function Index() {
	return <main className="main">oaoa</main>
}
