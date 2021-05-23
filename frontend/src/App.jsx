import React from 'react'
import  { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import axios from 'axios'

export default function App() {
  // 追加する
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus("ログイン中")
    setUser(data.user)
  }

  const handleLogout = () => {
    setLoggedInStatus("未ログイン")
    setUser({})
  }

  useEffect(() => {
    checkLoginStatus()
  })

  const checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })

      .then(response => {
        if (response.data.logged_in && loggedInStatus === "未ログイン") {
      setLoggedInStatus("ログイン中")
      setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === "ログイン中") {
          setLoggedInStatus("未ログイン")
          setUser({})
        }
      })
      .catch (error => {
        console.log("ログインエラー", error)
    })
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route
            exact path={"/"}
            render={props => (
              <Home {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />

          <Route
            exact path={"/"}
            render={props => (
              <Dashboard { ...props } loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}