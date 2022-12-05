$(document).ready(function () {

    prueba()
})

function prueba() {

    var htmlTbody = '<tr>'
    htmlTbody +='<td><input type="checkbox" /></td>'
    htmlTbody += '<td></td>'

    htmlTbody += '</tr>'

    $("#tbodyPrincipal").append(htmlTbody)

    //console.log('orueba');
}