var objectFCM = require('./objectFCM')



// Cài đặt các config trong objectFCM
  function fcmConfig(getobject){
    if(getobject=="address"){ // Nếu truyền vào thanh address
       data={
         to:objectFCM['address']['to'], // ráng cho giá trị data = to và collapse_key ,, bỏ qua thẻ lớn address
         collapse_key:objectFCM['address']['collapse_key']
       }
    }else{
       data = objectFCM[getobject]; // ráng giá trị data = object trong thẻ
    }
    return data; // trả về giá trị data ==> fcmConfig là hàm trả về object
  };

a = fcmConfig('data');
//console.log(a)


module.exports = fcmConfig;
