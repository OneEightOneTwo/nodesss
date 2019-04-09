$("#fileUpload").change(function () {
    console.log($("#fileUpload")[0].files[0].name);
});
//上传到数据库
$('#btn').click(() => {
    let id = $('#id').val();//id
    let lei = $('#lei').val();//类型
    let goodsName = $('#goodsName').val();//商品名
    let amount = $('#amount').val();//数量
    let price = $('#price').val();//价格
    let Nw = $('#Nw').val();//信息
    let images = $("#fileUpload")[0].files[0].name//照片
    console.log(id, lei, goodsName, amount, price, Nw, $("#fileUpload")[0].files[0].name)
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/upgoods/up',
        data: {
            'id': id * 1,
            'lei': lei,
            'name': goodsName,
            'amount': amount * 1,
            'price': price * 1,
            'Nw': Nw,
            'images': images
        }
    }).done((data) => {
        console.log(data)
        if (data == '上传成功') {
            alert(data);
            location.href = 'http://localhost:3000/upgoods.html'
        }
    })

})

// 群聊通讯
var socket = new WebSocket('ws://localhost:8080');
socket.onmessage = function (msg) {
    console.log(msg)
    if(msg.data){
        $('#newMessage').show();
    } else {
        $('#newMessage').hide();
    }
    
}

//刷新面板状态：根据登陆的状态进行刷新，从cookie读取登陆的状态

    //如果在cookie能拿到用户名证明：该用户已登录(隐藏注册和登陆面板，显示退出面板)
    update();

    function update() {//根据cookie显示面板状态

        var uid = cookie.get('id');
        var name = cookie.get('user');
        console.log(name)
        if (uid) {//0是假，非0数字是真
            //已登录
            $('.gb-dengl').html(name);
            $('.gb-zcsjf').html('退了');
        } else {
            //未登录
            // location.href = 'login.html';
            // $('.gb-dengl').html('请登录');
            // $('.gb-zcsjf').html('免费注册');
        }
    }
    //删除cookie
    $('.gb-zcsjf').on('click', function () {
        cookie.remove('id')
        update();
    })