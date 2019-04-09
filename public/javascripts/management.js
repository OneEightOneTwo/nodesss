
$(function(){
    // $.ajax({
    //     type: 'post',
    //     url: 'http://localhost:3000/mage/all',
    //     data: '',
    //     async: true,
    //     success: function (str) {
    //         console.log(str);
            
    //     }
    // })



    //刷新面板状态：根据登陆的状态进行刷新，从cookie读取登陆的状态

    //如果在cookie能拿到用户名证明：该用户已登录(隐藏注册和登陆面板，显示退出面板)
    update();

    function update() {//根据cookie显示面板状态

        var uid = cookie.get('id');
        var name = cookie.get('user');
        // console.log(name)
        if (uid) {//0是假，非0数字是真
            //已登录
            $('.gb-dengl').html(name);
            $('.gb-zcsjf').html('退了');
        } else {
            //未登录
            $('.gb-dengl').html('请登录');
            $('.gb-zcsjf').html(' ');
        }
    }
     //删除cookie
     $('.gb-zcsjf').on('click', function () {
        cookie.remove('id')
        update();
    })


    
})