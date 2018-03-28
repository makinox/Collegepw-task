// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCqIevmIglQjm3ZPW4XgJ5lbs7frjS_3hM",
    authDomain: "collegepw-task.firebaseapp.com",
    databaseURL: "https://collegepw-task.firebaseio.com",
    projectId: "collegepw-task",
    storageBucket: "collegepw-task.appspot.com",
    messagingSenderId: "551254640439"
  }
};
