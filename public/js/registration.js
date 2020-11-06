const formRegistation = document.querySelector('#registration')

if(formRegistation){
const registration = async (e) => {
  e.preventDefault()
  const userSurname = e.target.userSurname.value
  const userName = e.target.userName.value
  const patronymic = e.target.patronymic.value
  const password = e.target.password.value
  const position = e.target.position.value
  const department = e.target.department.value
  const dateStartWork = e.target.dateStartWork.value
  const id = e.target._id.value
  
  const body = JSON.stringify({
    userSurname, userName, patronymic, password,  position, department, dateStartWork, id
  })
  const {method, action} = e.target

  console.log(body);

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
  alert(result.message)
} 
}

formRegistation.addEventListener('submit', registration)

}
