/**
 * Created by costas zarifis on 10/27/15.
 */

NUMBER_OF_MESSAGES = 10000;

function sendMessage() {
    console.time("$digest");
    var myDiv = $("#panel");
    myDiv.append('<div class="chat-box-left">   sadsad </div>    <div class="chat-box-name-left"> <img src="assets/img/yannis.jpg" alt="bootstrap Chat box user image" class="img-circle" /> -  Yannis Papakonstantinou </div> <hr class="hr-clas" />');
    console.timeEnd("$digest");
    myDiv[0].scrollTop = myDiv[0].scrollHeight;
    //console.timeEnd("$digest");
}

function sendMessage2() {
    console.time("$digest");
    var myDiv = document.getElementById("panel");
    myDiv.innerHTML = myDiv.innerHTML + '<div class="chat-box-left">   sadsad </div>    <div class="chat-box-name-left"> <img src="assets/img/yannis.jpg" alt="bootstrap Chat box user image" class="img-circle" /> -  Yannis Papakonstantinou </div> <hr class="hr-clas" />';
    console.timeEnd("$digest");
    myDiv.scrollTop = myDiv.scrollHeight;

}

$(function() {
    // Handler for .ready() called.

    for (var i = 0; i< NUMBER_OF_MESSAGES; i++) {
        var myDiv = $("#panel");
        myDiv.append('<div class="chat-box-left">   added: '+i+' comment </div>    <div class="chat-box-name-left"> <img src="assets/img/yannis.jpg" alt="bootstrap Chat box user image" class="img-circle" /> -  Yannis Papakonstantinou </div> <hr class="hr-clas" />');

    }
});