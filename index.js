


function hashChange() {
    var hashA = window.location.hash.substr(1);
    var hashB = window.location.hash.substr(1,5);
    var hashC = window.location.hash.substr(6);
    if(hashB === '/') {
        showLoading();
        allHide();
        showE("indexbox",50);
        document.title = "云端的单身情歌";
    }
    if(hashB === '/page') {
        showLoading();
        allHide();
        showE("pagebox",50);
    }
    if(hashB === '/news') {
        showLoading();
        allHide();
        clearNews();
        showE("newsbox",50);
        if(hashC === '/37') {
            nTitle('此内容已返回修改');
            nAuthor('');
            nTime('2024/07/17');
            nContent('');
        }
        if(hashC === '/35') {
            nTitle('青华校区举行“翼揽星光，歌唱梦想”毕业季活动');
            nAuthor('admin');
            nTime('2024/05/30');
            nContent('<p>2024年5月30 日16:40—17:10，东北师范大学附属中学青华校区在各班天井旁举行了“翼揽星光 歌唱梦想”毕业季纪念活动。内容包括播放《稻香》《夜空中最亮的星》《海阔天空》三首歌曲，全体跟唱；放飞纸飞机（提前自行准备彩色纸飞机并写上自己的梦想和愿望）。</p><p>活动全程在哔哩哔哩进行了现场直播。</p><p>今年的“来自云端的单身情歌——东北师大附中毕业生线上大合唱”预计将在2024年11月11日举行，欢迎2024届毕业生届时参加。同时预祝2024届毕业生高考取得好成绩！</p><p><img src=\"https://www.msannu.cn/ms-mcms/templets/1/SDFZ//images/qhxq.png\"/></p>');
        }
        if(hashC === '/29') {
            nTitle('2023年第二届“云端的单身情歌”线上合唱活动纪实');
            nAuthor('admin');
            nTime('2023/11/13');
            nContent('');
        }
        if(hashC === '/26') {
            nTitle('第二届云端的单身情歌合唱活动成功举办                      ');
            nAuthor('组委会');
            nTime('2023/11/13');
            nContent('<p>2023年11月11日，第二届“来自云端的单身情歌——东北师大附中毕业生线上大合唱”活动成功在腾讯会议海外版平台举办。</p><p>近300名目前身在长春、新加坡、首尔、北京、上海、重庆、武汉、南昌、太原、福州、四平、长沙、天津、广州、合肥、成都、西安、哈尔滨、深圳、大连、洛阳、秦皇岛、咸阳、延吉、南京等城市的2022届、2023届东北师大附中毕业生参与了此次活动。</p><p>活动全程录像已经上传至Bilibili。链接：2023毕业生云端再唱单身情歌 <a href=\"https://www.bilibili.com/video/BV1JQ4y187ot/\" target=\"_blank\">https://www.bilibili.com/video/BV1JQ4y187ot</a></p>');
        }
        if(hashC === '/25') {
            nTitle('2023年第二届“云端的单身情歌”活动预告正式发布');
            nAuthor('组委会');
            nTime('2023/11/10');
            nContent('<p><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgncvbswYojNiZzwEw0AU4gAo.png\"/></p>');
        }
        if(hashC === '/24') {
            nTitle('2023年活动官方QQ群');
            nAuthor('组委会');
            nTime('2023/11/10');
            nContent('<p><center><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgitbbswYoqIPdywMwwAM4wAM.png\" style=\"width:400px!important;\"></center></p><center><h4>云端的单身情歌——2023活动QQ群<br/>948762185</h4></center>');
        }
        if(hashC === '/23') {
            nTitle('第一届双十一线上大合唱活动纪实');
            nAuthor('administer');
            nTime('2022/11/12');
            nContent('');
        }



        document.title = document.getElementById("news-title").textContent + " - 云端的单身情歌";
        if(document.getElementById("news-title").innerText) {
            document.getElementById("now-title").innerText = document.getElementById("news-title").innerText;
        }
        else {
            document.getElementById("now-title").innerText = "新闻详情";
        }
    }
}


function showE(eleid,timeis) {
    setTimeout(function() {
        document.getElementById(eleid).style.display = "block";
    }, timeis);
}
function hideE(eleid,timeis) {
    setTimeout(function() {
    document.getElementById(eleid).style.display = "none";
    }, timeis);
}
function jumpT(urls) {
    window.location.href = urls;
}
function allHide() {
    window.scrollTo(0,0);
    hideE("indexbox",0);
    hideE("pagebox",0);
    hideE("newsbox",0);
}
function showLoading() {
    window.scrollTo(0,0);
    showE("loadingbox",0);
    hideE("loadingbox",50);
}

function clearNews() {
    nTitle('');
    nAuthor('');
    nTime('');
    nContent('');
}
function nTitle(ntitle) {
    document.getElementById("news-title").innerText = ntitle;
}
function nAuthor(nauthor) {
    document.getElementById("news-author").innerText = nauthor;
}
function nTime(ntime) {
    document.getElementById("news-time").innerText = ntime;
}
function nContent(ncontent) {
    document.getElementById("news-content").innerHTML = ncontent;
}