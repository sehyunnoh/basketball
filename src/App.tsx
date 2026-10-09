import { RouterProvider, createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Browse } from './pages/Browse'
import { Category } from './pages/Category'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Search } from './pages/Search'
import { SkillDetail } from './pages/SkillDetail'

/**
 * Real paths so every skill and category is its own crawlable URL. GitHub
 * Pages has no server-side rewrite, so vite-prerender.ts writes a static
 * index.html per route at build time (and a 404.html for the rest).
 */
const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'browse', element: <Browse /> },
      { path: 'category/:categoryId', element: <Category /> },
      { path: 'skill/:skillId', element: <SkillDetail /> },
      { path: 'search', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') },
)

export default function App() {
  return <RouterProvider router={router} />
}
