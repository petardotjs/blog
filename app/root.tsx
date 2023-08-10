import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import {
	Link,
	Links,
	LiveReload,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import globalCss from './styles/global.css'

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{
		rel: 'stylesheet',
		href: globalCss,
	},
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<header className="header">
					Logo
					<nav className="nav">
						<NavLink
							to="."
							className={({ isActive }) => {
								return isActive ? 'nav__link active' : 'nav__link'
							}}
						>
							Blog
						</NavLink>
						<NavLink
							to="about"
							className={({ isActive }) => {
								return isActive ? 'nav__link active' : 'nav__link'
							}}
						>
							About
						</NavLink>
					</nav>
					Theme switcher
				</header>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
