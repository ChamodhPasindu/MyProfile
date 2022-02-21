
//START CUSTOMER VALIDATION
var regExCusID = /^(C00-)[0-9]{3,4}$/;
var regExCusName = /^[A-z\s+]{5,50}$/;
var regExCusAddress = /^[A-z\s+]{5,50}$/;
var regExCusSalary = /^[0-9]*([.][0-9]{2})$/;

//START NEW CUSTOMER VALIDATION
function checkNewCustomerValidation() {
    let inputCusId = $("#txtCusId").val();
    let inputCusName = $("#txtCusName").val();
    let inputCusAddress = $("#txtCusAddress").val();
    let inputCusSalary = $("#txtCusSalary").val();

    if (regExCusID.test(inputCusId)) {
        if (regExCusName.test(inputCusName)) {
            if (regExCusAddress.test(inputCusAddress)) {
                if (regExCusSalary.test(inputCusSalary)) {
                    $("#btnCustomerSave").prop('disabled', false);
                }
            }
        }
    }
}

$("#txtCusId").keyup(function () {
    let inputCusId = $("#txtCusId").val();
    if (regExCusID.test(inputCusId)) {
        $("#txtCusId").css('border', '2px solid blue');
        $("#lblCusId").text("");

        checkNewCustomerValidation()
        $("#txtCusId").keydown(function (event) {
            if (event.key == "Enter") {
                $("#txtCusName").focus();
            }
        });
    } else {
        $("#txtCusId").css('border', '2px solid red');
        $("#lblCusId").text("Cus ID is a required field : Pattern C00-000");
        $("#btnCustomerSave").prop('disabled', true);

    }
});

$("#txtCusName").keyup(function () {
    let inputCusName = $("#txtCusName").val();
    if (regExCusName.test(inputCusName)) {
        $("#txtCusName").css('border', '2px solid blue');
        $("#lblCusName").text("");

        checkNewCustomerValidation()
        $("#txtCusName").keydown(function (event) {
            if (event.key == "Enter") {
                $("#txtCusAddress").focus();
            }
        });

    } else {
        $("#txtCusName").css('border', '2px solid red');
        $("#lblCusName").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");

        $("#btnCustomerSave").prop('disabled', true);

    }
});

$("#txtCusAddress").keyup(function () {
    let inputCusAddress = $("#txtCusAddress").val();
    if (regExCusAddress.test(inputCusAddress)) {
        $("#txtCusAddress").css('border', '2px solid blue');
        $("#lblCusAddress").text("");

        checkNewCustomerValidation()
        $("#txtCusAddress").keydown(function (event) {
            if (event.key == "Enter") {
                $("#txtCusSalary").focus();
            }
        });

    } else {
        $("#txtCusAddress").css('border', '2px solid red');
        $("#lblCusAddress").text("Cus Name is a required field : Mimum 5");

        $("#btnCustomerSave").prop('disabled', true);

    }
});

$("#txtCusSalary").keyup(function () {
    let inputCusSalary = $("#txtCusSalary").val();
    if (regExCusSalary.test(inputCusSalary)) {
        $("#txtCusSalary").css('border', '2px solid blue');
        $("#lblCusSalary").text("");

        checkNewCustomerValidation()
        $("#txtCusSalary").keydown(function (event) {
            if (event.key == "Enter") {
                $("#btnCustomerSave").focus();
            }
        });
    } else {
        $("#txtCusSalary").css('border', '2px solid red');
        $("#lblCusSalary").text("Cus Salary is a required field : Pattern 100.00");

        $("#btnCustomerSave").prop('disabled', true);
    }
});
//END NEW CUSTOMER VALIDATION

//START UPDATE CUSTOMER VALIDATION
function checkUpdateCustomerValidation() {
    let inputCusName = $("#customerName").val();
    let inputCusAddress = $("#customerAddress").val();
    let inputCusSalary = $("#customerSalary").val();

    if (regExCusName.test(inputCusName)) {
        if (regExCusAddress.test(inputCusAddress)) {
            if (regExCusSalary.test(inputCusSalary)) {
                $("#btnCustomerUpdate").prop('disabled', false);
            }
        }
    }
}

$("#customerName").keyup(function () {
    let inputCusName = $("#customerName").val();
    if (regExCusName.test(inputCusName)) {
        $("#customerName").css('border', '2px solid blue');
        checkUpdateCustomerValidation()
        $("#customerName").keydown(function (event) {
            if (event.key == "Enter") {
                $("#customerAddress").focus();
            }
        });

    } else {
        $("#customerName").css('border', '2px solid red');
        $("#btnCustomerUpdate").prop('disabled', true);

    }
});

