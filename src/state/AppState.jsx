// import { observable } from 'mobx';
// import { rpio } from 'rpio';

// rpio.open(16, rpio.OUTPUT, rpio.LOW);

class AppState {
  // @observable trigger = false;

  // toggle = () => {
  //   this.trigger = !this.trigger;
  //   if (this.trigger) {
  //     rpio.write(16, rpio.LOW);
  //   } else {
  //     rpio.write(16, rpio.HIGH);
  //   }
  // }

  toggle = () => {
    fetch('/api/toggle').then(response => response.json())
    .then((response) => {
      console.log(response);
    });
  }
}

export default AppState;
