const linq = require("@altronix/linq").network;

console.log(linq.version());

linq
  .listen("tcp://*:33455")
  .tick(50)
  .events()
  .subscribe((event) => {
    console.log(event);
  });
