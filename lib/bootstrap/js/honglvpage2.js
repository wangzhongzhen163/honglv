/**
 * Created by ASUS on 2016/11/7.
 */

function setPage2(t){
    $.ajax({
        url:'https://czdm.ittun.com/api/gettopics',
        success: function (result) {
            var html=template('item',{'result':result})
            t.html(html)

        }
    })
}
setPage2($(".main"))