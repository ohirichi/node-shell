const fs = require("fs");

const pwd =file=> process.stdout.write(process.cwd());


const date =file=>{
  var dateString = new Date().toString();
  process.stdout.write(dateString);
}

const ls =file=>{
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
  process.stdout.write("prompt > ");
  });
}

const echo = arg => {
process.stdout.write(arg);
}

const cat = file =>{
  
}


module.exports = {
  pwd,
  date,
  ls,
  echo,
  head,
  tail,
  cat
}
