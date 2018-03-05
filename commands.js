const fs = require("fs");
const request = require("request");

const pwd =file=> done(process.cwd());


const date =file=>{
  var dateString = new Date().toString();
  done(dateString);
}

const ls =file=>{
  var output ="";
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      output += file.toString() + "\n";
      })
      done(output);
  });
}

const echo = arg => {
  done(arg);
}

const cat = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    done(data);
  })
}

const head = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    const headData = data.split("\n", 5).join("\n");
    done(headData);
  })
}

const tail = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    const tailDataArr = data.split("\n")
    const tailData = tailDataArr.slice(tailDataArr.length - 5).join("\n");
    done(tailData);
  })
}

const sort = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split("\n").sort().join("\n");
    done(data);
  })
}

const wc = file => {
  fs.readFile("./" + file, 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split("\n");
    done(data.length.toString());

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
    done(uniqData.join("\n"));
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
const curl = website=>{
  request(website, function(error, response, body){
    if(error) throw error;

    done(body.toString());
  })
}

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
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
  uniq,
  curl
}
