import { isLogin } from 'govey/src/libs/auth'

// export default function ({ route, from, store, redirect }) {

// }

export default function ({ app, route, redirect }) {
  const initPath = app.router.history.current.path
  console.log('initPath: ', initPath)
  console.log('isLogin: ', isLogin())
  console.log('route: ', route.name)
  a(route.name, app.router, redirect)

  app.router.beforeResolve((to, from, next) => {
    if (a(to.name, route, redirect)) {
      next?.()
    }
  })
}

function a (name, router, redirect) {
  const authpages = [
    'mypage'
  ]
  const unauthpages = [
    'login'
  ]

  // NOTE: 비로그인 상태인데 로그인 페이지에 접근한다면?
  if (!isLogin() && authpages.includes(name)) {
    console.log('!!!!!!!')
    redirect('/login/')
    return false
  }

  // NOTE: 로그인 상태인데 비로그인 페이지에 접근한다면?
  if (isLogin() && unauthpages.includes(name)) {
    console.log('22222222')
    redirect('/mypage/')
    // app.router.replace('/mypage')
    return false
  }

  // if (app.store.getters.isLoggedIn) {
  //   next('/resource')
  // } else {
  //   next()
  // }

  return true
}
