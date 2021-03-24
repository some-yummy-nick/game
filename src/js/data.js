export function data() {
  const table = document.getElementById('js-table')
  const fragment = document.getElementById('js-table-row')

  async function getData() {
    const response = await fetch('data.json')
    return await response.json()
  }

  async function setData() {
    const data = await getData()
    const rating = data.rating
    const friends = data.friends
    const sortableRating = rating.sort((a, b) => b.points - a.points)

    sortableRating.forEach(user => {
      const row = document.importNode(fragment.content, true)
      const name = row.querySelector('.js-name')
      row.querySelector('.js-id').textContent = user.id
      name.textContent = user.name
      row.querySelector('.js-points').textContent = user.points
      friends.find(friend => {
        if (friend.id === user.id) {
          name.classList.add('friend')
        }
      })
      table.appendChild(row)
    })
  }

  setData()
}
