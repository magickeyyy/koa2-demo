$.ajax({
    type: "POST",
    url: "http://localhost:3000/signin",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({user: 'dfdfg'}),
    success: function(msg){
        console.log(msg);
    }
})
$("#btn_signin").click(function() {
    location.href = '/signin'
})
$("#btn_signout").click(function() {
    location.href = '/signout'
})
$.get('/admin/user',{ name: "John", time: "2pm" }, function(data) {
    console.log(111,data)
})
$.get('/admin/user/userinfo',{ name: "John", time: "2pm" }, function(data) {
    console.log(111,data)
})
$.get('/admin/list/listinfo',{ name: "John", time: "2pm" }, function(data) {
    console.log(222,data)
})
$.get('/admin/list/listinfo',{ name: "John", time: "2pm" }, function(data) {
    console.log(222,data)
})
$.post('/admin/list/list',{ name: "John", time: "John" }, function(data) {
    console.log(222,data)
})