import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDg3EiO38EAONH5V85C6tR7dacTSSIkJRU",
      authDomain: "angular-demo-bc4a1.firebaseapp.com",
      databaseURL: "https://angular-demo-bc4a1.firebaseio.com",
      projectId: "angular-demo-bc4a1",
      storageBucket: "angular-demo-bc4a1.appspot.com",
      messagingSenderId: "630234017743",
      appId: "1:630234017743:web:7ddcd09bda1ddb4295acba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
