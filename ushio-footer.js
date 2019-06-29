

/* page reload */
$('title').remove();
$('head').append('<title>' + page.title + '</title>');
$('[rel="icon"]').remove();
$('head').append('<link rel="icon" type="image/x-icon" href="' + page.icon + '">');
if(!$('[name="viewport"]').length) {
    $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">');
}
if(!$('[name="keywords"]').length) {
    $('head').append('<meta name="keywords" content="Ushio,iotcat,yimian">');
}
if(!$('[name="description"]').length) {
    $('head').append('<meta name="description" content="小汐の页">');
}



/* out&in event amine */
function getHiddenProp() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'Hidden') in document)
            return prefixes[i] + 'Hidden';
    }
    return null;
}
function getVisibilityState() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('visibilityState' in document) return 'visibilityState';
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'VisibilityState') in document)
            return prefixes[i] + 'VisibilityState';
    }
    return null;
}
if (getHiddenProp()) 
{
    var evtname = getHiddenProp().replace(/[H|h]idden/, '') + 'visibilitychange';
    document.addEventListener(evtname, function () 
    {
        if(document[getVisibilityState()] == "hidden") {
            log_update();
            var rand = Math.random() * 100;
            if(rand < 30) document.title = '啊咧(⊙０⊙)';
            else if(rand < 55) document.title = '快来戳我呀( ´∀｀)σ';
            else if(rand < 75) document.title = '躲起来(´・ω・｀)';
            else document.title = '哎呦，页面崩掉了吗(>﹏<)';
            setTimeout("document.title = page.title", 2400);
            clearInterval(page.TimerObj);
            page.TimerObj = null;
        }

        if(document[getVisibilityState()] == "visible") {
            document.title = page.title;
            if(page.TimerObj == null) page.TimerObj = setInterval("page.Timer++", 1000);
        }
    }, false);
}



/* log */
function log_ini() {
    fp(function(myFp, key, acc, detail, createdTime, timeUsed, detailObj) {
        page.fp = myFp;
        $.post("https://log.yimian.xyz/iis.php",{
            "fp":myFp,
            "lang": detailObj.language,
            "timezone": detailObj.timezone,
            "platform": detailObj.platform,
            "ram": detailObj.deviceMemory,
            "screen": detailObj.screenResolution,
            "userAgent": detailObj.userAgent,
            "webgl": detailObj.webglVendorAndRenderer
        }, function(res){
            page.sid = JSON.parse(res).sid;
            page.ip = JSON.parse(res).ip;
            console.log('\n' + ' %c Ushio v1.0.1 %c ' + page.ip  + ' %c https://ushio.xyz \n', 'color: #FFFFCC; background: #030307; padding:5px 0;', 'color: #FF99FF; background: #030307; padding:5px 0;', 'background: #4682B4; padding:5px 0;');
        });
    });
}

function log_update() {
    $.post('https://log.yimian.xyz/iis.php',{
        "sid": page.sid,
        "sessiontime": page.Timer
    })
}
setTimeout("log_ini();", 800);



/* ushio brand */
