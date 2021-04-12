const remoteURL = "http://localhost:5002"

const getAllCustomers = () => {
    return fetch (`${remoteURL}/customers`)
    .then (res => res.json())
}