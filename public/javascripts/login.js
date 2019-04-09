$(() => {
    $('#sign').click(() => {
        //用户名
        let users = $('#user').val();
        //密码
        let psws = $('#psw').val();
        if (users) {
            $.ajax({
                type: 'post',
                url: 'http://localhost:3000/index/login',
                data: {
                    users,
                    psws
                }
            }).done((data) => {
                console.log(data);
                if(data){
                    var now = new Date();
                    now.setDate(now.getDate() + 1);
                    cookie.set('user',data[0].user, { expires: now, path: '/' });
                    cookie.set('id', data[0]._id, { expires: now, path: '/' });
                    location.href = 'SalesData.html';
                    alert('登陆成功');
                }else{
                    alert('账号或用户名错误');
                }

            });
            // console.log($('#user').val());
        } else {
            alert('请输入用户名')
        }

    })



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
            // $('.gb-zcsjf').html('免费注册');
        }
    }

     //删除cookie
     $('.gb-zcsjf').on('click', function () {
        cookie.remove('id')
        update();
    })

    $li1 = $('<img src="http://t.cn/RCzsdCq" class="layui-nav-img">');
    $li1.before($('.layui-nav-more'))//插入节点
})