class AppState {
  toggle = () => {
    fetch('/api/toggle').then(response => response.json())
    .then((response) => {
      if (!response.success) {
        console.log(response);
      }
    });
  }
}

export default AppState;
