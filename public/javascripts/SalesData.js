var dom = document.getElementById("container");
var myChart = echarts.init(dom);
$.ajax({
    type: 'get',
    url: 'http://localhost:3000/SalesData/set',
}).done((data) => {
    // console.log(data)
    let name = [];
    data.forEach(element => {
        name.push(element.name);
    });
    option = {
        title: {
            text: '蔬果新鲜销量',
            subtext: '销量',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            // 右上分类数据
            data: name
        },
        series: [
            {
                name: '销量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                //渲染分类数据饼图
                data: [
                    { value: data[0].value, name: data[0].name },
                    { value: data[1].value , name: data[1].name },
                    { value: data[2].value , name: data[2].name },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option, true);
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