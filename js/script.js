'use strict';

class HistoryTracker{
   listURL=[];
   constructor() {
       window.addEventListener('popstate', (event) => {
           this.listURL.push(location.href);
       })
   }
   push(url){
       history.pushState({url}, "", url);
       this.listURL.push(url);

   }
   back(){
           history.back();
}
}

const tracker = new HistoryTracker();

tracker.push("/test.html");
tracker.push("/test2.html");

console.log(tracker);