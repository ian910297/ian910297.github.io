var expiration_time = new Date('2016-2-1 12:30:00');
var start_time = new Date();
var diff_time = (expiration_time - start_time)/1000;

$(function(){
  setInterval(function(){
    diff_time--;

    var d = Math.floor(diff_time/(24*3600));
    var h = Math.floor((diff_time%(24*3600))/3600);
    var m = Math.floor((diff_time%3600)/60);
    var s = Math.floor(diff_time%60);
//    console.log(d+' day '+h+' h '+m+' m '+s+' s');
    if(diff_time>0){
      lightNumber($('#day2'), Math.floor(d/100), 'red');
      lightNumber($('#day1'), Math.floor(d/10)%10, 'red');
      lightNumber($('#day0'), d%10, 'red');

      lightNumber($('#hour1'), Math.floor(h/10), 'green');
      lightNumber($('#hour0'), h%10, 'green');

      lightNumber($('#minute1'), Math.floor(m/10), 'orange');
      lightNumber($('#minute0'), m%10, 'orange');

      lightNumber($('#second1'), Math.floor(s/10), 'yellow');
      lightNumber($('#second0'), s%10, 'yellow');
    }else{

    }
  }, 1000);
});

var control = [];
control[0]  = ['a', 'b', 'c', 'd', 'e', 'f'];
control[1]  = ['b', 'c'];
control[2]  = ['a', 'b', 'g', 'e', 'd'];
control[3]  = ['a', 'b', 'g', 'c', 'd'];
control[4]  = ['f', 'g', 'b', 'c'];
control[5]  = ['a', 'f', 'g', 'c', 'd'];
control[6]  = ['a', 'f', 'e', 'g', 'c', 'd'];
control[7]  = ['a', 'b', 'c'];
control[8]  = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
control[9]  = ['a', 'b', 'c', 'd', 'f', 'g'];

function lightNumber(target, number, color){
  var i;
  target.find('.a .top').css('border-bottom', '8px solid gray');
  target.find('.a .bottom').css('border-top', '8px solid gray');
  target.find('.g .top').css('border-bottom', '8px solid gray');
  target.find('.g .bottom').css('border-top', '8px solid gray');
  target.find('.d .top').css('border-bottom', '8px solid gray');
  target.find('.d .bottom').css('border-top', '8px solid gray');


  target.find('.f .left').css('border-right', '8px solid gray');
  target.find('.f .right').css('border-left', '8px solid gray');
  target.find('.e .left').css('border-right', '8px solid gray');
  target.find('.e .right').css('border-left', '8px solid gray');
  target.find('.b .left').css('border-right', '8px solid gray');
  target.find('.b .right').css('border-left', '8px solid gray');
  target.find('.c .left').css('border-right', '8px solid gray');
  target.find('.c .right').css('border-left', '8px solid gray');
  for(i=0; i<control[number].length; i++){
    switch(control[number][i]){
      case 'a':
        target.find('.a .top').css('border-bottom', '8px solid '+color);
        target.find('.a .bottom').css('border-top', '8px solid '+color);
      break;
      case 'b':
        target.find('.b .left').css('border-right', '8px solid '+color);
        target.find('.b .right').css('border-left', '8px solid '+color);
      break;
      case 'c':
        target.find('.c .left').css('border-right', '8px solid '+color);
        target.find('.c .right').css('border-left', '8px solid '+color);
      break;
      case 'd':
        target.find('.d .top').css('border-bottom', '8px solid '+color);
        target.find('.d .bottom').css('border-top', '8px solid '+color);
      break;
      case 'e':
        target.find('.e .left').css('border-right', '8px solid '+color);
        target.find('.e .right').css('border-left', '8px solid '+color);
      break;
      case 'f':
        target.find('.f .left').css('border-right', '8px solid '+color);
        target.find('.f .right').css('border-left', '8px solid '+color);
      break;
      case 'g':
        target.find('.g .top').css('border-bottom', '8px solid '+color);
        target.find('.g .bottom').css('border-top', '8px solid '+color);
      break;
    }
  }
}
