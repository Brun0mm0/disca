import {Routes,Route,Navigate,useLocation} from 'react-router-dom'
import { Login, Dashboard } from '../pages'

export const AppRoutes = () => {
    const location = useLocation()
  return (
    <>
        <Routes location={location} key={location.pathname}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<Navigate to="/dashboard"/>}/>
        </Routes>
    </>
  )
}
