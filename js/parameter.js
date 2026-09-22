function getParameter(key) {
  const params = new URLSearchParams(location.search);
  return params.get(key);
}
