// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDWLp3LJnGtIaEgti9cnfxTb7SGg41Xc-Y",
    authDomain: "kanbanfire-57296.firebaseapp.com",
    projectId: "kanbanfire-57296",
    storageBucket: "kanbanfire-57296.appspot.com",
    messagingSenderId: "351973244030",
    appId: "1:351973244030:web:5d01cf0157398c839dac2f",
    measurementId: "G-2Z594SRSMF"
  },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
