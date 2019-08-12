//数据引入
var data=[
    {img:1,h2:'cation',h3:'cation'},
    {img:2,h2:'cation',h3:'cation'},
    {img:3,h2:'cation',h3:'cation'},
    {img:4,h2:'cation',h3:'cation'},
    {img:5,h2:'cation',h3:'cation'},
    {img:6,h2:'cation',h3:'cation'},
    {img:7,h2:'cation',h3:'cation'},
    {img:1,h2:'jason',h3:'24'}
]

var newData = function (obj){
    var count = 0;
    for(var i=0;i<obj.length;i++){
        obj[i]['only'] = count;
        count++
    }
    return obj
};
var newdata = newData(data)
//通用函数
var common = function(el){
    if(el.substr(0,1) == '.'){
        return document.getElementsByClassName(el.substr(1))
    }
    return document.getElementById(el)
}
//添加幻灯片
var addSilder= function(){
    //获取模板
    var temp_main= common('template_main').innerHTML
                                .replace(/^\s*/,'').replace(/\s*$/,'');
    var temp_control= common('template_control').innerHTML
                                .replace(/^\s*/,'').replace(/\s*$/,'');
    //定义最终输出HTML的变量
    var out_main = [];
    var out_control = [];
    //遍历所有数据，构建最终输出的HTML
    for(var i=0;i<newdata.length;i++){
        var HTML_main = temp_main.replace(/{{index}}/g,newdata[i].img)
                                .replace(/{{h2}}/,newdata[i].h2)
                                .replace(/{{h3}}/,newdata[i].h3)
                                .replace(/{{only}}/,newdata[i].only);
        var HTML_control = temp_control.replace(/{{index}}/g,newdata[i].img)
                                .replace(/{{only}}/,newdata[i].only);
        out_main.push(HTML_main);
        out_control.push(HTML_control);
    }
    common('template_main').innerHTML = out_main.join('');
    common('template_control').innerHTML = out_control.join('');
    }
    window.onload= function(){
        addSilder()
    }