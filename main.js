import axios from 'axios';

// Function mendapatkan data dengan FETCH
async function getUserData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();
  console.info(data);
  let user_tbody = document.getElementById('user_tbody');

  data.forEach((e) => {
    user_tbody.innerHTML += `
    <tr>
      <td> ${e.id} </td>
      <td> ${e.username} </td>
      <td> ${e.email} </td>
      <td> ${e.address.city} </td>
      <td>
        <button>Detail</button>
      </td>
    </tr>
    `;
  });
}

// getUserData();

// Function get data dengan AXIOS
async function getUserData2() {
  console.info('Fetching dengan menggunakan AXIOS');

  let res = await axios.get('https://jsonplaceholder.typicode.com/users');
  let { data } = await res;
  console.info(data);

  data.forEach((e) => {
    user_tbody.innerHTML += `
    <tr>
      <td> ${e.id} </td>
      <td> ${e.username} </td>
      <td> ${e.email} </td>
      <td> ${e.address.city} </td>
      <td>
        <button onclick="handleDetail(${e.id})">Detail</button>
      </td>
    </tr>
    `;
  });
}

getUserData2();

// window.handleDetail = function (id) {
//   axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//     let data = res.data;
//     alert(`
//       username: ${data.username}
//       email: ${data.email}
//       city: ${data.address.city}
//       `);
//   });
// };

window.handleDetail = async function (id) {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  let data = await res.data;
  alert(`
Username  : ${data.username}
Email     : ${data.email}
Address   : ${data.address.city}
  `);
};
