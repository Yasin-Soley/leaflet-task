import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout/index'

export default function Root() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
