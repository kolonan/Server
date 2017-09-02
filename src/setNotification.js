/*Hàm truyền vào thông số dạng String, và trả về object notification với
body được thay đổi bởi thông số truyền vào*/

function setNotification(body){
  var notification={
    title: 'Caution',
    ticker: "!!!!!!!!!",
    largeIcon: "ic_launcher",
    body,
    sound: src="mymp3.mp3",
    color: "green",
    lights: true,
  };
  return notification;
}

module.exports = setNotification;
