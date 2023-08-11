import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import globalCss from './styles/global.css'
import Icon from './components/Icon'

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{
		rel: 'stylesheet',
		href: globalCss,
	},
]

export default function App() {
	return (
		<html lang="en" dir="ltr">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<header className="header">
					<nav className="nav">
						<div className="logo">
							<NavLink to="blog" className="logo-icon" tabIndex={-1}>
								<Icon name="cookie" />
							</NavLink>
							<NavLink
								to="blog"
								className={({ isActive }) => {
									return isActive
										? 'nav__link logo-text active'
										: 'logo-text nav__link'
								}}
							>
								Petar's blog
							</NavLink>{' '}
						</div>
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
				<hr className="hr" />
				<Outlet />
				<hr className="hr" />
				<footer className="footer">footer</footer>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
