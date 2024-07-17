


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
        clearPageBox();
        showE("pagebox",50);
        if(hashC === '/intro/letter-to-visitors') {
            pTitleOne('活动介绍');
            pTitleTwo('致访问者的一封信');
            pLink('<a class=\"xza\">致访问者的一封信</a><!--<a href=\"#/page/intro/committee\">活动组织方信息</a><a href=\"#/page/intro/fraud-prevention-tips\">谨防诈骗提示</a>-->');
            pContent('<p>感谢您访问云端的单身情歌官方网站。</p><p>时间回到2011年11月11日11点11分，当时的东北师大附中青华校区高二11班门口，几个少年端起吉他，弹唱起《单身情歌》，同学们逐渐聚集并围拢在校园的天井旁，共同加入了这场大合唱。这便是一切的源头。从一时兴起到约定俗成，天井大合唱逐渐成为了一场全校师生都积极参与的年度活动。就这样，单身情歌大合唱扎根在了附中“勇开风气、兼容并包”的土壤。</p><p>2016年，人民网、澎湃新闻等主流媒体对这一校园文化现象进行了报道，《单身情歌》的原唱林志炫先生也通过社交媒体表达了对附中学子的认可和支持。</p><p>2020年11月11日，林志炫先生更是在新冠疫情特殊时期的重重困难下，千里迢迢从境外奔赴吉林长春，在青华校区操场与同学们共唱单身情歌，圆满兑现了他与附中学子之间的十年之约。</p><p>2022年11月11日，我们首次尝试举办线上大合唱活动。通过海内外校友的共同组织、策划，终于在半夜23:11分，在腾讯会议平台完成了首次线上合唱活动。</p><p>首次活动吸引了超过300名附中毕业生参与，他们彼时横跨国内数十个城市和全球数个国家，在同一时间又唱响那份充满回忆的声音。2023年11月11日23:11分，我们再次成功举办第二届合唱活动，并将活动名称正式定为“云端的单身情歌”。</p><p>2024，让我们一起期待属于东北师大附中的声音继续在云端回响！</p>');
        }
        if(hashC === '/intro/committee') {
            pTitleOne('活动介绍');
            pTitleTwo('活动组织方信息');
            pLink('<a href=\"#/page/intro/letter-to-visitors\">致访问者的一封信</a><a class=\"xza\">活动组织方信息</a><a href=\"#/page/intro/fraud-prevention-tips\">谨防诈骗提示</a>');
            pContent('2022年第一届活动组织方信息<br/><br/>2022年第一届活动组织方信息');
        }
        if(hashC === '/intro/fraud-prevention-tips') {
            pTitleOne('活动介绍');
            pTitleTwo('谨防诈骗提示');
            pLink('<a href=\"#/page/intro/letter-to-visitors\">致访问者的一封信</a><a href=\"#/page/intro/committee\">活动组织方信息</a><a class=\"xza\">谨防诈骗提示</a>');
            pContent('null');
        }
        if(hashC === '/previous/2022') {
            pTitleOne('往届精彩');
            pTitleTwo('2022年第一届活动纪实');
            pLink('<a class=\"xza\">2022年第一届</a><a href=\"#/page/previous/2023\">2023年第二届</a>');
            pContent('');
        }
        if(hashC === '/previous/2023') {
            pTitleOne('往届精彩');
            pTitleTwo('2023年第二届活动纪实');
            pLink('<a href=\"#/page/previous/2022\">2022年第一届</a><a class=\"xza\">2023年第二届</a>');
            pContent('');
        }


        document.title = document.getElementById("page-title2").textContent + " - 云端的单身情歌";
    }
    if(hashB === '/news') {
        showLoading();
        allHide();
        clearNews();
        showE("newsbox",50);
        if(hashC === '/37') {
            nTitle('null');
            nAuthor('');
            nTime('2024/07/17');
            nContent('null');
        }
        if(hashC === '/35') {
            nTitle('青华校区举行“翼揽星光，歌唱梦想”毕业季活动');
            nAuthor('Admin');
            nTime('2024/05/30');
            nContent('<p>2024年5月30 日16:40—17:10，东北师范大学附属中学青华校区在各班天井旁举行了“翼揽星光 歌唱梦想”毕业季纪念活动。内容包括播放《稻香》《夜空中最亮的星》《海阔天空》三首歌曲，全体跟唱；放飞纸飞机（提前自行准备彩色纸飞机并写上自己的梦想和愿望）。</p><p>活动全程在哔哩哔哩进行了现场直播。</p><p>今年的“来自云端的单身情歌——东北师大附中毕业生线上大合唱”预计将在2024年11月11日举行，欢迎2024届毕业生届时参加。同时预祝2024届毕业生高考取得好成绩！</p><p><img src=\"https://www.msannu.cn/ms-mcms/templets/1/SDFZ//images/qhxq.png\"/></p>');
        }
        if(hashC === '/26') {
            nTitle('2023年第二届“云端的单身情歌”线上合唱活动成功举办');
            nAuthor('活动组委会');
            nTime('2023/11/13');
            nContent('<p>2023年11月11日，第二届“来自云端的单身情歌——东北师大附中毕业生线上大合唱”活动成功在腾讯会议海外版平台举办。</p><p>近300名目前身在长春、新加坡、首尔、北京、上海、重庆、武汉、南昌、太原、福州、四平、长沙、天津、广州、合肥、成都、西安、哈尔滨、深圳、大连、洛阳、秦皇岛、咸阳、延吉、南京等城市的2022届、2023届东北师大附中毕业生参与了此次活动。</p><p>活动全程录像已经上传至Bilibili。链接：2023毕业生云端再唱单身情歌 <a href=\"https://www.bilibili.com/video/BV1JQ4y187ot/\" target=\"_blank\">https://www.bilibili.com/video/BV1JQ4y187ot</a></p>');
        }
        if(hashC === '/25') {
            nTitle('第二届“云端的单身情歌”活动预告海报正式发布');
            nAuthor('活动组委会');
            nTime('2023/11/10');
            nContent('<p><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgncvbswYojNiZzwEw0AU4gAo.png\"/></p>');
        }
        if(hashC === '/24') {
            nTitle('2023年活动官方QQ群');
            nAuthor('活动组委会');
            nTime('2023/11/10');
            nContent('<p><center><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgitbbswYoqIPdywMwwAM4wAM.png\" style=\"width:300px!important;\"></center></p><center><h4>云端的单身情歌——2023活动QQ群<br/>948762185</h4></center>');
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
function clearPageBox() {
    pTitleOne('');
    pTitleTwo('');
    pContent('');
    pLink('');
}
function pTitleOne(ptitle1) {
    document.getElementById("page-title1").innerText = ptitle1;
}
function pTitleTwo(ptitle2) {
    document.getElementById("page-title2").innerText = ptitle2;
}
function pLink(pagelink) {
    document.getElementById("leftlink-index").innerHTML = pagelink;
}
function pContent(pcontent) {
    document.getElementById("pageright-content").innerHTML = pcontent;
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