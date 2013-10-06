function factorial(number) {
  if (number < 0 || $.isNumeric(number) === false) {
    return "invalid";
  } else {
    var result = 1;
    for (number; number > 0; number--) {
      result *= number;
    }
    return result;
  }
}

//var f = [];
//function factorial (n) {
//  if (n === 0 || n === 1)
//    return 1;
//  if (f[n] > 0)
//    return f[n];
//  else
//    return f[n] = factorial(n-1) * n;
//} 
$(function() {
  $("#user-input").submit(function() {
    $("#selection").empty().append($("input#number").val());
    $("#answer").empty().append(factorial($("input#number").val()));
    $(".result").fadeIn();
    return false;
  });
});

