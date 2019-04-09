layui.use('table', function () {
    // 获取id搜索
    $('.layui-btn').click(function () {
        let tex = $('#demoReload').val();
        if (tex) {
            $.ajax({
                type: 'get',
                url: 'http://localhost:3000/order_form/odfin',
                data: 'id=' + tex,
            }).done((data) => {
                console.log(data)
                //渲染
                var table = layui.table;
                //第一个实例
                table.render({
                    elem: '#demo'
                    , height: 435
                    , data: data //数据接口
                    , page: true //开启分页
                    , cols: [[ //表头
                        { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' }
                        , { field: 'name', align: "center", title: '商品名', width: 170 }
                        , { field: 'price', align: "center", title: '价格', width: 170, sort: true }
                        , { field: 'amount', align: "center", title: '数量', width: 170 }
                        , { field: 'freight', align: "center", title: '运费', width: 170 }
                        , { field: 'totalAamount', align: "center", title: '订单总额', width: 177, sort: true }
                        , { field: 'time', align: "center", title: '下单时间', width: 177, sort: true }
                        , { fixed: "right", align: "center", title: "操作", toolbar: "#barDemo" }
                    ]]
                });
            });
        }
    })
    //渲染
    var table = layui.table;
    //第一个实例
    table.render({
        elem: '#demo'
        , height: 435
        , url: 'http://localhost:3000/order_form/odf' //数据接口
        , page: true //开启分页
        , cols: [[ //表头
            { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' }
            , { field: 'name', align: "center", title: '商品名', width: 170 }
            , { field: 'price', align: "center", title: '价格', width: 170, sort: true }
            , { field: 'amount', align: "center", title: '数量', width: 170 }
            , { field: 'freight', align: "center", title: '运费', width: 170 }
            , { field: 'totalAamount', align: "center", title: '订单总额', width: 177, sort: true }
            , { field: 'time', align: "center", title: '下单时间', width: 177, sort: true }
            , { fixed: "right", align: "center", title: "操作", toolbar: "#barDemo" ,}
        ]]
    });

    table.on('checkbox(test)', function (obj) {
        console.log(obj.checked); //当前是否选中状态
        console.log(obj.data); //选中行的相关数据
        console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one
    });
    table.on('edit(test)', function (obj) { //注：edit是固定事件名，test是table原始容器的属性 lay-filter="对应的值"
        console.log(obj.value); //得到修改后的值
        console.log(obj.field); //当前编辑的字段名
        console.log(obj.data); //所在行的所有相关数据  
    });
    //监听行单击事件
    table.on('row(test)', function (obj) {
        // console.log(obj.tr) //得到当前行元素对象
        // console.log(obj.data) //得到当前行数据
        //obj.del(); //删除当前行
        //obj.update(fields) //修改当前行数据
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                title: '订单信息'
                , content: `商品id：${obj.data.id}<br>
                                商品名：${obj.data.name}<br>
                                价格：${obj.data.price}<br>
                                数量：${obj.data.amount}<br>
                                运费：${obj.data.freight}<br>
                                订单总额：${obj.data.totalAamount}<br>
                                下单时间：${obj.data.time}<br>`
            });
        });
    });
});
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