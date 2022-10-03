import axios from 'govey/src/libs/http-client'
import { API_HOST } from 'govey/config'

function isLogin () {
  return process.client && !!localStorage.getItem('TOKEN')
}

function getToken () {
  return process.client ? localStorage.getItem('TOKEN') : ''
}

function signOut (router) {
  localStorage.setItem('TOKEN', '')
  router.replace('/')
}

function signUp (id, password, name, nickname) {
  axios.post(`${API_HOST}/users/v1/users/signup`, {
    username: id,
    password,
    name,
    nickname
  }).then((r) => {
    if (r.data.username === id) {
      login.call(this, id, password, '/')
    } else {
      alert('알 수 없는 에러가 발생했습니다.')
    }
  }).catch((e) => {
    console.error(e)
    if (e?.response?.data.message) {
      if (e?.response?.data.message === '이미 가입되어 있는 유저입니다.') {
        alert('이미 가입되어 있는 유저입니다.')
      }
    } else {
      alert('알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요.')
    }
  })
}

function login (id, password, url = '/') {
  if (!id || !password) {
    alert('로그인 정보를 입력해주세요.')
    return
  }

  axios.post(`${API_HOST}/users/v1/users/signin`, {
    username: id,
    password
  }).then((r) => {
    if (r.data.token) {
      localStorage.setItem('TOKEN', r.data.token)
      this.$router.replace(url)
    } else {
      alert('알 수 없는 에러가 발생했습니다.')
    }
  }).catch((e) => {
    console.error(e)
    alert('로그인 정보를 확인해주세요.')
  })
}

// function authMiddleware () {
//   const authpages = [
//     '/account/login',
//     '/account/register',
//     '/account/find/id',
//     '/account/find/password'
//   ]
//   const unauthpages = [
//     '/account/login',
//     '/account/register'
//   ]

//   // NOTE: 비로그인 상태인데 로그인 페이지에 접근한다면?
//   if (!isLogin() && authpages.includes(route.path)) {
//     redirect('/login')
//   }

//   // NOTE: 로그인 상태인데 비로그인 페이지에 접근한다면?
//   if (isLogin() && unauthpages.includes(route.path)) {
//     redirect('/')
//   }
// }

export { isLogin, signUp, signOut, login, getToken }
