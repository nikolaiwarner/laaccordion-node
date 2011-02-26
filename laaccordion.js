require('ext');


function LaacordionClient() {
  var email = require('mailer');

/*
  function record(){
    
    var date = parse('now');
    var track_directory = app.settings.recordings_dir + '/' + date;
    var track_filename = app.settings.track_directory + '/' + file_name; 
  
    // make dir
    fs.mkdirSync(track_directory);
  
    // Record line-in with arecord, piped into lame, Save to FLAC first, then to mp3 
    `arecord --quiet -f cd -d #{$settings['length']}  -t wav | flac --best -T 'TITLE=#{addslashes($settings['tag']['title'])}' -T 'ARTIST=#{addslashes($settings['tag']['artist'])}' -T 'ALBUM=#{addslashes($settings['tag']['album'])}' -T 'DATE=#{addslashes(date)}' -T 'COMMENT=#{addslashes($settings['tag']['comment'])}' - -o #{track_filename}.flac `
  	
  
   // Email Alert When Done
    var email_subject = "[LAA] Recording Finished";
    var email_body = "Filename: "+track_filename+" /n Length: "+(track_length / 60)+" minutes";
    send_email(email_subject, email_body);
  
    return track_filename;
  }
*/


/*
  function send_email(subject, body){
    email.send({
      host: "localhost",              
      port: "25",                     
      domain: "localhost",           
      to:  app.settings.email,
      from: app.settings.email,
      subject: subject,
      body: body,
      authentication: "login",        
      username: "dXNlcm5hbWU=",       
      password: "cGFzc3dvcmQ="        
    }, function(err, result){
      if(err){ console.log(err); }
    });
  }
*/


/*
  function sync_with_server(){
    // check in with home server to get orders
    $json = file_get_contents(HOME."server~clientid=".CLIENTID."&sync=true&clienttime=".date("H:i"));
  
    data = json_decode($json, true)
  	
    // Update the settings
    $data.each do |key|
      if ($key != $settings[key]) 
        $settings[$key] = key;
      end
    end
  	
    // Time to record?
    if $data['record'] == 'true'
      // Start Recording
      $filename = record($settings)
      // Upload
      uploadFile($filename . ".flac");
    end
  
    // Need to upload a file:
    if ($data['uploadfiles']) {
  
      $data['uploadfiles'].each_with_index do |file, index|
        upload_file $data['uploadfiles'][index]['filename']
      }
  
    }
  }
*/
  
  
/*
  function upload_file(filename){
    var file = app.settings.recordings_dir + '/' + filename;
//    response = `curl -F file=@".$file." -F clientid=".CLIENTID." -F upload=true  ".$url `
  }
*/

}