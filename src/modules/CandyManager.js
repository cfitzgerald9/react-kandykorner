const remoteURL = "http://localhost:5002"

export default {
  getOne(id) {
    return fetch(`${remoteURL}/candies/${id}`)
    .then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/candies`)
    .then(e => e.json())
  },
  post(newCandy) {
    return fetch(`${remoteURL}/candies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCandy)
    }).then(data => data.json())
  }
}