export function setAuthLocal(token) {
  window.localStorage.setItem("token", token);
}

export function getAuthLocal() {
  return window.localStorage.getItem("token");
}

export function clearAuthLocal() {
  window.localStorage.removeItem("token");
}

export function saveUser(user) {
  window.localStorage.setItem("user", user);
}

export function getUser() {
  const data = window.localStorage.getItem("user");
  const user = JSON.parse(data);
  return user;
}

export function setCartLocal(cart) {
  window.localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartLocal() {
  return window.localStorage.getItem("cart");
}
