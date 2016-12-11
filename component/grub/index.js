$(function(){
  $('#first').focus();
  changeEvent();
});

function changeEvent(){
  $('.now').unbind('DOMSubtreeModified');
  $('.now').bind('DOMSubtreeModified', function(){
    var last_char = $(this).html().slice(-1);
    if(last_char == '\>'){
      var newContent = $(this).html();
      newContent.replace('<br>', '');
      newContent = '';
      $(this).html(newContent);
      console.log(newContent);
    }
  });
}

function addNewLine(){

}

/* simulate contenteditable label To input
 */