$("#customerAddress").keyup(function () {
    let inputCusAddress = $("#customerAddress").val();
    if (regExCusAddress.test(inputCusAddress)) {
        $("#customerAddress").css('border', '2px solid blue');
        checkUpdateCustomerValidation()
        $("#customerAddress").keydown(function (event) {
            if (event.key == "Enter") {
                $("#customerSalary").focus();
            }
        });

    } else {
        $("#customerAddress").css('border', '2px solid red');
        $("#btnCustomerUpdate").prop('disabled', true);

    }
});

$("#customerSalary").keyup(function () {
    let inputCusSalary = $("#customerSalary").val();
    if (regExCusSalary.test(inputCusSalary)) {
        $("#customerSalary").css('border', '2px solid blue');
        checkUpdateCustomerValidation()
        $("#customerSalary").keydown(function (event) {
            if (event.key == "Enter") {
                $("#btnCustomerUpdate").focus();
            }
        });
    } else {
        $("#customerSalary").css('border', '2px solid red');
        $("#btnCustomerUpdate").prop('disabled', true);
    }
});
//END UPDATE CUSTOMER VALIDATION

//END CUSTOMER VALIDATION


//START CUSTOMER BTN FUNCTIONS
$("#btnCustomerSave").click(function () {

    saveCustomer();
    clearAll();
    loadAllCustomer();
    loadAllCustomerIds();

    $("#customerTable>tr").off("click");

    $("#customerTable>tr").click(function () {

        let cusId = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusSalary = $(this).children(":eq(3)").text();

        $("#customerId").val(cusId)
        $("#customerName").val(cusName)
        $("#customerSalary").val(cusSalary)
        $("#customerAddress").val(cusAddress)
    });
});

$("#btnCustomerSearch").click(function () {
    var searchID = $("#txtCustomerSearch").val();

    var response = searchCustomer(searchID);
    if (response) {
        $("#customerId").val(response.getCustomerId());
        $("#customerName").val(response.getCustomerName());
        $("#customerAddress").val(response.getCustomerAddress());
        $("#customerSalary").val(response.getCustomerSalary());

        $('#customerName,#customerSalary,#customerAddress').prop('disabled', false);
        $("#btnCustomerDelete").prop('disabled', false);
    } else {
        clearAll();
        alert("No such a Customer")
    }
});

$("#btnCustomerDelete").click(function () {
    var cusId = $("#customerId").val();
    var response = searchCustomer(cusId);

    let index = customerDB.indexOf(response);
    let res = confirm("Do you really need to delete this customer ?");
    if (res) {
        deleteCustomer(index);
    }
});

$("#btnCustomerUpdate").click(function () {
    updateCustomer();
});
//END CUSTOMER BTN FUNCTIONS


//START CUSTOMER CRUD OPERATIONS
function saveCustomer() {

    //get customer details from user inputs
    let customerID = $("#txtCusId").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    //create customer object

    var customer = new CustomerDTO(customerID,customerName,customerAddress,customerSalary);
    customerDB.push(customer);

    $("#txtCustomerCount").text(customerDB.length);
}

function deleteCustomer(index) {
    customerDB.pop(index);

    clearAll();
    loadAllCustomer();
    $("#txtCustomerCount").text(customerDB.length);

}

function updateCustomer() {
    let cusName = $("#customerName").val();
    let cusAddress = $("#customerAddress").val();
    let cusSalary = $("#customerSalary").val();

    var cusId = $("#customerId").val();
    var response = searchCustomer(cusId);
    let index = customerDB.indexOf(response);

    customerDB[index].setCustomerName(cusName);
    customerDB[index].setCustomerSalary(cusSalary);
    customerDB[index].setCustomerAddress(cusAddress);

    clearAll();
    loadAllCustomer();

}

function searchCustomer(id) {
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == id) {
            return customerDB[i];
        }
    }
}

function clearAll() {
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary,#txtCustomerSearch').val("");
    $('#customerId,#customerName,#customerAddress,#customerSalary').val("");

    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').css('border', '2px solid #ced4da');
    $('#customerId,#customerName,#customerAddress,#customerSalary').css('border', '2px solid #ced4da');

    $('#txtCusId').focus();

    $('#btnCustomerSave,#btnCustomerUpdate,#btnCustomerDelete').prop('disabled', true);
    $('#customerName,#customerSalary,#customerAddress').prop('disabled', true);

}

function loadAllCustomer() {

    $("#customerTable").empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.getCustomerId()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerSalary()}</td></tr>`;
        $("#customerTable").append(row);
    }
}
//END CUSTOMER CRUD OPERATIONS
