const check = document.getElementsByClassName('check')

function valid(box) {
  if (box.checked) {
    console.log('Cheeeeck')
  } else {
    console.log('Nooo!')
  }
}

for (let box of check) {
  box.addEventListener('change', async (e) => {
    console.log(e.target.checked);
    console.log(e.target);
    // valid(box)
    const statusChecked = e.target.checked
    const id = e.target.id

  const response = await fetch('/', {
    id,
    statusChecked,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({statusChecked, id})
  })
  const result = await response.json()

  })
}
