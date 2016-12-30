/**
 * Created by ASUS on 2016/11/7.
 */
function setPage(t){
    $.ajax({
        url:'https://czdm.ittun.com/api/getlianzai',
        success: function (result) {
            var html = template('items', {'result': result})
            t.html(html)
        }
    })
}
setPage($(".items"))

