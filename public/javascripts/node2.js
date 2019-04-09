window.onload = function () {

    function suoyou(data) {
        var html2 = '';
        data.forEach(element => {
            html2 += ` <tr>
                    <td>${element._id}</td>
                    <td>${element.name}</td>
                    <td>${element.message}</td>
                    <td>${element.kind}</td>
                    <td>${element.sales}</td>
                    <td>${element.price}</td>
                    <td>${element.time}</td>
                </tr>   `
        })
        $('#tbody1').html(html2);
    }
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/jiekou/set',
    }).done((data) => {
        suoyou(data)
    })
    $('#fruits').click(function () {
        $('.layui-main').css({ display: 'none' });
        $('#goods').css({ display: 'block' });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set',
        }).done((data) => {
            suoyou(data)
        })
    })

    $('#meat').on('click', function () {
        $('.layui-main').css({ display: 'none' });
        $('#goods').css({ display: 'block' });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set2',
        }).done((data) => {
            suoyou(data)
        })
    })

    $('#find').on('click', function () {
        $('.layui-main').css({ display: 'none' });
        $('#goods').css({ display: 'block' });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set3',
        }).done((data) => {
            suoyou(data)
        })
    })
    // 商品管理
    function guanli(data) {
        var html2 = '';
        data.forEach(element => {
            html2 += `    <tr data-index="2" class="">
                <td data-field="0" data-key="1-0-0" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox">
                        <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
                            <input type="checkbox" class="che" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" style="display: block;width: 18px;height: 18px;">
                        </div>
                    </div>
                </td>
                <td data-field="id" data-key="1-0-1" class="">
                    <div class="layui-table-cell laytable-cell-1-0-1">${element._id}</div>
                </td>
                <td data-field="username" data-key="1-0-2" data-edit="text" class="">
                    <div class="layui-table-cell laytable-cell-1-0-2">${element.name}</div>
                </td>
                <td data-field="email" data-key="1-0-3" data-edit="text" data-content="xianxin@layui.com" class="">
                    <div class="layui-table-cell laytable-cell-1-0-3">
                        <em>${element.message}</em>
                    </div>
                </td>
                <td data-field="city" data-key="1-0-5" class="">
                    <div class="layui-table-cell laytable-cell-1-0-5">${element.kind}</div>
                </td>
                <td data-field="experience" data-key="1-0-7" class="">
                    <div class="layui-table-cell laytable-cell-1-0-7">${element.sales}</div>
                </td>
                <td data-field="ip" data-key="1-0-8" class="">
                    <div class="layui-table-cell laytable-cell-1-0-8">${element.price}</div>
                </td>
                <td data-field="logins" data-key="1-0-9" class="">
                    <div class="layui-table-cell laytable-cell-1-0-9">${element.inventory}</div>
                </td>
                <td data-field="joinTime" data-key="1-0-10" class="">
                    <div class="layui-table-cell laytable-cell-1-0-10">${element.time}</div>
                </td>
                <td data-field="11" data-key="1-0-11" data-off="true" class="layui-table-col-special">
                    <div class="layui-table-cell laytable-cell-1-0-11">
                        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                    </div>
                </td>
            </tr>`
        })
        $('#tbody2').html(html2);

        // 选择单个商品控制全选
        $('#tbody2 input').on('click', function () {
            var checkLe = $('#tbody2 input:checked').size();
            if (checkLe == $('#tbody2 input').size()) {
                $('.chebox').prop('checked', true)
            } else {
                $('.chebox').prop('checked', false)
            }
        })
        // 删除
        $('#tbody2 tr').on('click','.layui-btn',function(){
            var thisid = $(this).parent().parent().parent().find('.laytable-cell-1-0-1').html();
            console.log(11111,thisid)

            var res = confirm('你确定删除吗？');
            if(res){
                $(this).parent().parent().parent().remove();
                $.ajax({
                    type: 'get',
                    url: 'http://localhost:3000/jiekou/set',
                }).done((data) => {
                    
                })
            }  

        })
    

    }
    $('#run').on('click', function () {
        $('#page ul li').eq(0).css({ background: ' rgb(159, 236, 241)', color: 'rgb(28, 114, 241)' }).siblings().css({ background: ' rgb(47, 125, 131)', color: '#fff' })
        $('.layui-main').css({ display: 'block' });
        $('#goods').css({ display: 'none' });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set',
        }).done((data) => {
            guanli(data)
        })
    })
    // 高亮
    $('#page ul li').on('click', function () {
        $(this).css({ background: ' rgb(159, 236, 241)', color: 'rgb(28, 114, 241)' }).siblings().
            css({ background: ' rgb(47, 125, 131)', color: '#fff' })
    })
    $('#cai2').on('click', function () {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set3',
        }).done((data) => {
            guanli(data)
        })
    })
    $('#meat2').on('click', function () {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set2',
        }).done((data) => {
            guanli(data)
        })
    })
    $('#fruit2').on('click', function () {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/jiekou/set',
        }).done((data) => {
            guanli(data)
        })
    })


    $('.chebox').on('click', function () {
        if ($('.chebox').prop('checked')) {
            //全选
            $('#tbody2 input').prop('checked', true);
        } else {
            //全不选
            $('#tbody2 input').prop('checked', false);
        }
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

















}


