//install
self.addEventListener('install',evt=>{
    console.log('service worker installed');
    console.log("ready to activate");
});

//listening activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
  });