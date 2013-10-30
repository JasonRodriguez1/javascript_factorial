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

$(function() {
  $("#user-input").submit(function() {
    $("#selection").empty().append($("input#number").val());
    $("#answer").empty().append(factorial($("input#number").val()));
    $(".result").fadeIn();
    return false;
  });
});

