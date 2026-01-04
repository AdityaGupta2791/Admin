import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RequireAdmin = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userJson = localStorage.getItem('user')
    let user = null
    try {
      user = userJson ? JSON.parse(userJson) : null
    } catch (e) {
      user = null
    }

    if (!token || !user || user.role !== 'admin') {
      // clean up any stale auth
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/signin', { replace: true })
    }
    // else allow render
  }, [navigate])

  return children
}

export default RequireAdmin
