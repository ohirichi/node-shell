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

const cat = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  })
}

const head = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    const headData = data.split("\n", 5).join("\n");
    process.stdout.write(headData);
  })
}

const tail = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    const tailDataArr = data.split("\n")
    const tailData = tailDataArr.slice(tailDataArr.length - 5).join("\n");
    process.stdout.write(tailData);
  })
}

const sort = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split("\n").sort().join("\n");
    process.stdout.write(data);
  })
}

const wc = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split("\n");
    process.stdout.write(data.length.toString());
    process.stdout.write("\nprompt > ");
  })
}

const uniq = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split("\n").sort();
    uniqData = [];
    for(var i = 0; i < data.length; i++){
      if(!uniqData.includes(data[i])) uniqData.push(data[i]);
    }
    process.stdout.write(uniqData.join("\n"));
  })
  // const fileArr = sort(file).split("\n");
  // fileArr.filter(line => {
  //   const currentLine = fileArr[0];
  //   const
  // })
  // const newArr = [fileArr[0]];
  // for(var i = 1; i < fileArr.length; i++){
  //   if(!newArr.contains(fileArr[i])) newArr.push(fileArr[i]);
  // }
  // process.stdout.write(newArr.join("\n"));
}

module.exports = {
  pwd,
  date,
  ls,
  echo,
  head,
  tail,
  cat, 
  sort,
  wc,
  uniq
}
