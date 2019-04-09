$(function () {

    //性别显示隐藏
    $('.layui-form-select').click(function () {
        $('.layui-form-select dl').toggle();
        // $('.layui-input').val();
    });
    //显示选择的性别
    $('.layui-form-select dl dd').on('click', function () {
        $(this).attr('class', 'layui-this').siblings().attr('class', ' ');
        $('.layui-select-title input').val($(this).html());
        // console.log($(this).html());
    });



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
            location.href = 'index.html';
            // $('.gb-dengl').html('请登录');
            // $('.gb-zcsjf').html('免费注册');
        }
    }
    
    //删除cookie
    $('.gb-zcsjf').on('click', function () {
        cookie.remove('id')
        update();
    })

    // 登录
    $('.gb-dengl').click(function(){
        location.href = 'index.html';
    })





    layui.use('form', function () {

    })





    //网站用户数据渲染

    function user(str) {
        var res = str.map(function (item) {
            return `<tr data-index="0" class="">
            <td data-field="0" data-key="46-0-0"
                class="layui-table-col-special">
                <div
                    class="layui-table-cell laytable-cell-46-0-0 laytable-cell-checkbox">
                    <input type="checkbox" name="layTableCheckbox"
                        lay-skin="primary">
                    <div class="layui-unselect layui-form-checkbox"
                        lay-skin="primary"><i
                            class="layui-icon layui-icon-ok"></i></div>
                </div>
            </td>
            <td data-field="id" data-key="46-0-1" class="">
                <div class="layui-table-cell laytable-cell-46-0-1">${item.ID}</div>
            </td>
            <td data-field="username" data-key="46-0-2" data-minwidth="100"
                class="">
                <div class="layui-table-cell laytable-cell-46-0-2">${item.user}</div>
            </td>
            <td data-field="phone" data-key="46-0-4" class="">
                <div class="layui-table-cell laytable-cell-46-0-4">${item.phone}
                </div>
            </td>
            <td data-field="email" data-key="46-0-5" class="">
                <div class="layui-table-cell laytable-cell-46-0-5">${item.email}
                </div>
            </td>
            <td data-field="sex" data-key="46-0-6" class="">
                <div class="layui-table-cell laytable-cell-46-0-6">${item.sex}</div>
            </td>
            <td data-field="ip" data-key="46-0-7" class="">
                <div class="layui-table-cell laytable-cell-46-0-7">1111111</div>
            </td>

            <td data-field="9" data-key="46-0-9" align="center" data-off="true"
                class="layui-table-col-special">
                <div class="layui-table-cell laytable-cell-46-0-9"> <a
                        class="layui-btn layui-btn-normal layui-btn-xs"
                        lay-event="edit"><i
                            class="layui-icon layui-icon-edit"></i>编辑</a> <a
                        class="layui-btn layui-btn-danger layui-btn-xs"
                        lay-event="del"><i
                            class="layui-icon layui-icon-delete"></i>删除</a>
                </div>
            </td>
        </tr>`;
        }).join();
        $('#tby').html(res);
    }
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/user/all',
        data: '',
        async: false,
        success: function (str) {
            console.log(str);
            user(str);
        }
    })


    //局部查询
    $('#btn').click(() => {
        // console.log(123)
        //id
        let ids = $('#id').val();
        //用户名
        let users = $('#username').val();
        //邮箱
        let emails = $('#email').val();
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/user/check',
            data: {
                ids,
                users,
                emails
            }
        }).done((data) => {
            // console.log(data);
            user(data);

        });

    })


    //删除数据
    $('#tby').on('click', '.layui-btn-danger', function () {
        // console.log(123)
        var res = confirm('您确定要删除吗?');
        if (res) {
            $(this).parent().parent().parent().remove();
            user(data);
        }
    })


    //编辑信息
    $('#tby').on('click', '.layui-btn-normal', function () {
        // console.log(123);
        $('#layui-layer9').toggle();
    });
    console.log($('#layui-layer9'));

    // 群聊通讯
    var socket = new WebSocket('ws://localhost:8080');
    socket.onmessage = function (msg) {
        console.log(msg)
        if (msg.data) {
            $('#newMessage').show();
        } else {
            $('#newMessage').hide();
        }

    }

})