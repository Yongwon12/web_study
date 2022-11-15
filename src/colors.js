var links = {
    setColor:function (color) {
    //    var alist = document.querySelectorAll('a');
    //    var i = 0;
    //    while (i < alist.length) {
     //       alist[i].style.color = color;
     //       i = i + 1;
        //  }
        $('a').css('color', color);
    }
}

var body = {
    setColor:function(color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackGroundColor:function (color) {
       // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self)
{
    var target = document.querySelector('body'); <!--주야를 하나의 버튼으로 제어-->
    if (self.value === '야간') {               <!--링크가 달려있는 문자열의 색상을 배열과 반복문을 사용하여 구현-->
        self.value = '주간';
        links.setColor('powderblue');
        body.setColor('powderblue');
        body.setBackGroundColor('coral');
    } else {
        self.value = '야간';
        links.setColor('coral');
        body.setColor('coral');
        body.setBackGroundColor('white');
    }
}