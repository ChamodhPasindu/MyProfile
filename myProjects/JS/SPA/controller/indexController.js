//START SPA
$("#customer").css("display", "none");
$("#item").css("display", "none");
$("#order").css("display", "none");

$("#dashboardBtn").css("font-weight", "bold");


$("#mainBtn").click(function () {
    $("#customer").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#home").css("display", "block");

    $("#dashboardBtn").css("font-weight", "bold");
    $("#orderBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "normal");
    $("#customerBtn").css("font-weight", "normal");
});

$("#dashboardBtn").click(function () {
    $("#customer").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#home").css("display", "block");

    $("#dashboardBtn").css("font-weight", "bold");
    $("#orderBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "normal");
    $("#customerBtn").css("font-weight", "normal");

});

$("#orderBtn").click(function () {
    $("#customer").css("display", "none");
    $("#item").css("display", "none");
    $("#order").css("display", "block");
    $("#home").css("display", "none");

    $("#orderBtn").css("font-weight", "bold");
    $("#dashboardBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "normal");
    $("#customerBtn").css("font-weight", "normal");


    generateOrderId();
});

$("#customerBtn").click(function () {
    $("#customer").css("display", "block");
    $("#item").css("display", "none");
    $("#order").css("display", "none");
    $("#home").css("display", "none");

    $("#customerBtn").css("font-weight", "bold");
    $("#orderBtn").css("font-weight", "normal");
    $("#dashboardBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "normal");
});

$("#itemBtn").click(function () {
    $("#customer").css("display", "none");
    $("#item").css("display", "block");
    $("#order").css("display", "none");
    $("#home").css("display", "none");

    $("#customerBtn").css("font-weight", "normal");
    $("#orderBtn").css("font-weight", "normal");
    $("#dashboardBtn").css("font-weight", "normal");
    $("#itemBtn").css("font-weight", "bold");
});
//END SPA