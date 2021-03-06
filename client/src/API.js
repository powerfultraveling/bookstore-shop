//Auth Api
import { getAuthLocal } from "./utils";

const baseURL = "http://localhost:3001/api";

export function logIn(email, password) {
  console.log("im login");
  return fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => res.json());
}

export function register(firstname, lastname, email, password) {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: "user",
    }),
  }).then((res) => res.json());
}

export function googleAuth(firstname, lastname, email) {
  console.log("here am i !");
  return fetch(`${baseURL}/google/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      role: "user",
    }),
  }).then((res) => {
    return res.json();
  });
}

export function getMe(token) {
  console.log(token);
  if (!token) {
    return;
  }
  return fetch(`${baseURL}/authorize`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => {
      return err.toString();
    });
}




//Products Api
export function getProducts() {
  return fetch(`${baseURL}/product`).then((res) => {
    return res.json();
  });
}

export function getSingleProduct(id) {
  return fetch(`${baseURL}/product/${id}`).then((res) => {
    console.log("Hallo");
    return res.json();
  });
}

export function getAllStationaries(){
  return fetch(`${baseURL}/stationaries`).then((res) => {
    return res.json();
  })
}

export function getAllBooks(){
  return fetch(`${baseURL}/books`).then((res)=>{
    return res.json()
  })
}



//Carts API
export function addItemToCart(userId, productId){
  return fetch(`${baseURL}/cart`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });
}

export function getCartItem(id){
  return fetch(`${baseURL}/cart/${id}`).then((res) => {
    return res.json();
  })
}
