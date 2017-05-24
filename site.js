var num = 1;
$(".pseudo-title").click(function() {
    $(".div" + num).addClass("pseudo-title box");
    $(".div" + num).html("<h1>Hello world!</h1>");
    num = num + 1;
});
$(".pseudo-textbox").click(function() {
    $(".div" + num).addClass("pseudo-textbox box");
    $(".div" + num).html(" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque neque neque, vel feugiat lacus lacinia at. Duis scelerisque luctus dui, ac interdum dui dignissim id. Mauris justo eros, pulvinar ut ultrices et, vulputate at orci. Sednec felis pretium, tincidunt elit in, pulvinar dolor. Pellentesque sed ornare nulla. Donec aliquam at mauris at commodo. Vivamus in mauris scelerisque, mollis neque at, suscipit arcu. Sed eget ligula sed.</p>");
    num = num + 1;
});
$(".pseudo-image").click(function() {
    $(".div" + num).addClass("pseudo-image box");
    $(".div" + num).html("<h5>INSERT IMAGE HERE</h5>");
    num = num + 1;
});
$(".pseudo-unorder").click(function() {
    $(".div" + num).addClass("pseudo-unorder box");
    $(".div" + num).html("<ul><li>gdgffgdg</li><li>fwergerer</li><li>eyy6uur6u</li></ul>");
    num = num + 1;
});
$(".pseudo-order").click(function() {
    $(".div" + num).addClass("pseudo-order box");
    $(".div" + num).html("<ol><li>gdgffgdg</li><li>fwergerer</li><li>eyy6uur6u</li></ol>");
    num = num + 1;
});

