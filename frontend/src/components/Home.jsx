import axios from 'axios'
import React from 'react'
import Login from './auth/Login'
import Registration from './auth/Registration'



export default function Home(props) {

    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }

    //handleLogoutClickイベントハンドラ
    const handleLogoutClick = () => {
        axios.delete("https://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                props.handleLogout()
            }).catch(error => console.log("ログアウトエラー",error))
    }

    return (
        <div>
            <h1>Home</h1>

            {/* 追加する */}
            <h2>ログイン状態: {props.loggedInStatus}</h2>

            <button onClick={handleLogoutClick}>ログアウト</button>

            <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
        </div>
    )
}