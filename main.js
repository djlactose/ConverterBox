const wserver=require('http');
const IncomingForm = require('formidable');
const fs=require('fs');
const converter=require('./converter');

wserver.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/mnt/in/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File "' + files.filetoupload.name  + '" uploaded and moved!');
        res.end();
      });
      //convert.convert(newpath,newpath + fields.filetype);
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload">');
    res.write('<select name="filetype" required="true">');
    res.write('<option value=".wav">Wav</option>');
    res.write('<option value=".mp3">MP3</option>');
    res.write('</select>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(80);
converter.convert("test","test2");
