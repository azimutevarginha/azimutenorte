import { useAuth } from '../hooks/authHook'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const [isAuth, setIsAuth] = useState(true);
  const { loadUserStorageData } = useAuth()

  useEffect(() => {
    async function fetchData() {
      const verifyAuth = await loadUserStorageData()
      setIsAuth(verifyAuth)
    }
    fetchData()
  }, [loadUserStorageData])

  return (
    <>
      {isAuth ? (
        <Outlet />
      ) : (
        <Navigate to='/login' replace={true} />
      )}
    </>
  )
}