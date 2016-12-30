/**
 * Created by ASUS on 2016/10/31.
 */
//ÂÖ²¥Í¼µÄ¶¯Ì¬Ìí¼Ó
function piccontrol(t){
    $.ajax({
        url:'https://czdm.ittun.com/api/getlunbo',
        success: function (result) {
            var html=template('piccontrol',{'result':result})
            t.html(html);
            var ind=template("ind",{"result":result});
            $(".carousel-indicators").html(ind);
        }
    })
}
//ÂÖ²¥Í¼»¬¶¯
piccontrol($(".carousel-inner"));
var imgBox=$(".carousel-inner");
var startX=0,moveX=0,endX=0;
imgBox.on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
})
imgBox.on('touchmove', function (e) {
    moveX= e.originalEvent.touches[0].clientX;
    endX=moveX-startX;

})
imgBox.on('touchend', function (e) {
    if(Math.abs(endX)>100){
      if(endX>0){
          $(".carousel").carousel('prev')
        }else{
          $(".carousel").carousel('next')
      }
      }
})

function nav(i){
    $.ajax({
        url:'https://czdm.ittun.com/api/gethometab/'+i,
        success: function (result) {
            var html=template('w-nav',{'result':result})
            $(".w-navbar").html(html)
        }
    })
}
nav(1);


function honglvpage(){
    $(".otherpage").toggleClass('on')
}
var menu=$("oterpage")
var menuli=menu.find('li')
menuli.on('click', function () {
    menu.removeClass('on')
})

window.onscroll= function () {
    var scrolltop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
    if(scrolltop>500){
      document.getElementById("totop").style.display='block'
      }else if(scrolltop<200){
        document.getElementById("totop").style.display='none'
    }
}
document.getElementById("totop").children.onclick= function () {
    this.parent.style.display='none'
}
