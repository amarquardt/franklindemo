
console.log("test");

//Adobe Client Data Layer
adobeDataLayer.push({
  "event":"top of page",
  "page":{
    "name":"blog"
  }
});

adobeDataLayer.push({
  "event":"bottom of page",
  "page":{
    "type":"article"
  }
});
