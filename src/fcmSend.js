var FCM = require('fcm-node');
var fcmConfig = require('./fcmConfig')
var objectFCM = require('./objectFCM')

var token = objectFCM.serverKey;
fcm = new FCM(token);


/* var message = {
    to:fcmConfig('address')['to'],
    collapse_key:fcmConfig('address')['collapse_key'],
    notification:fcmConfig('notification'),
    data:fcmConfig('data')
   };
*/
// hàm fcmSend trả về giá trị function, được gọi ra để thực hiện gửi thông báo qua Firebase
function fcmSend(message){
     fcm.send(message, function(err, response){
       if (err) {
           console.log("Something has gone wrong!");
       } else {
           console.log("Successfully sent with response:", response);
       }
   });
};

module.exports = fcmSend;
