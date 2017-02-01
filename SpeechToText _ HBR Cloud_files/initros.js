var ros;

var robot = {
  master : null,
  name : null,
  ip : null
};

function start_ros(master, name, ip) {
  robot.master = master;
  robot.name = name;
  robot.ip = ip

  console.log(robot);
  ros = new ROSLIB.Ros({
    url : 'ws://'+ robot.master +':9090'
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
    $("#roscore-alert").show();
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });
}

function ros_error() {
  alert("ROS non trovato");
}
