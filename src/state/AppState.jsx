class AppState {
  toggle = () => {
    fetch('/api/toggle').then(response => response.json())
    .then((response) => {
      console.log(response);
    });
  }
}

export default AppState;
