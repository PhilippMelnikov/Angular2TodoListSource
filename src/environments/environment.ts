// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBO4wNRGPbIGyF7ZGOTuxZ_Oc1U-TS54l0",
    authDomain: "todo-list-6c51d.firebaseapp.com",
    databaseURL: "https://todo-list-6c51d.firebaseio.com",
    projectId: "todo-list-6c51d",
    storageBucket: "todo-list-6c51d.appspot.com",
    messagingSenderId: "65666024603"
  }
};
