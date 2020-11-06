const formLogin = document.querySelector('#login')

if(formLogin){
  const login = async (e) => {
    e.preventDefault()
    const userName = e.target.userName.value
    const password = e.target.password.value
    const body = JSON.stringify({
      userName, password
    })
  
    const {method, action} = e.target
      const response = await fetch(action, {
      method,
      headers: {
        'Content-Type':'application/json'
      },
      body
    })
  
    const result = await response.json()
      if (result.success) {
      window.location = 'http://localhost:5000/'
      // console.log(result.message);
    } else {
      alert(result.message)
    }
  }
  
  formLogin.addEventListener('submit', login)
}
