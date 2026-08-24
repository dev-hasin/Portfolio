import {RouterProvider} from 'react-router'
import {ContentProvider} from '../context/ContentContext'
import {router} from './routes'

export default function App() {
  return (
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  )
}
