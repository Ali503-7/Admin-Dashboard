const url = "https://api.escuelajs.co/api/v1/users";

function Users() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => data);
}

export default Users;
