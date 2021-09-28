const nodemailer= require('nodemailer');
var Imap = require('imap'), inspect = require('util').inspect;
var mimemessage = require('mimemessage');

class Email{

    constructor(oConfig){
        this.createTransport=nodemailer. createTransport(oConfig);
        }
        enviarCorreo(oEmail,body){

            try {
                this.createTransport.sendMail(oEmail,function(error,inf){
            if(error){
                console.log('Error al enviar email');
            }else{
                console.log('Correo enviado correctamente');


var imap = new Imap({
 user: 'contacto@fixblueperu.com',
 password: '@Fixbluecorreo18',
 host: 'imap.secureserver.net',
 port: 993,
 tls: true
});

function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }

imap.connect(function(err) {
    if(err) throw err;
      imap.getBoxes(function more(err, boxes, path) {
          if (err) throw err;
          if (!path)
            path = '';
          for (var key in boxes) {
            if (boxes[key].children)
              more(undefined, boxes[key].children, path + key + boxes[key].delimiter);
            else {
              console.log('status: ' + key);
              imap.status(path + key, function(err, box) {
                console.log(key, err, box);
              });
            }
          }
      });
  });



/*
function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
  }
  imap.once('ready', function() {
    openInbox(function(err, box) {
      if (err) throw err;
      var f = imap.seq.fetch('1:3', {
        bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        struct: true
      });
      f.on('message', function(msg, seqno) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';
        msg.on('body', function(stream, info) {
          var buffer = '';
          stream.on('data', function(chunk) {
            buffer += chunk.toString('utf8');
          });
          stream.once('end', function() {
            console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
          });
        });
        msg.once('attributes', function(attrs) {
          console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function() {
          console.log(prefix + 'Finished');
        });
      });
      f.once('error', function(err) {
        console.log('Fetch error: ' + err);
      });
      f.once('end', function() {
        console.log('Done fetching all messages!');
        imap.end();
      });
    });
  });
   
  imap.once('error', function(err) {
    console.log(err);
  });
   
  imap.once('end', function() {
    console.log('Connection ended');
  });
   


  
  imap.connect();
   
openInbox(function(err, box) {
    if (err) throw err;
    var f = imap.seq.fetch(box.messages.total + ':*', { bodies: ['HEADER.FIELDS (FROM)','TEXT'] });
    f.on('message', function(msg, seqno) {
      console.log('Message #%d', seqno);
      var prefix = '(#' + seqno + ') ';
      msg.on('body', function(stream, info) {
        if (info.which === 'TEXT')
          console.log(prefix + 'Body [%s] found, %d total bytes', inspect(info.which), info.size);
        var buffer = '', count = 0;
        stream.on('data', function(chunk) {
          count += chunk.length;
          buffer += chunk.toString('utf8');
          if (info.which === 'TEXT')
            console.log(prefix + 'Body [%s] (%d/%d)', inspect(info.which), count, info.size);
        });
        stream.once('end', function() {
          if (info.which !== 'TEXT')
            console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
          else
            console.log(prefix + 'Body [%s] Finished', inspect(info.which));
        });
      });
      msg.once('attributes', function(attrs) {
        console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
      });
      msg.once('end', function() {
        console.log(prefix + 'Finished');
      });
    });
    f.once('error', function(err) {
      console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
      console.log('Done fetching all messages!');
      imap.end();
    });
  });
  
var fs = require('fs'), fileStream;
 
openInbox(function(err, box) {
  if (err) throw err;
  imap.search([ 'UNSEEN', ['SINCE', 'May 20, 2010'] ], function(err, results) {
    if (err) throw err;
    var f = imap.fetch(results, { bodies: '' });
    f.on('message', function(msg, seqno) {
      console.log('Message #%d', seqno);
      var prefix = '(#' + seqno + ') ';
      msg.on('body', function(stream, info) {
        console.log(prefix + 'Body');
        stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
      });
      msg.once('attributes', function(attrs) {
        console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
      });
      msg.once('end', function() {
        console.log(prefix + 'Finished');
      });
    });
    f.once('error', function(err) {
      console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
      console.log('Done fetching all messages!');
      imap.end();
    });
  });
});
*/
/*
config.accounts.forEach(

    function(account) {
        console.log('1');
      var imap = new Imap(account);
      console.log('2');
      imap.once('ready', function() {
        console.log('3');
        imap.openBox('Sent', false, function(err, box) {
            console.log('4');
          if (err) throw err;
          fs.readFile(filename, 'utf8', function(err, data) { // file read is the source of deleted mail
            if (err) throw err;
            console.log('5');
            imap.append(data, {mailbox: 'Sent', flags: ['Seen'], date: new Date(Date.now())}, function(err) {
              if (err) throw err;

            });
          });
        });
        console.log('end');
        imap.end();
      });
      console.log('connect');
      imap.connect();
    }
  );
*/

/*
imap.once('ready', function () {
 imap.openBox('Sent', false, (err, box) => {
    
   if (err) throw err;
   let msg, htmlEntity, plainEntity;
   msg = mimemessage.factory({
     contentType: 'multipart/alternate',
     body: []
   });
   console.log('2');
   htmlEntity = mimemessage.factory({
     contentType: 'text/html;charset=utf-8',
     body: data.body
   });
   console.log('3');
   plainEntity = mimemessage.factory({
     body: data.body
   });
   console.log('4');
   msg.header('Message-ID', inf.messageId);
   msg.header('To','fixblueperu@gmail.com');
   msg.header('Subject', 'FIXBLUE ATENCIÓN AL CLIENTE');
   msg.body.push(htmlEntity);
   msg.body.push(plainEntity);
   console.log('5');
   imap.append(msg.toString());
   if (err){
console.log(err);
throw err;
   }  
   imap.end();
 })
 
   
});
        */
      console.log(inf.messageId);
            }
            this.createTransport.close();
                });
        } catch (err) { 
            console.log("Email.enviarCorreo --Error " + err );
}}}

module.exports=Email;