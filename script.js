var date = Date();

var textarea9 = localStorage.getItem("hr9");
var textarea10 = localStorage.getItem("hr10");
var textarea11 = localStorage.getItem("hr11");
var textarea12 = localStorage.getItem("hr12");
var textarea1 = localStorage.getItem("hr1");
var textarea2 = localStorage.getItem("hr2");
var textarea3 = localStorage.getItem("hr3");
var textarea4 = localStorage.getItem("hr4");
var textarea5 = localStorage.getItem("hr5");


var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

console.log(textarea1)

textarea9.val(textarea9);
textarea10.val(textarea10);
textarea11.val(textarea11);
textarea12.val(textarea12);
textarea1.val(textarea1);
textarea2.val(textarea2);
textarea3.val(textarea3);
textarea4.val(textarea4);
textarea5.val(textarea5);

document.getElementById("currentDay").innerHTML= Date();

$(".saveButton").on("click", function (event) {
   
    event.preventDefault();
    var textarea = $(this).prev();
    var id = textarea.attr("id");
    var value = textarea.val();
    localStorage.setItem(id, value);
});




