import {Routes,Route,Navigate,useLocation} from 'react-router-dom'

export const AppRoutes = () => {
    const location = useLocation()
  return (
    <>
        <Routes location={location} key={location.pathname}>
            <Route path='/login' />
            <Route path='/login' />
            <Route path='/*' element={<Navigate to="/login"/>}/>
        </Routes>
    </>
  )
}
