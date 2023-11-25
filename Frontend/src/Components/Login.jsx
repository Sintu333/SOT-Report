import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './main.css'
import toast from 'react-hot-toast'
import { UserContext } from './UserContext'

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Dean')
  const { setUser } = useContext(UserContext)

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = () => {
  //   axios.get("http://localhost:3000/Admindetail").then((res) => {});
  // };

  const handleLogin = async (e) => {
    e.preventDefault()

    if (username === '' || password === '') {
      toast.error('All fields are required !')
      return
    }

    try {
      const response = await axios.post('http://192.168.1.20:3000/api/login', {
        username: username,
        password: password,
        role: role,
      })

      const { user, token } = response.data
      console.log(user)

      // Store token and role in local storage or context as needed
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      setUser(user)

      // Redirect based on role
      if (user.role === 'Dean') {
        navigate('/dashadmin')
      } else if (user.role === 'HOD') {
        navigate('/dashhod')
      } else if (user.role === 'Faculty') {
        navigate('/dashfaculty')
      }
      toast.success('Login Successful')
    } catch (error) {
      console.log('Login Error', error.response.data.message)
      toast.error('Invalid Credentials')
    }
  }

  return (
    <>
      <div className='main'>
        <div className='navbar'>
          <div className='icon'>
            <img className='logo' src='NEHU_logo.png' alt='nehu logo' />
          </div>

          <div className='menu'>
            <ul>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='#'>ABOUT</Link>
              </li>
              <li>
                <Link to='#'>NEWS</Link>
              </li>
              <li>
                <Link to='#'>ACADEMICS</Link>
              </li>
              <li>
                <Link to='#'>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='content'>
          <h1>
            School of <br />
            Technology <br />
            <span>Annual Report</span>
          </h1>
          <p className='par'>
            The Department is currently offering B.Tech., M.Tech. and Ph.D.
            degree
            <br />
            in IT, ECE, ENE, BME, ARCH and NANO. The core part of the curriculum
            <br />
            embodies scientific and engineering knowledge basic to the
            profession.
          </p>
          <br />
          {/* <Link to="/registeradmin">
            <button className="btnn">Sign Up</button>
          </Link> */}

          <div className='form'>
            <h2>Login Here</h2>
            <input
              type='username'
              name='username'
              placeholder='Enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              name='pass'
              placeholder='Enter Password Here'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <br />

            <label>Login As : </label>

            <select
              name='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value='admin'>Dean</option>
              <option value='HOD'>HOD</option>
              <option value='Faculty'>Faculty</option>
            </select>
            <button className='btnn' onClick={handleLogin}>
              Login
            </button>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
