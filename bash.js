var command = require("./commands");
//console.log(process);
//console.log(Object.keys(process));
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  var dataArr = data.toString().trim().split(" "); // remove the newline
  var cmd = dataArr[0];
  var arg =  dataArr.slice(1).join(" ");
  command[cmd](arg);

  //process.stdout.write('\nprompt > ');

});
