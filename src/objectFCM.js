var setNotification = require('./setNotification')

var objectFCM={
      serverKey:"AAAA0Y_q0Ks:APA91bFMKaocFPCD4V_U7vOmb-E5UiMuoTb9XqKP11w-7WPwasqXqEKt1_pr4WkcBVDgSfPL78Y3ucZV5TD_4gV0k5GeC69nFUcSSkWs9yIuNmheJHmDNFF6Hxvho7cylQG1RKmHDUq3",

      address:{
      to:'dvfZlBSO70A:APA91bGdp6aSTQe35H0n_rYldXFNr9osm_OUtUkwpJU2cJteYdiGV3ddSfUT6cdW1cbYECpLmcvFYpDNiEudT47WplbOIwohye-wix3HZox4YomvdI33gqLM0SrdnXTkGa7aqHixjnVl',
      collapse_key: 'Update available',
    },

        notification:setNotification("Your child is at risk"),


      data: {
          my_key: 'my value',
          my_another_key: 'my another value'
      },
    }

module.exports=objectFCM
