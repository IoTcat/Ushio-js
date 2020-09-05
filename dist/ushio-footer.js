if(!page.ushio){
	throw new Error('ushio::Ushio quitted!');
}

(function(e,r,t){"use strict";if(typeof window!=="undefined"&&typeof define==="function"&&define.amd){define(t)}else if(typeof module!=="undefined"&&module.exports){module.exports=t()}else if(r.exports){r.exports=t()}else{r[e]=t()}})("Fingerprint2",this,function(){"use strict";if(typeof Array.isArray==="undefined"){Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}var d=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535];r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];t[3]+=e[3]+r[3];t[2]+=t[3]>>>16;t[3]&=65535;t[2]+=e[2]+r[2];t[1]+=t[2]>>>16;t[2]&=65535;t[1]+=e[1]+r[1];t[0]+=t[1]>>>16;t[1]&=65535;t[0]+=e[0]+r[0];t[0]&=65535;return[t[0]<<16|t[1],t[2]<<16|t[3]]};var f=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535];r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];t[3]+=e[3]*r[3];t[2]+=t[3]>>>16;t[3]&=65535;t[2]+=e[2]*r[3];t[1]+=t[2]>>>16;t[2]&=65535;t[2]+=e[3]*r[2];t[1]+=t[2]>>>16;t[2]&=65535;t[1]+=e[1]*r[3];t[0]+=t[1]>>>16;t[1]&=65535;t[1]+=e[2]*r[2];t[0]+=t[1]>>>16;t[1]&=65535;t[1]+=e[3]*r[1];t[0]+=t[1]>>>16;t[1]&=65535;t[0]+=e[0]*r[3]+e[1]*r[2]+e[2]*r[1]+e[3]*r[0];t[0]&=65535;return[t[0]<<16|t[1],t[2]<<16|t[3]]};var g=function(e,r){r%=64;if(r===32){return[e[1],e[0]]}else if(r<32){return[e[0]<<r|e[1]>>>32-r,e[1]<<r|e[0]>>>32-r]}else{r-=32;return[e[1]<<r|e[0]>>>32-r,e[0]<<r|e[1]>>>32-r]}};var v=function(e,r){r%=64;if(r===0){return e}else if(r<32){return[e[0]<<r|e[1]>>>32-r,e[1]<<r]}else{return[e[1]<<r-32,0]}};var h=function(e,r){return[e[0]^r[0],e[1]^r[1]]};var m=function(e){e=h(e,[0,e[0]>>>1]);e=f(e,[4283543511,3981806797]);e=h(e,[0,e[0]>>>1]);e=f(e,[3301882366,444984403]);e=h(e,[0,e[0]>>>1]);return e};var u=function(e,r){e=e||"";r=r||0;var t=e.length%16;var a=e.length-t;var n=[0,r];var i=[0,r];var o=[0,0];var u=[0,0];var s=[2277735313,289559509];var l=[1291169091,658871167];for(var c=0;c<a;c=c+16){o=[e.charCodeAt(c+4)&255|(e.charCodeAt(c+5)&255)<<8|(e.charCodeAt(c+6)&255)<<16|(e.charCodeAt(c+7)&255)<<24,e.charCodeAt(c)&255|(e.charCodeAt(c+1)&255)<<8|(e.charCodeAt(c+2)&255)<<16|(e.charCodeAt(c+3)&255)<<24];u=[e.charCodeAt(c+12)&255|(e.charCodeAt(c+13)&255)<<8|(e.charCodeAt(c+14)&255)<<16|(e.charCodeAt(c+15)&255)<<24,e.charCodeAt(c+8)&255|(e.charCodeAt(c+9)&255)<<8|(e.charCodeAt(c+10)&255)<<16|(e.charCodeAt(c+11)&255)<<24];o=f(o,s);o=g(o,31);o=f(o,l);n=h(n,o);n=g(n,27);n=d(n,i);n=d(f(n,[0,5]),[0,1390208809]);u=f(u,l);u=g(u,33);u=f(u,s);i=h(i,u);i=g(i,31);i=d(i,n);i=d(f(i,[0,5]),[0,944331445])}o=[0,0];u=[0,0];switch(t){case 15:u=h(u,v([0,e.charCodeAt(c+14)],48));case 14:u=h(u,v([0,e.charCodeAt(c+13)],40));case 13:u=h(u,v([0,e.charCodeAt(c+12)],32));case 12:u=h(u,v([0,e.charCodeAt(c+11)],24));case 11:u=h(u,v([0,e.charCodeAt(c+10)],16));case 10:u=h(u,v([0,e.charCodeAt(c+9)],8));case 9:u=h(u,[0,e.charCodeAt(c+8)]);u=f(u,l);u=g(u,33);u=f(u,s);i=h(i,u);case 8:o=h(o,v([0,e.charCodeAt(c+7)],56));case 7:o=h(o,v([0,e.charCodeAt(c+6)],48));case 6:o=h(o,v([0,e.charCodeAt(c+5)],40));case 5:o=h(o,v([0,e.charCodeAt(c+4)],32));case 4:o=h(o,v([0,e.charCodeAt(c+3)],24));case 3:o=h(o,v([0,e.charCodeAt(c+2)],16));case 2:o=h(o,v([0,e.charCodeAt(c+1)],8));case 1:o=h(o,[0,e.charCodeAt(c)]);o=f(o,s);o=g(o,31);o=f(o,l);n=h(n,o)}n=h(n,[0,e.length]);i=h(i,[0,e.length]);n=d(n,i);i=d(i,n);n=m(n);i=m(i);n=d(n,i);i=d(i,n);return("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)};var e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:true},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:false},screen:{detectScreenOrientation:true},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:false},extraComponents:[],excludes:{enumerateDevices:true,pixelRatio:true,doNotTrack:true,fontsFlash:true},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"};var p=function(e,r){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach){e.forEach(r)}else if(e.length===+e.length){for(var t=0,a=e.length;t<a;t++){r(e[t],t,e)}}else{for(var n in e){if(e.hasOwnProperty(n)){r(e[n],n,e)}}}};var s=function(e,a){var n=[];if(e==null){return n}if(Array.prototype.map&&e.map===Array.prototype.map){return e.map(a)}p(e,function(e,r,t){n.push(a(e,r,t))});return n};var r=function(e,r){if(r==null){return e}var t;var a;for(a in r){t=r[a];if(t!=null&&!Object.prototype.hasOwnProperty.call(e,a)){e[a]=t}}return e};var t=function(r,e){if(!a()){return r(e.NOT_AVAILABLE)}navigator.mediaDevices.enumerateDevices().then(function(e){r(e.map(function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}))})["catch"](function(e){r(e)})};var a=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices};var n=function(t,e){var r=e.audio;if(r.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)){return t(e.EXCLUDED)}var a=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(a==null){return t(e.NOT_AVAILABLE)}var n=new a(1,44100,44100);var i=n.createOscillator();i.type="triangle";i.frequency.setValueAtTime(1e4,n.currentTime);var o=n.createDynamicsCompressor();p([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){if(o[e[0]]!==undefined&&typeof o[e[0]].setValueAtTime==="function"){o[e[0]].setValueAtTime(e[1],n.currentTime)}});i.connect(o);o.connect(n.destination);i.start(0);n.startRendering();var u=setTimeout(function(){console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".');n.oncomplete=function(){};n=null;return t("audioTimeout")},r.timeout);n.oncomplete=function(e){var r;try{clearTimeout(u);r=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,r){return e+Math.abs(r)},0).toString();i.disconnect();o.disconnect()}catch(e){t(e);return}t(r)}};var i=function(e){e(navigator.userAgent)};var o=function(e,r){e(navigator.webdriver==null?r.NOT_AVAILABLE:navigator.webdriver)};var l=function(e,r){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||r.NOT_AVAILABLE)};var c=function(e,r){e(window.screen.colorDepth||r.NOT_AVAILABLE)};var T=function(e,r){e(navigator.deviceMemory||r.NOT_AVAILABLE)};var A=function(e,r){e(window.devicePixelRatio||r.NOT_AVAILABLE)};var S=function(e,r){e(w(r))};var w=function(e){var r=[window.screen.width,window.screen.height];if(e.screen.detectScreenOrientation){r.sort().reverse()}return r};var y=function(e,r){e(C(r))};var C=function(e){if(window.screen.availWidth&&window.screen.availHeight){var r=[window.screen.availHeight,window.screen.availWidth];if(e.screen.detectScreenOrientation){r.sort().reverse()}return r}return e.NOT_AVAILABLE};var B=function(e){e((new Date).getTimezoneOffset())};var x=function(e,r){if(window.Intl&&window.Intl.DateTimeFormat){e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone);return}e(r.NOT_AVAILABLE)};var E=function(e,r){e(q(r))};var O=function(e,r){e(Y(r))};var M=function(e,r){e(Q(r))};var b=function(e){e(!!(document.body&&document.body.addBehavior))};var P=function(e){e(!!window.openDatabase)};var k=function(e,r){e(ee(r))};var L=function(e,r){e(re(r))};var I=function(e,r){e(te(r))};var R=function(e,r){if(fe()){e(ne(r));return}e(r.NOT_AVAILABLE)};var D=function(e,r){if(ge()){e(ie());return}e(r.NOT_AVAILABLE)};var N=function(e){if(ge()){e(oe());return}e()};var _=function(e){e(ue())};var F=function(e){e(se())};var G=function(e){e(le())};var U=function(e){e(ce())};var V=function(e){e(de())};var H=function(r,e){if(!he()){return r("swf object not loaded")}if(!me()){return r("flash not installed")}if(!e.fonts.swfPath){return r("missing options.fonts.swfPath")}Te(function(e){r(e)},e)};var W=function(e,r){var u=["monospace","sans-serif","serif"];var s=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];if(r.fonts.extendedJsFonts){var t=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];s=s.concat(t)}s=s.concat(r.fonts.userDefinedFonts);s=s.filter(function(e,r){return s.indexOf(e)===r});var a="mmmmmmmmmmlli";var n="72px";var i=document.getElementsByTagName("body")[0];var o=document.createElement("div");var l=document.createElement("div");var c={};var d={};var f=function(){var e=document.createElement("span");e.style.position="absolute";e.style.left="-9999px";e.style.fontSize=n;e.style.fontStyle="normal";e.style.fontWeight="normal";e.style.letterSpacing="normal";e.style.lineBreak="auto";e.style.lineHeight="normal";e.style.textTransform="none";e.style.textAlign="left";e.style.textDecoration="none";e.style.textShadow="none";e.style.whiteSpace="normal";e.style.wordBreak="normal";e.style.wordSpacing="normal";e.innerHTML=a;return e};var g=function(e,r){var t=f();t.style.fontFamily="'"+e+"',"+r;return t};var v=function(){var e=[];for(var r=0,t=u.length;r<t;r++){var a=f();a.style.fontFamily=u[r];o.appendChild(a);e.push(a)}return e};var h=function(){var e={};for(var r=0,t=s.length;r<t;r++){var a=[];for(var n=0,i=u.length;n<i;n++){var o=g(s[r],u[n]);l.appendChild(o);a.push(o)}e[s[r]]=a}return e};var m=function(e){var r=false;for(var t=0;t<u.length;t++){r=e[t].offsetWidth!==c[u[t]]||e[t].offsetHeight!==d[u[t]];if(r){return r}}return r};var p=v();i.appendChild(o);for(var T=0,A=u.length;T<A;T++){c[u[T]]=p[T].offsetWidth;d[u[T]]=p[T].offsetHeight}var S=h();i.appendChild(l);var w=[];for(var y=0,C=s.length;y<C;y++){if(m(S[s[y]])){w.push(s[y])}}i.removeChild(l);i.removeChild(o);e(w)};var X=function(e,r){if(ve()){if(!r.plugins.excludeIE){e(K(r))}else{e(r.EXCLUDED)}}else{e(j(r))}};var j=function(e){if(navigator.plugins==null){return e.NOT_AVAILABLE}var r=[];for(var t=0,a=navigator.plugins.length;t<a;t++){if(navigator.plugins[t]){r.push(navigator.plugins[t])}}if(z(e)){r=r.sort(function(e,r){if(e.name>r.name){return 1}if(e.name<r.name){return-1}return 0})}return s(r,function(e){var r=s(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,r]})};var K=function(r){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=s(t,function(e){try{new window.ActiveXObject(e);return e}catch(e){return r.ERROR}})}else{e.push(r.NOT_AVAILABLE)}if(navigator.plugins){e=e.concat(j(r))}return e};var z=function(e){var r=false;for(var t=0,a=e.plugins.sortPluginsFor.length;t<a;t++){var n=e.plugins.sortPluginsFor[t];if(navigator.userAgent.match(n)){r=true;break}}return r};var Z=function(e){e(ae())};var J=function(e,r){e($(r))};var q=function(r){try{return!!window.sessionStorage}catch(e){return r.ERROR}};var Y=function(r){try{return!!window.localStorage}catch(e){return r.ERROR}};var Q=function(r){try{return!!window.indexedDB}catch(e){return r.ERROR}};var $=function(e){if(navigator.hardwareConcurrency){return navigator.hardwareConcurrency}return e.NOT_AVAILABLE};var ee=function(e){return navigator.cpuClass||e.NOT_AVAILABLE};var re=function(e){if(navigator.platform){return navigator.platform}else{return e.NOT_AVAILABLE}};var te=function(e){if(navigator.doNotTrack){return navigator.doNotTrack}else if(navigator.msDoNotTrack){return navigator.msDoNotTrack}else if(window.doNotTrack){return window.doNotTrack}else{return e.NOT_AVAILABLE}};var ae=function(){var e=0;var r;if(typeof navigator.maxTouchPoints!=="undefined"){e=navigator.maxTouchPoints}else if(typeof navigator.msMaxTouchPoints!=="undefined"){e=navigator.msMaxTouchPoints}try{document.createEvent("TouchEvent");r=true}catch(e){r=false}var t="ontouchstart"in window;return[e,r,t]};var ne=function(e){var r=[];var t=document.createElement("canvas");t.width=2e3;t.height=200;t.style.display="inline";var a=t.getContext("2d");a.rect(0,0,10,10);a.rect(2,2,6,6);r.push("canvas winding:"+(a.isPointInPath(5,5,"evenodd")===false?"yes":"no"));a.textBaseline="alphabetic";a.fillStyle="#f60";a.fillRect(125,1,62,20);a.fillStyle="#069";if(e.dontUseFakeFontInCanvas){a.font="11pt Arial"}else{a.font="11pt no-real-font-123"}a.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15);a.fillStyle="rgba(102, 204, 0, 0.2)";a.font="18pt Arial";a.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45);a.globalCompositeOperation="multiply";a.fillStyle="rgb(255,0,255)";a.beginPath();a.arc(50,50,50,0,Math.PI*2,true);a.closePath();a.fill();a.fillStyle="rgb(0,255,255)";a.beginPath();a.arc(100,50,50,0,Math.PI*2,true);a.closePath();a.fill();a.fillStyle="rgb(255,255,0)";a.beginPath();a.arc(75,100,50,0,Math.PI*2,true);a.closePath();a.fill();a.fillStyle="rgb(255,0,255)";a.arc(75,75,75,0,Math.PI*2,true);a.arc(75,75,25,0,Math.PI*2,true);a.fill("evenodd");if(t.toDataURL){r.push("canvas fp:"+t.toDataURL())}return r};var ie=function(){var o;var e=function(e){o.clearColor(0,0,0,1);o.enable(o.DEPTH_TEST);o.depthFunc(o.LEQUAL);o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);return"["+e[0]+", "+e[1]+"]"};var r=function(e){var r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(r){var t=e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);if(t===0){t=2}return t}else{return null}};o=Ae();if(!o){return null}var u=[];var t="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";var a="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";var n=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,n);var i=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);o.bufferData(o.ARRAY_BUFFER,i,o.STATIC_DRAW);n.itemSize=3;n.numItems=3;var s=o.createProgram();var l=o.createShader(o.VERTEX_SHADER);o.shaderSource(l,t);o.compileShader(l);var c=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(c,a);o.compileShader(c);o.attachShader(s,l);o.attachShader(s,c);o.linkProgram(s);o.useProgram(s);s.vertexPosAttrib=o.getAttribLocation(s,"attrVertex");s.offsetUniform=o.getUniformLocation(s,"uniformOffset");o.enableVertexAttribArray(s.vertexPosArray);o.vertexAttribPointer(s.vertexPosAttrib,n.itemSize,o.FLOAT,!1,0,0);o.uniform2f(s.offsetUniform,1,1);o.drawArrays(o.TRIANGLE_STRIP,0,n.numItems);try{u.push(o.canvas.toDataURL())}catch(e){}u.push("extensions:"+(o.getSupportedExtensions()||[]).join(";"));u.push("webgl aliased line width range:"+e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE)));u.push("webgl aliased point size range:"+e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE)));u.push("webgl alpha bits:"+o.getParameter(o.ALPHA_BITS));u.push("webgl antialiasing:"+(o.getContextAttributes().antialias?"yes":"no"));u.push("webgl blue bits:"+o.getParameter(o.BLUE_BITS));u.push("webgl depth bits:"+o.getParameter(o.DEPTH_BITS));u.push("webgl green bits:"+o.getParameter(o.GREEN_BITS));u.push("webgl max anisotropy:"+r(o));u.push("webgl max combined texture image units:"+o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS));u.push("webgl max cube map texture size:"+o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE));u.push("webgl max fragment uniform vectors:"+o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS));u.push("webgl max render buffer size:"+o.getParameter(o.MAX_RENDERBUFFER_SIZE));u.push("webgl max texture image units:"+o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS));u.push("webgl max texture size:"+o.getParameter(o.MAX_TEXTURE_SIZE));u.push("webgl max varying vectors:"+o.getParameter(o.MAX_VARYING_VECTORS));u.push("webgl max vertex attribs:"+o.getParameter(o.MAX_VERTEX_ATTRIBS));u.push("webgl max vertex texture image units:"+o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS));u.push("webgl max vertex uniform vectors:"+o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS));u.push("webgl max viewport dims:"+e(o.getParameter(o.MAX_VIEWPORT_DIMS)));u.push("webgl red bits:"+o.getParameter(o.RED_BITS));u.push("webgl renderer:"+o.getParameter(o.RENDERER));u.push("webgl shading language version:"+o.getParameter(o.SHADING_LANGUAGE_VERSION));u.push("webgl stencil bits:"+o.getParameter(o.STENCIL_BITS));u.push("webgl vendor:"+o.getParameter(o.VENDOR));u.push("webgl version:"+o.getParameter(o.VERSION));try{var d=o.getExtension("WEBGL_debug_renderer_info");if(d){u.push("webgl unmasked vendor:"+o.getParameter(d.UNMASKED_VENDOR_WEBGL));u.push("webgl unmasked renderer:"+o.getParameter(d.UNMASKED_RENDERER_WEBGL))}}catch(e){}if(!o.getShaderPrecisionFormat){Se(o);return u}p(["FLOAT","INT"],function(i){p(["VERTEX","FRAGMENT"],function(n){p(["HIGH","MEDIUM","LOW"],function(a){p(["precision","rangeMin","rangeMax"],function(e){var r=o.getShaderPrecisionFormat(o[n+"_SHADER"],o[a+"_"+i])[e];if(e!=="precision"){e="precision "+e}var t=["webgl ",n.toLowerCase()," shader ",a.toLowerCase()," ",i.toLowerCase()," ",e,":",r].join("");u.push(t)})})})});Se(o);return u};var oe=function(){try{var e=Ae();var r=e.getExtension("WEBGL_debug_renderer_info");var t=e.getParameter(r.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(r.UNMASKED_RENDERER_WEBGL);Se(e);return t}catch(e){return null}};var ue=function(){var e=document.createElement("div");e.innerHTML="&nbsp;";e.className="adsbox";var r=false;try{document.body.appendChild(e);r=document.getElementsByClassName("adsbox")[0].offsetHeight===0;document.body.removeChild(e)}catch(e){r=false}return r};var se=function(){if(typeof navigator.languages!=="undefined"){try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2)){return true}}catch(e){return true}}return false};var le=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight};var ce=function(){var e=navigator.userAgent.toLowerCase();var r=navigator.oscpu;var t=navigator.platform.toLowerCase();var a;if(e.indexOf("windows phone")>=0){a="Windows Phone"}else if(e.indexOf("windows")>=0||e.indexOf("win16")>=0||e.indexOf("win32")>=0||e.indexOf("win64")>=0||e.indexOf("win95")>=0||e.indexOf("win98")>=0||e.indexOf("winnt")>=0||e.indexOf("wow64")>=0){a="Windows"}else if(e.indexOf("android")>=0){a="Android"}else if(e.indexOf("linux")>=0||e.indexOf("cros")>=0||e.indexOf("x11")>=0){a="Linux"}else if(e.indexOf("iphone")>=0||e.indexOf("ipad")>=0||e.indexOf("ipod")>=0||e.indexOf("crios")>=0||e.indexOf("fxios")>=0){a="iOS"}else if(e.indexOf("macintosh")>=0||e.indexOf("mac_powerpc)")>=0){a="Mac"}else{a="Other"}var n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(n&&a!=="Windows"&&a!=="Windows Phone"&&a!=="Android"&&a!=="iOS"&&a!=="Other"&&e.indexOf("cros")===-1){return true}if(typeof r!=="undefined"){r=r.toLowerCase();if(r.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone"){return true}else if(r.indexOf("linux")>=0&&a!=="Linux"&&a!=="Android"){return true}else if(r.indexOf("mac")>=0&&a!=="Mac"&&a!=="iOS"){return true}else if((r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!==(a==="Other")){return true}}if(t.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone"){return true}else if((t.indexOf("linux")>=0||t.indexOf("android")>=0||t.indexOf("pike")>=0)&&a!=="Linux"&&a!=="Android"){return true}else if((t.indexOf("mac")>=0||t.indexOf("ipad")>=0||t.indexOf("ipod")>=0||t.indexOf("iphone")>=0)&&a!=="Mac"&&a!=="iOS"){return true}else if(t.indexOf("arm")>=0&&a==="Windows Phone"){return false}else if(t.indexOf("pike")>=0&&e.indexOf("opera mini")>=0){return false}else{var i=t.indexOf("win")<0&&t.indexOf("linux")<0&&t.indexOf("mac")<0&&t.indexOf("iphone")<0&&t.indexOf("ipad")<0&&t.indexOf("ipod")<0;if(i!==(a==="Other")){return true}}return typeof navigator.plugins==="undefined"&&a!=="Windows"&&a!=="Windows Phone"};var de=function(){var e=navigator.userAgent.toLowerCase();var r=navigator.productSub;var t;if(e.indexOf("edge/")>=0||e.indexOf("iemobile/")>=0){return false}else if(e.indexOf("opera mini")>=0){return false}else if(e.indexOf("firefox/")>=0){t="Firefox"}else if(e.indexOf("opera/")>=0||e.indexOf(" opr/")>=0){t="Opera"}else if(e.indexOf("chrome/")>=0){t="Chrome"}else if(e.indexOf("safari/")>=0){if(e.indexOf("android 1.")>=0||e.indexOf("android 2.")>=0||e.indexOf("android 3.")>=0||e.indexOf("android 4.")>=0){t="AOSP"}else{t="Safari"}}else if(e.indexOf("trident/")>=0){t="Internet Explorer"}else{t="Other"}if((t==="Chrome"||t==="Safari"||t==="Opera")&&r!=="20030107"){return true}var a=eval.toString().length;if(a===37&&t!=="Safari"&&t!=="Firefox"&&t!=="Other"){return true}else if(a===39&&t!=="Internet Explorer"&&t!=="Other"){return true}else if(a===33&&t!=="Chrome"&&t!=="AOSP"&&t!=="Opera"&&t!=="Other"){return true}var n;try{throw"a"}catch(e){try{e.toSource();n=true}catch(e){n=false}}return n&&t!=="Firefox"&&t!=="Other"};var fe=function(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))};var ge=function(){if(!fe()){return false}var e=Ae();var r=!!window.WebGLRenderingContext&&!!e;Se(e);return r};var ve=function(){if(navigator.appName==="Microsoft Internet Explorer"){return true}else if(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent)){return true}return false};var he=function(){return typeof window.swfobject!=="undefined"};var me=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")};var pe=function(e){var r=document.createElement("div");r.setAttribute("id",e.fonts.swfContainerId);document.body.appendChild(r)};var Te=function(r,e){var t="___fp_swf_loaded";window[t]=function(e){r(e)};var a=e.fonts.swfContainerId;pe();var n={onReady:t};var i={allowScriptAccess:"always",menu:"false"};window.swfobject.embedSWF(e.fonts.swfPath,a,"1","1","9.0.0",false,n,i,{})};var Ae=function(){var e=document.createElement("canvas");var r=null;try{r=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}if(!r){r=null}return r};var Se=function(e){var r=e.getExtension("WEBGL_lose_context");if(r!=null){r.loseContext()}};var we=[{key:"userAgent",getData:i},{key:"webdriver",getData:o},{key:"language",getData:l},{key:"colorDepth",getData:c},{key:"deviceMemory",getData:T},{key:"pixelRatio",getData:A},{key:"hardwareConcurrency",getData:J},{key:"screenResolution",getData:S},{key:"availableScreenResolution",getData:y},{key:"timezoneOffset",getData:B},{key:"timezone",getData:x},{key:"sessionStorage",getData:E},{key:"localStorage",getData:O},{key:"indexedDb",getData:M},{key:"addBehavior",getData:b},{key:"openDatabase",getData:P},{key:"cpuClass",getData:k},{key:"platform",getData:L},{key:"doNotTrack",getData:I},{key:"plugins",getData:X},{key:"canvas",getData:R},{key:"webgl",getData:D},{key:"webglVendorAndRenderer",getData:N},{key:"adBlock",getData:_},{key:"hasLiedLanguages",getData:F},{key:"hasLiedResolution",getData:G},{key:"hasLiedOs",getData:U},{key:"hasLiedBrowser",getData:V},{key:"touchSupport",getData:Z},{key:"fonts",getData:W,pauseBefore:true},{key:"fontsFlash",getData:H,pauseBefore:true},{key:"audio",getData:n},{key:"enumerateDevices",getData:t}];var ye=function(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")};ye.get=function(t,a){if(!a){a=t;t={}}else if(!t){t={}}r(t,e);t.components=t.extraComponents.concat(we);var n={data:[],addPreprocessedComponent:function(e,r){if(typeof t.preprocessor==="function"){r=t.preprocessor(e,r)}n.data.push({key:e,value:r})}};var i=-1;var o=function(e){i+=1;if(i>=t.components.length){a(n.data);return}var r=t.components[i];if(t.excludes[r.key]){o(false);return}if(!e&&r.pauseBefore){i-=1;setTimeout(function(){o(true)},1);return}try{r.getData(function(e){n.addPreprocessedComponent(r.key,e);o(false)},t)}catch(e){n.addPreprocessedComponent(r.key,String(e));o(false)}};o(false)};ye.getPromise=function(t){return new Promise(function(e,r){ye.get(t,e)})};ye.getV18=function(i,o){if(o==null){o=i;i={}}return ye.get(i,function(e){var r=[];for(var t=0;t<e.length;t++){var a=e[t];if(a.value===(i.NOT_AVAILABLE||"not available")){r.push({key:a.key,value:"unknown"})}else if(a.key==="plugins"){r.push({key:"plugins",value:s(a.value,function(e){var r=s(e[2],function(e){if(e.join){return e.join("~")}return e}).join(",");return[e[0],e[1],r].join("::")})})}else if(["canvas","webgl"].indexOf(a.key)!==-1&&Array.isArray(a.value)){r.push({key:a.key,value:a.value.join("~")})}else if(["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(a.key)!==-1){if(a.value){r.push({key:a.key,value:1})}else{continue}}else{if(a.value){r.push(a.value.join?{key:a.key,value:a.value.join(";")}:a)}else{r.push({key:a.key,value:a.value})}}}var n=u(s(r,function(e){return e.value}).join("~~~"),31);o(n,r)})};ye.x64hash128=u;ye.VERSION="2.1.2";return ye});(function(e,r,t){"use strict";if(typeof window!=="undefined"&&typeof define==="function"&&define.amd){define(t)}else if(typeof module!=="undefined"&&module.exports){module.exports=t()}else if(r.exports){r.exports=t()}else{r[e]=t()}})("fp",this,function(){var u=(new Date).valueOf();var i={excludes:{userAgent:true,enumerateDevices:true,pixelRatio:true,doNotTrack:true,fontsFlash:true,fonts:true,language:true,availableScreenResolution:true,timezoneOffset:true,timezone:true,plugins:true,canvas:true,webgl:true,adBlock:true,audio:true}};var n={excludes:{enumerateDevices:true,pixelRatio:true,doNotTrack:true,fontsFlash:true,fonts:true,language:true,availableScreenResolution:true,timezoneOffset:true,timezone:true,plugins:true,adBlock:true}};var e={excludes:{enumerateDevices:true,pixelRatio:true,doNotTrack:true,fontsFlash:true,fonts:true,adBlock:true}};var a=function(e){if(window.requestIdleCallback){requestIdleCallback(function(){e()})}else{setTimeout(e,500)}};var o=function(e,r,t,a,n){var i=Fingerprint2.x64hash128(JSON.stringify(t),15).substring(0,2);var o=i+r+e;console.log("\n"+" %c fp v3.0.3 %c "+o+"::"+((new Date).valueOf()-u)+"ms %c https://fp.yimian.xyz/ \n","color: #00FFFF; background: #030307; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #4682B4; padding:5px 0;");a(o)};var s=function(e,t,r,a){var n=Fingerprint2.x64hash128(JSON.stringify(t),15).substring(0,2);t.forEach(function(e,r){if(i.excludes.hasOwnProperty(e.key)){t.splice(r,1)}});o(e,n,t,r,a)};var l=function(t,e,r){var a=Fingerprint2.x64hash128(JSON.stringify(t),15).substring(0,2);t.forEach(function(e,r){if(n.excludes.hasOwnProperty(e.key)){t.splice(r,1)}});s(a,t,e,r)};return new Promise(function(r,t){a(function(){u=(new Date).valueOf();Fingerprint2.get(e,function(e){l(e,r,t)})})})});(function(e,r,t){"use strict";if(typeof window!=="undefined"&&typeof define==="function"&&define.amd){define(t)}else if(typeof module!=="undefined"&&module.exports){module.exports=t()}else if(r.exports){r.exports=t()}else{r[e]=t()}})("fp_details",this,function(){var t={excludes:{}};var a=function(e){if(window.requestIdleCallback){requestIdleCallback(function(){e()})}else{setTimeout(e,500)}};return new Promise(function(r,e){a(function(){Fingerprint2.get(t,function(e){r(e)})})})});
//# sourceMappingURL=dist/fp.min.js.map

try{
/* reconnecting-websocket@joewalnes v1.0.0 */
!function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.ReconnectingWebSocket=b()}(this,function(){function a(b,c,d){function l(a,b){var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,!1,!1,b),c}var e={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3};d||(d={});for(var f in e)this[f]="undefined"!=typeof d[f]?d[f]:e[f];this.url=b,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var h,g=this,i=!1,j=!1,k=document.createElement("div");k.addEventListener("open",function(a){g.onopen(a)}),k.addEventListener("close",function(a){g.onclose(a)}),k.addEventListener("connecting",function(a){g.onconnecting(a)}),k.addEventListener("message",function(a){g.onmessage(a)}),k.addEventListener("error",function(a){g.onerror(a)}),this.addEventListener=k.addEventListener.bind(k),this.removeEventListener=k.removeEventListener.bind(k),this.dispatchEvent=k.dispatchEvent.bind(k),this.open=function(b){h=new WebSocket(g.url,c||[]),b||k.dispatchEvent(l("connecting")),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",g.url);var d=h,e=setTimeout(function(){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",g.url),j=!0,d.close(),j=!1},g.timeoutInterval);h.onopen=function(){clearTimeout(e),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onopen",g.url),g.protocol=h.protocol,g.readyState=WebSocket.OPEN,g.reconnectAttempts=0;var d=l("open");d.isReconnect=b,b=!1,k.dispatchEvent(d)},h.onclose=function(c){if(clearTimeout(e),h=null,i)g.readyState=WebSocket.CLOSED,k.dispatchEvent(l("close"));else{g.readyState=WebSocket.CONNECTING;var d=l("connecting");d.code=c.code,d.reason=c.reason,d.wasClean=c.wasClean,k.dispatchEvent(d),b||j||((g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onclose",g.url),k.dispatchEvent(l("close")));var e=g.reconnectInterval*Math.pow(g.reconnectDecay,g.reconnectAttempts);setTimeout(function(){g.reconnectAttempts++,g.open(!0)},e>g.maxReconnectInterval?g.maxReconnectInterval:e)}},h.onmessage=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",g.url,b.data);var c=l("message");c.data=b.data,k.dispatchEvent(c)},h.onerror=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onerror",g.url,b),k.dispatchEvent(l("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(b){if(h)return(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","send",g.url,b),h.send(b);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(a,b){"undefined"==typeof a&&(a=1e3),i=!0,h&&h.close(a,b)},this.refresh=function(){h&&h.close()}}return a.prototype.onopen=function(){},a.prototype.onclose=function(){},a.prototype.onconnecting=function(){},a.prototype.onmessage=function(){},a.prototype.onerror=function(){},a.debugAll=!1,a.CONNECTING=WebSocket.CONNECTING,a.OPEN=WebSocket.OPEN,a.CLOSING=WebSocket.CLOSING,a.CLOSED=WebSocket.CLOSED,a});
}catch(e){}

/* aplayer */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("APlayer",[],t):"object"==typeof exports?exports.APlayer=t():e.APlayer=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=41)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=/mobile/i.test(window.navigator.userAgent),a={secondToTime:function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),i=Math.floor(e-3600*t-60*n);return(t>0?[t,n,i]:[n,i]).map(function(e){return e<10?"0"+e:""+e}).join(":")},getElementViewLeft:function(e){var t=e.offsetLeft,n=e.offsetParent,i=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==n&&n!==e;)t+=n.offsetLeft,n=n.offsetParent;else for(;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t-i},getElementViewTop:function(e,t){for(var n,i=e.offsetTop,a=e.offsetParent;null!==a;)i+=a.offsetTop,a=a.offsetParent;return n=document.body.scrollTop+document.documentElement.scrollTop,t?i:i-n},isMobile:i,storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},nameMap:{dragStart:i?"touchstart":"mousedown",dragMove:i?"touchmove":"mousemove",dragEnd:i?"touchend":"mouseup"},randomOrder:function(e){return function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[n];e[n]=e[t],e[t]=i}return e}([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(e))).map(function(e,t){return t}))}};t.default=a},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";e=e||{};var t="",n=i.$each,a=e.audio,r=(e.$value,e.$index,i.$escape),o=e.theme,s=e.index;return n(a,function(e,n){t+='\n<li>\n    <span class="aplayer-list-cur" style="background-color: ',t+=r(e.theme||o),t+=';"></span>\n    <span class="aplayer-list-index">',t+=r(n+s),t+='</span>\n    <span class="aplayer-list-title">',t+=r(e.name),t+='</span>\n    <span class="aplayer-list-author">',t+=r(e.artist),t+="</span>\n</li>\n"}),t}},function(e,t,n){"use strict";e.exports=n(15)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=g(n(33)),a=g(n(32)),r=g(n(31)),o=g(n(30)),s=g(n(29)),l=g(n(28)),u=g(n(27)),c=g(n(26)),p=g(n(25)),d=g(n(24)),h=g(n(23)),y=g(n(22)),f=g(n(21)),v=g(n(20)),m=g(n(19));function g(e){return e&&e.__esModule?e:{default:e}}var w={play:i.default,pause:a.default,volumeUp:r.default,volumeDown:o.default,volumeOff:s.default,orderRandom:l.default,orderList:u.default,menu:c.default,loopAll:p.default,loopOne:d.default,loopNone:h.default,loading:y.default,right:f.default,skip:v.default,lrc:m.default};t.default=w},function(e,t,n){"use strict";var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(i=window)}e.exports=i},function(e,t,n){"use strict";var i,a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};void 0===(a="function"==typeof(i=function(){if("object"===("undefined"==typeof window?"undefined":r(window))&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var e=function(e,t,n,i){return n>i?t:e+(t-e)*((a=n/i)<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1);var a},t=function(t,n,i,a){n=n||500;var r=(a=a||window).scrollTop||window.pageYOffset;if("number"==typeof t)var o=parseInt(t);else var o=function(e,t){return"HTML"===e.nodeName?-t:e.getBoundingClientRect().top+t}(t,r);var s=Date.now(),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)};!function u(){var c=Date.now()-s;a!==window?a.scrollTop=e(r,o,c,n):window.scroll(0,e(r,o,c,n)),c>n?"function"==typeof i&&i(t):l(u)}()},n=function(e){if(!e.defaultPrevented){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var n=document.getElementById(this.hash.substring(1));if(!n)return;t(n,500,function(e){location.replace("#"+e.id)})}};return document.addEventListener("DOMContentLoaded",function(){for(var e,t=document.querySelectorAll('a[href^="#"]:not([href="#"])'),i=t.length;e=t[--i];)e.addEventListener("click",n,!1)}),t}})?i.call(t,n,t,e):i)||(e.exports=a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=s(n(1)),r=s(n(0)),o=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.index=0,this.audios=this.player.options.audio,this.bindEvents()}return i(e,[{key:"bindEvents",value:function(){var e=this;this.player.template.list.addEventListener("click",function(t){var n=void 0;n="LI"===t.target.tagName.toUpperCase()?t.target:t.target.parentElement;var i=parseInt(n.getElementsByClassName("aplayer-list-index")[0].innerHTML)-1;i!==e.index?(e.switch(i),e.player.play()):e.player.toggle()})}},{key:"show",value:function(){this.player.events.trigger("listshow"),this.player.template.list.classList.remove("aplayer-list-hide"),this.player.template.listOl.scrollTop=33*this.index}},{key:"hide",value:function(){this.player.events.trigger("listhide"),this.player.template.list.classList.add("aplayer-list-hide")}},{key:"toggle",value:function(){this.player.template.list.classList.contains("aplayer-list-hide")?this.show():this.hide()}},{key:"add",value:function(e){this.player.events.trigger("listadd",{audios:e}),"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),e.map(function(e){return e.name=e.name||e.title||"Audio name",e.artist=e.artist||e.author||"Audio artist",e.cover=e.cover||e.pic,e.type=e.type||"normal",e});var t=!(this.audios.length>1),n=0===this.audios.length;this.player.template.listOl.innerHTML+=(0,a.default)({theme:this.player.options.theme,audio:e,index:this.audios.length+1}),this.audios=this.audios.concat(e),t&&this.audios.length>1&&this.player.container.classList.add("aplayer-withlist"),this.player.randomOrder=r.default.randomOrder(this.audios.length),this.player.template.listCurs=this.player.container.querySelectorAll(".aplayer-list-cur"),this.player.template.listCurs[this.audios.length-1].style.backgroundColor=e.theme||this.player.options.theme,n&&("random"===this.player.options.order?this.switch(this.player.randomOrder[0]):this.switch(0))}},{key:"remove",value:function(e){if(this.player.events.trigger("listremove",{index:e}),this.audios[e])if(this.audios.length>1){var t=this.player.container.querySelectorAll(".aplayer-list li");t[e].remove(),this.audios.splice(e,1),this.player.lrc&&this.player.lrc.remove(e),e===this.index&&(this.audios[e]?this.switch(e):this.switch(e-1)),this.index>e&&this.index--;for(var n=e;n<t.length;n++)t[n].getElementsByClassName("aplayer-list-index")[0].textContent=n;1===this.audios.length&&this.player.container.classList.remove("aplayer-withlist"),this.player.template.listCurs=this.player.container.querySelectorAll(".aplayer-list-cur")}else this.clear()}},{key:"switch",value:function(e){if(this.player.events.trigger("listswitch",{index:e}),void 0!==e&&this.audios[e]){this.index=e;var t=this.audios[this.index];this.player.template.pic.style.backgroundImage=t.cover?"url('"+t.cover+"')":"",this.player.theme(this.audios[this.index].theme||this.player.options.theme,this.index,!1),this.player.template.title.innerHTML=t.name,this.player.template.author.innerHTML=t.artist?" - "+t.artist:"";var n=this.player.container.getElementsByClassName("aplayer-list-light")[0];n&&n.classList.remove("aplayer-list-light"),this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"),(0,o.default)(33*this.index,500,null,this.player.template.listOl),this.player.setAudio(t),this.player.lrc&&this.player.lrc.switch(this.index),this.player.lrc&&this.player.lrc.update(0),1!==this.player.duration&&(this.player.template.dtime.innerHTML=r.default.secondToTime(this.player.duration))}}},{key:"clear",value:function(){this.player.events.trigger("listclear"),this.index=0,this.player.container.classList.remove("aplayer-withlist"),this.player.pause(),this.audios=[],this.player.lrc&&this.player.lrc.clear(),this.player.audio.src="",this.player.template.listOl.innerHTML="",this.player.template.pic.style.backgroundImage="",this.player.theme(this.player.options.theme,this.index,!1),this.player.template.title.innerHTML="No audio",this.player.template.author.innerHTML="",this.player.bar.set("loaded",0,"width"),this.player.template.dtime.innerHTML=r.default.secondToTime(0)}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.audioEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["destroy","listshow","listhide","listadd","listremove","listswitch","listclear","noticeshow","noticehide","lrcshow","lrchide"]}return i(e,[{key:"on",value:function(e,t){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var n=0;n<this.events[e].length;n++)this.events[e][n](t)}},{key:"type",value:function(e){return-1!==this.playerEvents.indexOf(e)?"player":-1!==this.audioEvents.indexOf(e)?"audio":(console.error("Unknown event name: "+e),null)}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.types=["loading"],this.init()}return i(e,[{key:"init",value:function(){var e=this;this.types.forEach(function(t){e["init"+t+"Checker"]()})}},{key:"initloadingChecker",value:function(){var e=this,t=0,n=0,i=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(n=e.player.audio.currentTime,i||n!==t||e.player.audio.paused||(e.player.container.classList.add("aplayer-loading"),i=!0),i&&n>t&&!e.player.audio.paused&&(e.player.container.classList.remove("aplayer-loading"),i=!1),t=n)},100)}},{key:"enable",value:function(e){this["enable"+e+"Checker"]=!0,"fps"===e&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable"+e+"Checker"]=!1}},{key:"destroy",value:function(){var e=this;this.types.forEach(function(t){e["enable"+t+"Checker"]=!1,e[t+"Checker"]&&clearInterval(e[t+"Checker"])})}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=o(n(0)),r=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.initPlayButton(),this.initPlayBar(),this.initOrderButton(),this.initLoopButton(),this.initMenuButton(),a.default.isMobile||this.initVolumeButton(),this.initMiniSwitcher(),this.initSkipButton(),this.initLrcButton()}return i(e,[{key:"initPlayButton",value:function(){var e=this;this.player.template.pic.addEventListener("click",function(){e.player.toggle()})}},{key:"initPlayBar",value:function(){var e=this,t=function(t){var n=((t.clientX||t.changedTouches[0].clientX)-a.default.getElementViewLeft(e.player.template.barWrap))/e.player.template.barWrap.clientWidth;n=Math.max(n,0),n=Math.min(n,1),e.player.bar.set("played",n,"width"),e.player.lrc&&e.player.lrc.update(n*e.player.duration),e.player.template.ptime.innerHTML=a.default.secondToTime(n*e.player.duration)},n=function n(i){document.removeEventListener(a.default.nameMap.dragEnd,n),document.removeEventListener(a.default.nameMap.dragMove,t);var r=((i.clientX||i.changedTouches[0].clientX)-a.default.getElementViewLeft(e.player.template.barWrap))/e.player.template.barWrap.clientWidth;r=Math.max(r,0),r=Math.min(r,1),e.player.bar.set("played",r,"width"),e.player.seek(e.player.bar.get("played","width")*e.player.duration),e.player.disableTimeupdate=!1};this.player.template.barWrap.addEventListener(a.default.nameMap.dragStart,function(){e.player.disableTimeupdate=!0,document.addEventListener(a.default.nameMap.dragMove,t),document.addEventListener(a.default.nameMap.dragEnd,n)})}},{key:"initVolumeButton",value:function(){var e=this;this.player.template.volumeButton.addEventListener("click",function(){e.player.audio.muted?(e.player.audio.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"height")):(e.player.audio.muted=!0,e.player.switchVolumeIcon(),e.player.bar.set("volume",0,"height"))});var t=function(t){var n=1-((t.clientY||t.changedTouches[0].clientY)-a.default.getElementViewTop(e.player.template.volumeBar,e.player.options.fixed))/e.player.template.volumeBar.clientHeight;n=Math.max(n,0),n=Math.min(n,1),e.player.volume(n)},n=function n(i){e.player.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener(a.default.nameMap.dragEnd,n),document.removeEventListener(a.default.nameMap.dragMove,t);var r=1-((i.clientY||i.changedTouches[0].clientY)-a.default.getElementViewTop(e.player.template.volumeBar,e.player.options.fixed))/e.player.template.volumeBar.clientHeight;r=Math.max(r,0),r=Math.min(r,1),e.player.volume(r)};this.player.template.volumeBarWrap.addEventListener(a.default.nameMap.dragStart,function(){e.player.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener(a.default.nameMap.dragMove,t),document.addEventListener(a.default.nameMap.dragEnd,n)})}},{key:"initOrderButton",value:function(){var e=this;this.player.template.order.addEventListener("click",function(){"list"===e.player.options.order?(e.player.options.order="random",e.player.template.order.innerHTML=r.default.orderRandom):"random"===e.player.options.order&&(e.player.options.order="list",e.player.template.order.innerHTML=r.default.orderList)})}},{key:"initLoopButton",value:function(){var e=this;this.player.template.loop.addEventListener("click",function(){e.player.list.audios.length>1?"one"===e.player.options.loop?(e.player.options.loop="none",e.player.template.loop.innerHTML=r.default.loopNone):"none"===e.player.options.loop?(e.player.options.loop="all",e.player.template.loop.innerHTML=r.default.loopAll):"all"===e.player.options.loop&&(e.player.options.loop="one",e.player.template.loop.innerHTML=r.default.loopOne):"one"===e.player.options.loop||"all"===e.player.options.loop?(e.player.options.loop="none",e.player.template.loop.innerHTML=r.default.loopNone):"none"===e.player.options.loop&&(e.player.options.loop="all",e.player.template.loop.innerHTML=r.default.loopAll)})}},{key:"initMenuButton",value:function(){var e=this;this.player.template.menu.addEventListener("click",function(){e.player.list.toggle()})}},{key:"initMiniSwitcher",value:function(){var e=this;this.player.template.miniSwitcher.addEventListener("click",function(){e.player.setMode("mini"===e.player.mode?"normal":"mini")})}},{key:"initSkipButton",value:function(){var e=this;this.player.template.skipBackButton.addEventListener("click",function(){e.player.skipBack()}),this.player.template.skipForwardButton.addEventListener("click",function(){e.player.skipForward()}),this.player.template.skipPlayButton.addEventListener("click",function(){e.player.toggle()})}},{key:"initLrcButton",value:function(){var e=this;this.player.template.lrcButton.addEventListener("click",function(){e.player.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity")?(e.player.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"),e.player.lrc&&e.player.lrc.show()):(e.player.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"),e.player.lrc&&e.player.lrc.hide())})}}]),e}();t.default=s},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";e=e||{};var t="",n=i.$each,a=e.lyrics,r=(e.$value,e.$index,i.$escape);return n(a,function(e,n){t+="\n    <p",0===n&&(t+=' class="aplayer-lrc-current"'),t+=">",t+=r(e[1]),t+="</p>\n"}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(10),o=(i=r)&&i.__esModule?i:{default:i};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.async=t.async,this.player=t.player,this.parsed=[],this.index=0,this.current=[]}return a(e,[{key:"show",value:function(){this.player.events.trigger("lrcshow"),this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide")}},{key:"hide",value:function(){this.player.events.trigger("lrchide"),this.player.template.lrcWrap.classList.add("aplayer-lrc-hide")}},{key:"toggle",value:function(){this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide")?this.show():this.hide()}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.player.audio.currentTime;if(this.index>this.current.length-1||e<this.current[this.index][0]||!this.current[this.index+1]||e>=this.current[this.index+1][0])for(var t=0;t<this.current.length;t++)e>=this.current[t][0]&&(!this.current[t+1]||e<this.current[t+1][0])&&(this.index=t,this.container.style.transform="translateY("+16*-this.index+"px)",this.container.style.webkitTransform="translateY("+16*-this.index+"px)",this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),this.container.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))}},{key:"switch",value:function(e){var t=this;if(!this.parsed[e])if(this.async){this.parsed[e]=[["00:00","Loading"]];var n=new XMLHttpRequest;n.onreadystatechange=function(){e===t.player.list.index&&4===n.readyState&&(n.status>=200&&n.status<300||304===n.status?t.parsed[e]=t.parse(n.responseText):(t.player.notice("LRC file request fails: status "+n.status),t.parsed[e]=[["00:00","Not available"]]),t.container.innerHTML=(0,o.default)({lyrics:t.parsed[e]}),t.update(0),t.current=t.parsed[e])};var i=this.player.list.audios[e].lrc;n.open("get",i,!0),n.send(null)}else this.player.list.audios[e].lrc?this.parsed[e]=this.parse(this.player.list.audios[e].lrc):this.parsed[e]=[["00:00","Not available"]];this.container.innerHTML=(0,o.default)({lyrics:this.parsed[e]}),this.update(0),this.current=this.parsed[e]}},{key:"parse",value:function(e){if(e){for(var t=(e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["})).split("\n"),n=[],i=t.length,a=0;a<i;a++){var r=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),o=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r)for(var s=r.length,l=0;l<s;l++){var u=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[l]),c=60*u[1]+parseInt(u[2])+(u[4]?parseInt(u[4])/(2===(u[4]+"").length?100:1e3):0);n.push([c,o])}}return(n=n.filter(function(e){return e[1]})).sort(function(e,t){return e[0]-t[0]}),n}return[]}},{key:"remove",value:function(e){this.parsed.splice(e,1)}},{key:"clear",value:function(){this.parsed=[],this.container.innerHTML=""}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=(i=r)&&i.__esModule?i:{default:i};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storageName=t.options.storageName,this.data=JSON.parse(o.default.storage.get(this.storageName)),this.data||(this.data={}),this.data.volume=this.data.volume||t.options.volume}return a(e,[{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,t){this.data[e]=t,o.default.storage.set(this.storageName,JSON.stringify(this.data))}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements={},this.elements.volume=t.volume,this.elements.played=t.played,this.elements.loaded=t.loaded}return i(e,[{key:"set",value:function(e,t,n){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[n]=100*t+"%"}},{key:"get",value:function(e,t){return parseFloat(this.elements[e].style[t])/100}}]),e}();t.default=a},function(e,t,n){"use strict";(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(e){}}).call(this,n(4))},function(e,t,n){"use strict";(function(t){var i=n(14),a=Object.create(i?t:window),r=/["&'<>]/;a.$escape=function(e){return function(e){var t=""+e,n=r.exec(t);if(!n)return e;var i="",a=void 0,o=void 0,s=void 0;for(a=n.index,o=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}o!==a&&(i+=t.substring(o,a)),o=a+1,i+=s}return o!==a?i+t.substring(o,a):i}(function e(t){"string"!=typeof t&&(t=void 0===t||null===t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},a.$each=function(e,t){if(Array.isArray(e))for(var n=0,i=e.length;n<i;n++)t(e[n],n);else for(var a in e)t(e[a],a)},e.exports=a}).call(this,n(4))},function(e,t,n){var i=n(2);e.exports=function(e){"use strict";var t="",a=(e=e||{}).options,r=e.cover,o=i.$escape,s=e.icons,l=(arguments[1],function(e){return t+=e}),u=e.getObject;e.theme,e.audio,e.index;return a.fixed?(t+='\n<div class="aplayer-list',a.listFolded&&(t+=" aplayer-list-hide"),t+='"',a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n    <ol",a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n        ",l(n(1)(u({theme:a.theme,audio:a.audio,index:1}))),t+='\n    </ol>\n</div>\n<div class="aplayer-body">\n    <div class="aplayer-pic" style="',r&&(t+="background-image: url(&quot;",t+=o(r),t+="&quot;);"),t+="background-color: ",t+=o(a.theme),t+=';">\n        <div class="aplayer-button aplayer-play">',t+=s.play,t+='</div>\n    </div>\n    <div class="aplayer-info" style="display: none;">\n        <div class="aplayer-music">\n            <span class="aplayer-title">No audio</span>\n            <span class="aplayer-author"></span>\n        </div>\n        <div class="aplayer-controller">\n            <div class="aplayer-bar-wrap">\n                <div class="aplayer-bar">\n                    <div class="aplayer-loaded" style="width: 0"></div>\n                    <div class="aplayer-played" style="width: 0; background: ',t+=o(a.theme),t+=';">\n                        <span class="aplayer-thumb" style="background: ',t+=o(a.theme),t+=';">\n                            <span class="aplayer-loading-icon">',t+=s.loading,t+='</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-time">\n                <span class="aplayer-time-inner">\n                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                </span>\n                <span class="aplayer-icon aplayer-icon-back">\n                    ',t+=s.skip,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-play">\n                    ',t+=s.play,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-forward">\n                    ',t+=s.skip,t+='\n                </span>\n                <div class="aplayer-volume-wrap">\n                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">\n                        ',t+=s.volumeDown,t+='\n                    </button>\n                    <div class="aplayer-volume-bar-wrap">\n                        <div class="aplayer-volume-bar">\n                            <div class="aplayer-volume" style="height: 80%; background: ',t+=o(a.theme),t+=';"></div>\n                        </div>\n                    </div>\n                </div>\n                <button type="button" class="aplayer-icon aplayer-icon-order">\n                    ',"list"===a.order?t+=s.orderList:"random"===a.order&&(t+=s.orderRandom),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-loop">\n                    ',"one"===a.loop?t+=s.loopOne:"all"===a.loop?t+=s.loopAll:"none"===a.loop&&(t+=s.loopNone),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-menu">\n                    ',t+=s.menu,t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-lrc">\n                    ',t+=s.lrc,t+='\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class="aplayer-notice"></div>\n    <div class="aplayer-miniswitcher"><button class="aplayer-icon">',t+=s.right,t+='</button></div>\n</div>\n<div class="aplayer-lrc">\n    <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n</div>\n'):(t+='\n<div class="aplayer-body">\n    <div class="aplayer-pic" style="',r&&(t+="background-image: url(&quot;",t+=o(r),t+="&quot;);"),t+="background-color: ",t+=o(a.theme),t+=';">\n        <div class="aplayer-button aplayer-play">',t+=s.play,t+='</div>\n    </div>\n    <div class="aplayer-info">\n        <div class="aplayer-music">\n            <span class="aplayer-title">No audio</span>\n            <span class="aplayer-author"></span>\n        </div>\n        <div class="aplayer-lrc">\n            <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n        </div>\n        <div class="aplayer-controller">\n            <div class="aplayer-bar-wrap">\n                <div class="aplayer-bar">\n                    <div class="aplayer-loaded" style="width: 0"></div>\n                    <div class="aplayer-played" style="width: 0; background: ',t+=o(a.theme),t+=';">\n                        <span class="aplayer-thumb" style="background: ',t+=o(a.theme),t+=';">\n                            <span class="aplayer-loading-icon">',t+=s.loading,t+='</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-time">\n                <span class="aplayer-time-inner">\n                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                </span>\n                <span class="aplayer-icon aplayer-icon-back">\n                    ',t+=s.skip,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-play">\n                    ',t+=s.play,t+='\n                </span>\n                <span class="aplayer-icon aplayer-icon-forward">\n                    ',t+=s.skip,t+='\n                </span>\n                <div class="aplayer-volume-wrap">\n                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">\n                        ',t+=s.volumeDown,t+='\n                    </button>\n                    <div class="aplayer-volume-bar-wrap">\n                        <div class="aplayer-volume-bar">\n                            <div class="aplayer-volume" style="height: 80%; background: ',t+=o(a.theme),t+=';"></div>\n                        </div>\n                    </div>\n                </div>\n                <button type="button" class="aplayer-icon aplayer-icon-order">\n                    ',"list"===a.order?t+=s.orderList:"random"===a.order&&(t+=s.orderRandom),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-loop">\n                    ',"one"===a.loop?t+=s.loopOne:"all"===a.loop?t+=s.loopAll:"none"===a.loop&&(t+=s.loopNone),t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-menu">\n                    ',t+=s.menu,t+='\n                </button>\n                <button type="button" class="aplayer-icon aplayer-icon-lrc">\n                    ',t+=s.lrc,t+='\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class="aplayer-notice"></div>\n    <div class="aplayer-miniswitcher"><button class="aplayer-icon">',t+=s.right,t+='</button></div>\n</div>\n<div class="aplayer-list',a.listFolded&&(t+=" aplayer-list-hide"),t+='"',a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n    <ol",a.listMaxHeight&&(t+=' style="max-height: ',t+=o(a.listMaxHeight),t+='"'),t+=">\n        ",l(n(1)(u({theme:a.theme,audio:a.audio,index:1}))),t+="\n    </ol>\n</div>\n"),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=o(n(3)),r=o(n(16));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.randomOrder=t.randomOrder,this.init()}return i(e,[{key:"init",value:function(){var e="";this.options.audio.length&&(e="random"===this.options.order?this.options.audio[this.randomOrder[0]].cover:this.options.audio[0].cover),this.container.innerHTML=(0,r.default)({options:this.options,icons:a.default,cover:e,getObject:function(e){return e}}),this.lrc=this.container.querySelector(".aplayer-lrc-contents"),this.lrcWrap=this.container.querySelector(".aplayer-lrc"),this.ptime=this.container.querySelector(".aplayer-ptime"),this.info=this.container.querySelector(".aplayer-info"),this.time=this.container.querySelector(".aplayer-time"),this.barWrap=this.container.querySelector(".aplayer-bar-wrap"),this.button=this.container.querySelector(".aplayer-button"),this.body=this.container.querySelector(".aplayer-body"),this.list=this.container.querySelector(".aplayer-list"),this.listOl=this.container.querySelector(".aplayer-list ol"),this.listCurs=this.container.querySelectorAll(".aplayer-list-cur"),this.played=this.container.querySelector(".aplayer-played"),this.loaded=this.container.querySelector(".aplayer-loaded"),this.thumb=this.container.querySelector(".aplayer-thumb"),this.volume=this.container.querySelector(".aplayer-volume"),this.volumeBar=this.container.querySelector(".aplayer-volume-bar"),this.volumeButton=this.container.querySelector(".aplayer-time button"),this.volumeBarWrap=this.container.querySelector(".aplayer-volume-bar-wrap"),this.loop=this.container.querySelector(".aplayer-icon-loop"),this.order=this.container.querySelector(".aplayer-icon-order"),this.menu=this.container.querySelector(".aplayer-icon-menu"),this.pic=this.container.querySelector(".aplayer-pic"),this.title=this.container.querySelector(".aplayer-title"),this.author=this.container.querySelector(".aplayer-author"),this.dtime=this.container.querySelector(".aplayer-dtime"),this.notice=this.container.querySelector(".aplayer-notice"),this.miniSwitcher=this.container.querySelector(".aplayer-miniswitcher"),this.skipBackButton=this.container.querySelector(".aplayer-icon-back"),this.skipForwardButton=this.container.querySelector(".aplayer-icon-forward"),this.skipPlayButton=this.container.querySelector(".aplayer-icon-play"),this.lrcButton=this.container.querySelector(".aplayer-icon-lrc")}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={container:e.element||document.getElementsByClassName("aplayer")[0],mini:e.narrow||e.fixed||!1,fixed:!1,autoplay:!1,mutex:!0,lrcType:e.showlrc||e.lrc||0,preload:"auto",theme:"#b7daff",loop:"all",order:"list",volume:.7,listFolded:e.fixed,listMaxHeight:e.listmaxheight||"250px",audio:e.music||[],storageName:"aplayer-setting"};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return"[object Array]"!==Object.prototype.toString.call(e.audio)&&(e.audio=[e.audio]),e.audio.map(function(e){return e.name=e.name||e.title||"Audio name",e.artist=e.artist||e.author||"Audio artist",e.cover=e.cover||e.pic,e.type=e.type||"normal",e}),e.audio.length<=1&&"one"===e.loop&&(e.loop="all"),e}},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},function(e,t,n){"use strict";var i,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{a="function"==typeof clearTimeout?clearTimeout:s}catch(e){a=s}}();var u,c=[],p=!1,d=-1;function h(){p&&u&&(p=!1,u.length?c=u.concat(c):d=-1,c.length&&y())}function y(){if(!p){var e=l(h);p=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===s||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||p||l(y)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";(function(e,t){!function(e,n){if(!e.setImmediate){var i,a,r,o,s,l=1,u={},c=!1,p=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick(function(){y(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){y(e.data)},i=function(e){r.port2.postMessage(e)}):p&&"onreadystatechange"in p.createElement("script")?(a=p.documentElement,i=function(e){var t=p.createElement("script");t.onreadystatechange=function(){y(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):i=function(e){setTimeout(y,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&y(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),i=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return u[l]=a,i(l),l++},d.clearImmediate=h}function h(e){delete u[e]}function y(e){if(c)setTimeout(y,0,e);else{var t=u[e];if(t){c=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i)}}(t)}finally{h(e),c=!1}}}}}("undefined"==typeof self?void 0===e?void 0:e:self)}).call(this,n(4),n(34))},function(e,t,n){"use strict";var i=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(35),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=setTimeout;function a(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,i)}else(1===e._state?s:l)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":n(t))||"function"==typeof t)){var i=t.then;if(t instanceof r)return e._state=3,e._value=t,void u(e);if("function"==typeof i)return void c((a=i,o=t,function(){a.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var a,o}function l(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(a);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},r.all=function(e){return new r(function(t,i){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var a=Array.prototype.slice.call(e);if(0===a.length)return t([]);var r=a.length;function o(e,s){try{if(s&&("object"===(void 0===s?"undefined":n(s))||"function"==typeof s)){var l=s.then;if("function"==typeof l)return void l.call(s,function(t){o(e,t)},i)}a[e]=s,0==--r&&t(a)}catch(e){i(e)}}for(var s=0;s<a.length;s++)o(s,a[s])})},r.resolve=function(e){return e&&"object"===(void 0===e?"undefined":n(e))&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var i=0,a=e.length;i<a;i++)e[i].then(t,n)})},r._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){i(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=r}).call(this,n(36).setImmediate)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=v(n(37)),r=v(n(0)),o=v(n(3)),s=v(n(18)),l=v(n(17)),u=v(n(13)),c=v(n(12)),p=v(n(11)),d=v(n(9)),h=v(n(8)),y=v(n(7)),f=v(n(6));function v(e){return e&&e.__esModule?e:{default:e}}var m=[],g=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=(0,s.default)(t),this.container=this.options.container,this.paused=!0,this.playedPromise=a.default.resolve(),this.mode="normal",this.randomOrder=r.default.randomOrder(this.options.audio.length),this.container.classList.add("aplayer"),this.options.lrcType&&!this.options.fixed&&this.container.classList.add("aplayer-withlrc"),this.options.audio.length>1&&this.container.classList.add("aplayer-withlist"),r.default.isMobile&&this.container.classList.add("aplayer-mobile"),this.arrow=this.container.offsetWidth<=300,this.arrow&&this.container.classList.add("aplayer-arrow"),this.container=this.options.container,2===this.options.lrcType||!0===this.options.lrcType)for(var n=this.container.getElementsByClassName("aplayer-lrc-content"),i=0;i<n.length;i++)this.options.audio[i]&&(this.options.audio[i].lrc=n[i].innerHTML);this.template=new l.default({container:this.container,options:this.options,randomOrder:this.randomOrder}),this.options.fixed&&(this.container.classList.add("aplayer-fixed"),this.template.body.style.width=this.template.body.offsetWidth-18+"px"),this.options.mini&&(this.setMode("mini"),this.template.info.style.display="block"),this.template.info.offsetWidth<200&&this.template.time.classList.add("aplayer-time-narrow"),this.options.lrcType&&(this.lrc=new p.default({container:this.template.lrc,async:3===this.options.lrcType,player:this})),this.events=new y.default,this.storage=new c.default(this),this.bar=new u.default(this.template),this.controller=new d.default(this),this.timer=new h.default(this),this.list=new f.default(this),this.initAudio(),this.bindEvents(),"random"===this.options.order?this.list.switch(this.randomOrder[0]):this.list.switch(0),this.options.autoplay&&this.play(),m.push(this)}return i(e,[{key:"initAudio",value:function(){var e=this;this.audio=document.createElement("audio"),this.audio.preload=this.options.preload;for(var t=function(t){e.audio.addEventListener(e.events.audioEvents[t],function(n){e.events.trigger(e.events.audioEvents[t],n)})},n=0;n<this.events.audioEvents.length;n++)t(n);this.volume(this.storage.get("volume"),!0)}},{key:"bindEvents",value:function(){var e=this;this.on("play",function(){e.paused&&e.setUIPlaying()}),this.on("pause",function(){e.paused||e.setUIPaused()}),this.on("timeupdate",function(){if(!e.disableTimeupdate){e.bar.set("played",e.audio.currentTime/e.duration,"width"),e.lrc&&e.lrc.update();var t=r.default.secondToTime(e.audio.currentTime);e.template.ptime.innerHTML!==t&&(e.template.ptime.innerHTML=t)}}),this.on("durationchange",function(){1!==e.duration&&(e.template.dtime.innerHTML=r.default.secondToTime(e.duration))}),this.on("progress",function(){var t=e.audio.buffered.length?e.audio.buffered.end(e.audio.buffered.length-1)/e.duration:0;e.bar.set("loaded",t,"width")});var t=void 0;this.on("error",function(){e.list.audios.length>1?(e.notice("An audio error has occurred, player will skip forward in 2 seconds."),t=setTimeout(function(){e.skipForward(),e.paused||e.play()},2e3)):1===e.list.audios.length&&e.notice("An audio error has occurred.")}),this.events.on("listswitch",function(){t&&clearTimeout(t)}),this.on("ended",function(){"none"===e.options.loop?"list"===e.options.order?e.list.index<e.list.audios.length-1?(e.list.switch((e.list.index+1)%e.list.audios.length),e.play()):(e.list.switch((e.list.index+1)%e.list.audios.length),e.pause()):"random"===e.options.order&&(e.randomOrder.indexOf(e.list.index)<e.randomOrder.length-1?(e.list.switch(e.nextIndex()),e.play()):(e.list.switch(e.nextIndex()),e.pause())):"one"===e.options.loop?(e.list.switch(e.list.index),e.play()):"all"===e.options.loop&&(e.skipForward(),e.play())})}},{key:"setAudio",value:function(e){this.hls&&(this.hls.destroy(),this.hls=null);var t=e.type;this.options.customAudioType&&this.options.customAudioType[t]?"[object Function]"===Object.prototype.toString.call(this.options.customAudioType[t])?this.options.customAudioType[t](this.audio,e,this):console.error("Illegal customType: "+t):(t&&"auto"!==t||(t=/m3u8(#|\?|$)/i.exec(e.url)?"hls":"normal"),"hls"===t?Hls.isSupported()?(this.hls=new Hls,this.hls.loadSource(e.url),this.hls.attachMedia(this.audio)):this.audio.canPlayType("application/x-mpegURL")||this.audio.canPlayType("application/vnd.apple.mpegURL")?this.audio.src=e.url:this.notice("Error: HLS is not supported."):"normal"===t&&(this.audio.src=e.url)),this.seek(0),this.paused||this.audio.play()}},{key:"theme",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.list.audios[this.list.index].theme||this.options.theme,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.list.index;(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&this.list.audios[t]&&(this.list.audios[t].theme=e),this.template.listCurs[t]&&(this.template.listCurs[t].style.backgroundColor=e),t===this.list.index&&(this.template.pic.style.backgroundColor=e,this.template.played.style.background=e,this.template.thumb.style.background=e,this.template.volume.style.background=e)}},{key:"seek",value:function(e){e=Math.max(e,0),e=Math.min(e,this.duration),this.audio.currentTime=e,this.bar.set("played",e/this.duration,"width"),this.template.ptime.innerHTML=r.default.secondToTime(e)}},{key:"setUIPlaying",value:function(){var e=this;if(this.paused&&(this.paused=!1,this.template.button.classList.remove("aplayer-play"),this.template.button.classList.add("aplayer-pause"),this.template.button.innerHTML="",setTimeout(function(){e.template.button.innerHTML=o.default.pause},100),this.template.skipPlayButton.innerHTML=o.default.pause),this.timer.enable("loading"),this.options.mutex)for(var t=0;t<m.length;t++)this!==m[t]&&m[t].pause()}},{key:"play",value:function(){var e=this;this.setUIPlaying();var t=this.audio.play();t&&t.catch(function(t){console.warn(t),"NotAllowedError"===t.name&&e.setUIPaused()})}},{key:"setUIPaused",value:function(){var e=this;this.paused||(this.paused=!0,this.template.button.classList.remove("aplayer-pause"),this.template.button.classList.add("aplayer-play"),this.template.button.innerHTML="",setTimeout(function(){e.template.button.innerHTML=o.default.play},100),this.template.skipPlayButton.innerHTML=o.default.play),this.container.classList.remove("aplayer-loading"),this.timer.disable("loading")}},{key:"pause",value:function(){this.setUIPaused(),this.audio.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeButton.innerHTML=o.default.volumeUp:this.volume()>0?this.template.volumeButton.innerHTML=o.default.volumeDown:this.template.volumeButton.innerHTML=o.default.volumeOff}},{key:"volume",value:function(e,t){return e=parseFloat(e),isNaN(e)||(e=Math.max(e,0),e=Math.min(e,1),this.bar.set("volume",e,"height"),t||this.storage.set("volume",e),this.audio.volume=e,this.audio.muted&&(this.audio.muted=!1),this.switchVolumeIcon()),this.audio.muted?0:this.audio.volume}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"toggle",value:function(){this.template.button.classList.contains("aplayer-play")?this.play():this.template.button.classList.contains("aplayer-pause")&&this.pause()}},{key:"switchAudio",value:function(e){this.list.switch(e)}},{key:"addAudio",value:function(e){this.list.add(e)}},{key:"removeAudio",value:function(e){this.list.remove(e)}},{key:"destroy",value:function(){m.splice(m.indexOf(this),1),this.pause(),this.container.innerHTML="",this.audio.src="",this.timer.destroy(),this.events.trigger("destroy")}},{key:"setMode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal";this.mode=e,"mini"===e?this.container.classList.add("aplayer-narrow"):"normal"===e&&this.container.classList.remove("aplayer-narrow")}},{key:"notice",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8;this.template.notice.innerHTML=e,this.template.notice.style.opacity=i,this.noticeTime&&clearTimeout(this.noticeTime),this.events.trigger("noticeshow",{text:e}),n&&(this.noticeTime=setTimeout(function(){t.template.notice.style.opacity=0,t.events.trigger("noticehide")},n))}},{key:"prevIndex",value:function(){if(!(this.list.audios.length>1))return 0;if("list"===this.options.order)return this.list.index-1<0?this.list.audios.length-1:this.list.index-1;if("random"===this.options.order){var e=this.randomOrder.indexOf(this.list.index);return 0===e?this.randomOrder[this.randomOrder.length-1]:this.randomOrder[e-1]}}},{key:"nextIndex",value:function(){if(!(this.list.audios.length>1))return 0;if("list"===this.options.order)return(this.list.index+1)%this.list.audios.length;if("random"===this.options.order){var e=this.randomOrder.indexOf(this.list.index);return e===this.randomOrder.length-1?this.randomOrder[0]:this.randomOrder[e+1]}}},{key:"skipBack",value:function(){this.list.switch(this.prevIndex())}},{key:"skipForward",value:function(){this.list.switch(this.nextIndex())}},{key:"duration",get:function(){return isNaN(this.audio.duration)?0:this.audio.duration}}],[{key:"version",get:function(){return"1.10.1"}}]),e}();t.default=g},,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(40);var i,a=n(38),r=(i=a)&&i.__esModule?i:{default:i};console.log("\n %c APlayer v1.10.1 af84efb %c http://aplayer.js.org \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),t.default=r.default}]).default});
//# sourceMappingURL=https://cdn.yimian.xyz/aplayer/APlayer.min.js.map

/* Tips @iziToast | v1.4.0 */
;if(typeof block_tips == "undefined"){!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.tipsObj=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},n="iziToast",o=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},d=568,c={};e.children={};var u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(n,t[i],i,t)},g=function(t,e){var n={};return m(t,function(e,o){n[o]=t[o]}),m(e,function(t,o){n[o]=e[o]}),n},f=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},v=function(t){var e=btoa(encodeURIComponent(t));return e.replace(/=/g,"")},y=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},h=function(t){try{return btoa(atob(t))==t}catch(e){return!1}},b=function(){return{move:function(t,e,o,a){var r,l=.3,d=180;0!==a&&(t.classList.add(n+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?(r=(d-a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag")):(r=(d+a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag")),t.style.opacity=r,l>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,n,o){o=o||window.event;var i=a?o.touches[0].clientX:o.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;n.transitionIn&&t.classList.remove(n.transitionIn),n.transitionInMobile&&t.classList.remove(n.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(o){o.preventDefault(),o=o||window.event;var i=o.touches[0].clientX,s=i-r;b.move(t,e,n,s)}:document.onmousemove=function(o){o.preventDefault(),o=o||window.event;var i=o.clientX,s=i-r;b.move(t,e,n,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(n+"-dragged")&&(t.classList.remove(n+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}}}();return e.setSetting=function(t,n,o){e.children[t][n]=o},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){m(document.querySelectorAll("."+n+"-overlay"),function(t,e){t.remove()}),m(document.querySelectorAll("."+n+"-wrapper"),function(t,e){t.remove()}),m(document.querySelectorAll("."+n),function(t,e){t.remove()}),this.children={},document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,function(t,n){e[n]=function(e){var n=g(c,e||{});n=g(t,n||{}),this.show(n)}}),e.progress=function(t,e,o){var i=this,s=e.getAttribute("data-iziToast-ref"),a=g(this.children[s],t||{}),r=e.querySelector("."+n+"-progressbar div");return{start:function(){"undefined"==typeof a.time.REMAINING&&(e.classList.remove(n+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if("undefined"!=typeof a.time.START&&!e.classList.contains(n+"-paused")&&!e.classList.contains(n+"-reseted")){if(e.classList.add(n+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r),l=t.getPropertyValue("width");r.style.transition="none",r.style.width=l}"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}},resume:function(){"undefined"!=typeof a.time.REMAINING?(e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(n+"-reseted"),e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}}},e.hide=function(t,e,i){"object"!=typeof e&&(e=document.querySelector(e));var s=this,a=g(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,e.classList.add(n+"-closing"),function(){var t=document.querySelector("."+n+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref");e=e.split(",");var o=e.indexOf(String(a.ref));-1!==o&&e.splice(o,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),a.transitionIn&&e.classList.remove(a.transitionIn),a.transitionInMobile&&e.classList.remove(a.transitionInMobile),o||window.innerWidth<=d?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!o||window.innerWidth>d)&&(e.parentNode.style.transitionDelay="0.2s");try{var l=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(c){console.warn(c)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(o){console.warn(o)}"undefined"!=typeof a.onClosed&&a.onClosed.apply(null,[a,e,i])},1e3)},200),"undefined"!=typeof a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=g(c,t||{});if(s=g(u,s),s.time={},null===s.id&&(s.id=v(s.title+s.message+s.color)),1===s.displayMode||"once"==s.displayMode)try{if(document.querySelectorAll("."+n+"#"+s.id).length>0)return!1}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}if(2===s.displayMode||"replace"==s.displayMode)try{m(document.querySelectorAll("."+n+"#"+s.id),function(t,e){i.hide(s,t,"replaced")})}catch(l){console.warn("["+n+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var p={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:s.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};p.toast.setAttribute("data-iziToast-ref",s.ref),p.toast.appendChild(p.toastBody),p.toastCapsule.appendChild(p.toast),function(){if(p.toast.classList.add(n),p.toast.classList.add(n+"-opening"),p.toastCapsule.classList.add(n+"-capsule"),p.toastBody.classList.add(n+"-body"),p.toastTexts.classList.add(n+"-texts"),o||window.innerWidth<=d?s.transitionInMobile&&p.toast.classList.add(s.transitionInMobile):s.transitionIn&&p.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,function(t,e){p.toast.classList.add(t)})}s.id&&(p.toast.id=s.id),s.rtl&&(p.toast.classList.add(n+"-rtl"),p.toast.setAttribute("dir","rtl")),s.layout>1&&p.toast.classList.add(n+"-layout"+s.layout),s.balloon&&p.toast.classList.add(n+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?p.toast.style.maxWidth=s.maxWidth:p.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||p.toast.classList.add(n+"-theme-"+s.theme),s.color&&(y(s.color)?p.toast.style.background=s.color:p.toast.classList.add(n+"-color-"+s.color)),s.backgroundColor&&(p.toast.style.background=s.backgroundColor,s.balloon&&(p.toast.style.borderColor=s.backgroundColor))}(),function(){s.image&&(p.cover.classList.add(n+"-cover"),p.cover.style.width=s.imageWidth+"px",h(s.image.replace(/ /g,""))?p.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":p.cover.style.backgroundImage="url("+s.image+")",s.rtl?p.toastBody.style.marginRight=s.imageWidth+10+"px":p.toastBody.style.marginLeft=s.imageWidth+10+"px",p.toast.appendChild(p.cover))}(),function(){s.close?(p.buttonClose=document.createElement("button"),p.buttonClose.type="button",p.buttonClose.classList.add(n+"-close"),p.buttonClose.addEventListener("click",function(t){t.target;i.hide(s,p.toast,"button")}),p.toast.appendChild(p.buttonClose)):s.rtl?p.toast.style.paddingLeft="18px":p.toast.style.paddingRight="18px"}(),function(){s.progressBar&&(p.progressBar=document.createElement("div"),p.progressBarDiv=document.createElement("div"),p.progressBar.classList.add(n+"-progressbar"),p.progressBarDiv.style.background=s.progressBarColor,p.progressBar.appendChild(p.progressBarDiv),p.toast.appendChild(p.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(p.toast.addEventListener("mouseenter",function(t){i.progress(s,p.toast).pause()}),p.toast.addEventListener("mouseleave",function(t){i.progress(s,p.toast).resume()})),s.resetOnHover&&(p.toast.addEventListener("mouseenter",function(t){i.progress(s,p.toast).reset()}),p.toast.addEventListener("mouseleave",function(t){i.progress(s,p.toast).start()})))}(),function(){s.iconUrl?(p.icon.setAttribute("class",n+"-icon"),p.icon.setAttribute("src",s.iconUrl)):s.icon&&(p.icon.setAttribute("class",n+"-icon "+s.icon),s.iconText&&p.icon.appendChild(document.createTextNode(s.iconText)),s.iconColor&&(p.icon.style.color=s.iconColor)),(s.icon||s.iconUrl)&&(s.rtl?p.toastBody.style.paddingRight="33px":p.toastBody.style.paddingLeft="33px",p.toastBody.appendChild(p.icon))}(),function(){s.title.length>0&&(p.strong=document.createElement("strong"),p.strong.classList.add(n+"-title"),p.strong.appendChild(f(s.title)),p.toastTexts.appendChild(p.strong),s.titleColor&&(p.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?p.strong.style.fontSize=s.titleSize:p.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?p.strong.style.lineHeight=s.titleLineHeight:p.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(p.p=document.createElement("p"),p.p.classList.add(n+"-message"),p.p.appendChild(f(s.message)),p.toastTexts.appendChild(p.p),s.messageColor&&(p.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?p.p.style.fontSize=s.messageSize:p.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?p.p.style.lineHeight=s.messageLineHeight:p.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?p.strong.style.marginLeft="10px":2===s.layout||s.rtl||(p.strong.style.marginRight="10px"))}(),p.toastBody.appendChild(p.toastTexts);var L;!function(){s.inputs.length>0&&(p.inputs.classList.add(n+"-inputs"),m(s.inputs,function(t,e){p.inputs.appendChild(f(t[0])),L=p.inputs.childNodes,L[e].classList.add(n+"-inputs-child"),t[3]&&setTimeout(function(){L[e].focus()},300),L[e].addEventListener(t[1],function(e){var n=t[2];return n(i,p.toast,this,e)})}),p.toastBody.appendChild(p.inputs))}(),function(){s.buttons.length>0&&(p.buttons.classList.add(n+"-buttons"),m(s.buttons,function(t,e){p.buttons.appendChild(f(t[0]));var o=p.buttons.childNodes;o[e].classList.add(n+"-buttons-child"),t[2]&&setTimeout(function(){o[e].focus()},300),o[e].addEventListener("click",function(e){e.preventDefault();var n=t[1];return n(i,p.toast,this,e,L)})})),p.toastBody.appendChild(p.buttons)}(),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(p.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?p.toastTexts.style.marginLeft="10px":p.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?p.inputs.style.marginLeft="8px":p.inputs.style.marginRight="8px")),function(){p.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=p.toast.offsetHeight,e=p.toast.currentStyle||window.getComputedStyle(p.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var o=e.marginBottom;o=o.split("px"),o=parseInt(o[0]),p.toastCapsule.style.visibility="",p.toastCapsule.style.height=t+o+n+"px",setTimeout(function(){p.toastCapsule.style.height="auto",s.target&&(p.toastCapsule.style.overflow="visible")},500),s.timeout&&i.progress(s,p.toast).start()},100)}(),function(){var t=s.position;if(s.target)p.wrapper=document.querySelector(s.target),p.wrapper.classList.add(n+"-target"),s.targetFirst?p.wrapper.insertBefore(p.toastCapsule,p.wrapper.firstChild):p.wrapper.appendChild(p.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+n+"] Incorrect position.\nIt can be › "+r);t=o||window.innerWidth<=d?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?n+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?n+"-wrapper-topCenter":n+"-wrapper-center":n+"-wrapper-"+t,p.wrapper=document.querySelector("."+n+"-wrapper."+t),p.wrapper||(p.wrapper=document.createElement("div"),p.wrapper.classList.add(n+"-wrapper"),p.wrapper.classList.add(t),document.body.appendChild(p.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?p.wrapper.insertBefore(p.toastCapsule,p.wrapper.firstChild):p.wrapper.appendChild(p.toastCapsule)}isNaN(s.zindex)?console.warn("["+n+"] Invalid zIndex."):p.wrapper.style.zIndex=s.zindex}(),function(){s.overlay&&(null!==document.querySelector("."+n+"-overlay.fadeIn")?(p.overlay=document.querySelector("."+n+"-overlay"),p.overlay.setAttribute("data-iziToast-ref",p.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(p.overlay.style.zIndex=s.zindex-1)):(p.overlay.classList.add(n+"-overlay"),p.overlay.classList.add("fadeIn"),p.overlay.style.background=s.overlayColor,p.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(p.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(p.overlay)),s.overlayClose?(p.overlay.removeEventListener("click",{}),p.overlay.addEventListener("click",function(t){i.hide(s,p.toast,"overlay")})):p.overlay.removeEventListener("click",{}))}(),function(){if(s.animateInside){p.toast.classList.add(n+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout(function(){p.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){p.p.classList.add("slideIn")},t[1]),(s.icon||s.iconUrl)&&setTimeout(function(){p.icon.classList.add("revealIn")},t[2]);var e=150;s.buttons.length>0&&p.buttons&&setTimeout(function(){m(p.buttons.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})},s.inputs.length>0?150:0),s.inputs.length>0&&p.inputs&&(e=150,m(p.inputs.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150}))}}(),s.onOpening.apply(null,[s,p.toast]);try{var C=new CustomEvent(n+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(C)}catch(w){console.warn(w)}setTimeout(function(){p.toast.classList.remove(n+"-opening"),p.toast.classList.add(n+"-opened");try{var t=new CustomEvent(n+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,p.toast])},1e3),s.drag&&(a?(p.toast.addEventListener("touchstart",function(t){b.startMoving(this,i,s,t)},!1),p.toast.addEventListener("touchend",function(t){b.stopMoving(this,t)},!1)):(p.toast.addEventListener("mousedown",function(t){t.preventDefault(),b.startMoving(this,i,s,t)},!1),p.toast.addEventListener("mouseup",function(t){t.preventDefault(),b.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){t=t||window.event,27==t.keyCode&&i.hide(s,p.toast,"esc")}),s.closeOnClick&&p.toast.addEventListener("click",function(t){i.hide(s,p.toast,"toast")}),i.toast=p.toast},e});}

/* jQuery md5 */
if(typeof block_md5 == "undefined") document.write('<script src="https://cdn.yimian.xyz/ushio-js/jquery.md5.min.js"></script>');

/* page reload */
$('head').append('<meta charset="UTF-8">');
$('title').remove();
$('head').append('<title>' + page.title + '</title>');
$('[rel="icon"]').remove();
$('head').append('<link rel="icon" type="image/x-icon" href="' + page.icon + '">');
if(!$('[name="viewport"]').length && typeof block_viewport == "undefined") {
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
        	session.close();
        	page.window = false;
            log_update();
            var rand = Math.random() * 100;
            if(rand < 30) {if(page.tran.getLang() == 'zh')document.title = '啊咧(⊙０⊙)';else document.title = 'Aha (⊙０⊙)';}
            else if(rand < 55) {if(page.tran.getLang() == 'zh')document.title = '快来戳我呀( ´∀｀)σ';else document.title = 'Click Me ( ´∀｀)σ';}
            else if(rand < 75) {if(page.tran.getLang() == 'zh')document.title = '躲起来(´・ω・｀)';else document.title = 'Hiding(´・ω・｀)';}
            else {if(page.tran.getLang() == 'zh')document.title = '哎呦，页面崩掉了吗(>﹏<)';else document.title = 'Wow, page crashed(>﹏<)';}
            setTimeout("document.title = page.title", 2400);
            clearInterval(page.TimerObj);
            page.TimerObj = null;
        }

        if(document[getVisibilityState()] == "visible") {
            document.title = page.title;
            page.window = true;
            page.LastWindowOpenTime = new Date().valueOf();
            session.open();
            if(page.TimerObj == null) page.TimerObj = setInterval("page.Timer++", 1000);
        }
    }, false);
}


async function log_ini(){
        page.fp = await fp;
        page.fpObj = await fp_details;
        page.fpObj.forEach(item=>{
        	page[item.key] = item.value;
        });
        $.get("https://log.yimian.xyz/iis.php",{
            "fp":page.fp,
            "url": page.url,
            "lang": page.language,
            "timezone": page.timezone,
            "platform": page.platform,
            "ram": page.deviceMemory,
            "screen": page.screenResolution,
            "userAgent": page.userAgent,
            "webgl": page.webglVendorAndRenderer
        }, function(res){
            page.sid = JSON.parse(res).sid;
            page.ip = JSON.parse(res).ip;
            who();
        });
        updateHref();
}


/* session */
function who(){
	$.get('https://auth.yimian.xyz/who.php?mask='+page.mask+'&fp='+page.fp+'&ip='+page.ip, function(res){
		if(res.code == 200){
			session_ini_pre();
		}else{
			window.location.href='https://auth.yimian.xyz/?from='+window.btoa(page.url);
			throw new Error('ushio::Redirect to Ushio-auth!');
		}
	});
}




/* log */
/*window.addEventListener('message',function(event){
        if(event.data=='ok'){
            session_ini_pre();
        }
})*/


async function session_ini_pre () {
		//if(!page.fp || !page.ip) {setTimeout(session_ini_pre, 30);return;}
        if(typeof WebSocket != 'undefined'){
        	session_websocket_ini();
        }else{
        	session_ajax_ini();
        }
        if(session.status) drawBrand();
        else setTimeout(drawBrand, 3300);
}

function log_update() {
    $.get('https://log.yimian.xyz/iis.php',{
        "sid": page.sid,
        "sessiontime": page.Timer
    })
}
setTimeout("log_ini();",20);




/* update the href in <a> with from*/
function updateHref(){
	if(page.url.indexOf('?from=') != -1) window.history.replaceState(null, 'ushio', page.url.substr(0, page.url.indexOf('?from=')));
	if(page.url.indexOf('&from=') != -1) window.history.replaceState(null, 'ushio', page.url.substr(0, page.url.indexOf('&from=')));
	var links = $(document).find("a");
	for(var index in links) {

		var _href = links.eq(index).attr("href");
		var _id = (links.eq(index).attr("id"));

		if(_id) _id = _id.substr(0, 5);

		if(_href != null) {
			if(_href.indexOf("?") == -1 && _id == "ushio") links.eq(index).attr("href",_href + ((page.host) ? ("?from=https://"+page.host) : ""));
			else if(_id == "ushio") links.eq(index).attr("href",_href + ((page.host) ? ("&from=https://"+page.host) : ""));
		}
	}
};


/* connect to session server */
function session_websocket_ini(){
	page.ws = new ReconnectingWebSocket("wss://session.yimian.xyz/websocket/?fp="+page.fp+"&mask="+page.mask+'&flag='+page.flag);
	page.ws.maxReconnectInterval = 60;

	page.ws.onopen = function(evt) { 
	  	if(session.status === false) console.log('Ushio - Session Connected!!');

	  	page.ws.send("get");
	  	session.set = function(key, val){
	  		page.session[key] = val;
	  		page.session['LastOperateTime'] = (new Date()).valueOf();
	  		page.ws.send('{"key":"'+key+'", "val": "'+val+'", "t":'+page.session.LastOperateTime+'}');
	  		page.ws.send('get');
	  		if(session.status) return true;
	  		else return false;
	  	}
	  	session.get = function(key){
	  		page.ws.send('get');
	  		return page.session[key];
	  	}
	  	session.del = function(key){
	  		delete page.session[key];
	  		page.session['LastOperateTime'] = (new Date()).valueOf();
	  		page.ws.send('{"del":"'+key+'", "t":"'+page.session['LastOperateTime']+'"}');
	  		page.ws.send('get');
	  		if(session.status) return true;
	  		else return false;
	  	}
	  	session.close = function(){
	  		try{
	  			page.ws.close();
	  		}catch(e){}
	  		session.status =false;
        	delete page.ws;
	  	}
	  	session.open = function(){
	  		session_websocket_ini();
	  	}
	};

	page.ws.onmessage = function(msg){
		page.session = JSON.parse(msg.data);
		session.method = 'WebSocket';
	  	session.status = true;
	}

	page.ws.onerror = function(err){
		console.log('Ushio - Session Error::'+JSON.stringify(err));
		session.status = false;
	}

	page.ws.onclose = function(){
		console.log('Ushio - Session Connection Lost!!');
		session.status = false;
	}

}

function session_ajax_ini(isPhp){
	var sss = ['', ''];
	if(isPhp){
		sss = ['php/', '.php'];
	}
	try{
		session.close();
		delete session.set;
		delete session.get;
		delete session.del;
		delete session.open;
		delete session.close;
	}catch(e){}
	session.set = function(key, val){
  		page.session[key] = val;
  		page.session['LastOperateTime'] = (new Date()).valueOf();
  		$.get('https://session.yimian.xyz/'+sss[0]+'set'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask+'&key='+key+'&val='+val+'&t='+page.session.LastOperateTime).fail(function () {session.status = false;console.log('Ushio - Ajax Session Connection Lost!!');});
  		$.get('https://session.yimian.xyz/'+sss[0]+'get'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask, function(res2){
  			if(isPhp) res2 = JSON.parse(res2);
  			page.session = res2;
  			session.status = true;
  			session.method = 'ajax';
  		}).fail(function () {session.status = false;console.log('Ushio - Ajax Session Connection Lost!!');});
  		if(session.status) return true;
  		else return false;
  	}
  	session.get = function(key){
  		$.get('https://session.yimian.xyz/'+sss[0]+'get'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask, function(res2){
  			if(isPhp) res2 = JSON.parse(res2);
  			page.session = res2;
  			session.status = true;
  			session.method = 'ajax';
  		}).fail(function () {session.status = false;console.log('Ushio - Ajax Session Connection Lost!!');});
  		return page.session[key];
  	}
  	session.del = function(key){
  		delete page.session[key];
  		page.session['LastOperateTime'] = (new Date()).valueOf();
  		$.get('https://session.yimian.xyz/'+sss[0]+'del'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask+'&del='+key+'&t='+page.session.LastOperateTime).fail(function () {session.status = false;console.log('Ushio - Ajax Session Connection Lost!!');});
  		$.get('https://session.yimian.xyz/'+sss[0]+'get'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask, function(res2){
  			if(isPhp) res2 = JSON.parse(res2);
  			page.session = res2;
  			session.status = true;
  			session.method = 'ajax';
  		}).fail(function () {session.status = false;console.log('Ushio - Ajax Session Connection Lost!!');});
  		if(session.status) return true;
  		else return false;
  	}
  	session.close = function(){
  		console.log('Ushio - Session Connection Lost!!');
  		session.status =false;
  	}

  	session.open = function(){
  		session.get('LastOperateTime');
  	}
	$.get('https://session.yimian.xyz/'+sss[0]+'get'+sss[1]+'?fp='+page.fp+'&flag='+page.flag+'&mask='+page.mask, function(res){
		if(isPhp) res = JSON.parse(res);
		page.session = res;
	  	if(session.status === false) console.log('Ushio - Session Connected!!');
	  	session.status = true;
	});

}


/* session onload */
var session_ini = function(f, c, fhash){
	if(!c || fhash != session.get('hash')){
		f();
		return;
	}
	setTimeout(session_ini, 500, f, --c, fhash);
}
var session_wait = function(f){
	var fhash = session.get('hash');
	session_ini(f, 0, fhash);
}


/* session onload app */
session.onload(function(){
	console.log('Ushio - session loaded..  '+(new Date().valueOf()/1000 - page.openTime)+'s');
});
session.onload(function(){
	if(typeof block_aplayer == "undefined"){
  		player_ini();
  	}
});

session.onload(function(){
	var isStop = false;
	if(typeof session.get('group') == "undefined"){
		isStop = true;
		if(page.tran.getLang() == 'zh') alert('Ushio-session没有您的记录，将登出...');
		else alert('Ushio-session do not have your record, Ushio will logout..');
		window.location.href='https://auth.yimian.xyz/checkout.php?from='+ btoa(page.url);
		throw new Error('ushio::Redirect to Ushio-Logout!');
	}
	if(page.auth.indexOf('any') != -1){
		if(session.get('group') == 'anonymous'){
			isStop = true;
			if(page.tran.getLang() == 'zh') alert('此页面需要您的联系方式，将跳转至登录页面...');
			else alert('This page needs your contact information..');
			window.location.href='https://login.yimian.xyz/?from='+page.url;
			throw new Error('ushio::Redirect to Ushio-Login!');
		}
	}else{
		page.auth.forEach(function(item){
			if(!isStop){
				if(!session.get(item)){
					isStop = true;
					if(page.tran.getLang() == 'zh') alert('此页面需要您的'+item+'，将跳转至登录页面...');
					else  alert('This page needs your '+item+'..');
					window.location.href='https://login.yimian.xyz/?require='+item+'&from='+page.url;
					throw new Error('ushio::Redirect to Ushio-Login!');
				}
			}
		});
	}	

});


session.onload(function(){
	var group = session.get('group');
	if(page.group.length){
		var cnt = 0;
		page.group.forEach(function(item, index){
			if(group.indexOf(item) != -1){
				cnt = index+1;
			}
		});
		if(!cnt){
			if(page.tran.getLang() == 'zh') alert('本页面需要'+page.group[cnt]+'权限，您被拒绝访问。如有疑惑请联系站长i@iotcat.me!');
			else alert('You are denied to access this page because you do not have '+page.group[cnt]+' permission. Please contact i@iotcat.me for further information!');
			window.location.href='https://guide.yimian.xyz/';
		}
	}
});


session.onload(function(){

	if(typeof lang != "undefined" && lang.length > 0){
		var l = lang[0];
		if(session.get('lang')){
			page.lang = page.lang.concat(JSON.parse(atob(session.get('lang'))));
			cookie.set('_lang', session.get('lang'));
		}
		if(session.get('nolang')){
			page.nolang = JSON.parse(atob(session.get('nolang')));
		}

		for(var i = 0; i < lang.length; i++){
			if(page.lang.indexOf(lang[i]) != -1 && page.nolang.indexOf(lang[i]) == -1){
				l = lang[i];
				break;
			}
		}

		page.tran.setLang(l);

		var warning = ()=>{
			if(page.tran.getLang() == 'zh'){
				tips.warning({
				    title: 'Warnning',
				    message: 'This page is only available in Chinese~',
				});
			}
			if(page.tran.getLang() == 'en'){
				tips.warning({
				    title: '警告',
				    message: '此页面仅提供英文版本~',
				});
			}
		}

		var ques = function(title, message, yes, no, lan){
			tips.question({
			    timeout: 20000,
			    close: false,
			    overlay: true,
			    id: 'question',
			    zindex: 999,
			    title: title,
			    message: message,
			    position: 'center',
			    buttons: [
			        ['<button><b>'+yes+'</b></button>', function (instance, toast) {
			 			var ll = [];
			 			if(session.get('lang')){
			 				ll = ll.concat(JSON.parse(atob(session.get('lang'))));
			 			}
			 			ll.push(lan);
			 			session.set('lang', btoa(JSON.stringify(ll)));
			 			page.tran.setLang(lan);
			 			page.lang.push(lan);
			            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
			 
			        }, true],
			        ['<button>'+no+'</button>', function (instance, toast) {
			 			var ll = [];
			 			if(session.get('nolang')){
			 				ll = ll.concat(JSON.parse(atob(session.get('nolang'))));
			 			}
			 			ll.push(lan);
			 			session.set('nolang', btoa(JSON.stringify(ll)));
			 			page.nolang = ll;
						if(lang.every((item)=>{
							return page.nolang.indexOf(item) != -1;
						})){
							warning();
						}
			            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
			 			check();
			        }],
			    ]
			});
		}

		var check = ()=>{
			for(var i = 0; i < lang.length; i ++){
				if(page.nolang.indexOf(lang[i]) == -1 && page.lang.indexOf(lang[i]) == -1){
					if(lang[i] == 'zh'){
						ques('Hey', 'Could you read Chinese? 您会中文吗？', 'Yes 是', "No 否", 'zh');
					}
					if(lang[i] == 'en'){
						ques('Hey', 'Could you read English? 您会英语吗？', 'Yes 是', "No 否", 'en');
					}
					break;
				}
			}
		}


		if((page.nolang.indexOf(page.tran.getLang()) == -1 && page.lang.indexOf(page.tran.getLang()) == -1) || (page.nolang.indexOf(lang[0]) == -1 && page.lang.indexOf(lang[0]) == -1)){
			check();
		}

		if(lang.every((item)=>{
			return page.nolang.indexOf(item) != -1;
		})){
			warning();
		}
	}

});


/* audio player */
function player_ini(){

    $.post("https://api.yimian.xyz/msc/?type=single&id="+((session.get('aplayer/playing') == undefined)?'477215840':session.get('aplayer/playing'))+"&limit=15&random=true", function(e){
        	$.post("https://api.yimian.xyz/msc/?type=playlist&id="+((typeof aplayer_playlist == "undefined")?'808097971':aplayer_playlist)+"&limit=14&random=true", function(res){
        		res.unshift(e);
        		$('body').append('<div class="aplayer-footer"><div class="ap-f" id="ap-f"></div></div>');
	            var a = new APlayer({
	                element:document.getElementById("ap-f"),
	                autoplay:false,
	                fixed:true,
	                loop:"all",
	                order:"list",
	                listFolded:true,
	                showlrc:3,
	                theme:"#00CBFF",
	                listmaxheight:"200px",
	                music:res
	            });
	            window.aplayers || (window.aplayers = []),
	            window.aplayers.push(a);
	            window.aplayers[0].lrc.hide();
	            if(session.get('aplayer/status') == 'play') {
	            	window.aplayers[0].play();
	            	if(window.aplayers[0].audio.paused) {
	            		window.aplayers[0].notice('Click Here', 5000, 0.8);
	            		if(page.tran.getLang() == 'zh') tips.info({message: "戳左下角继续音乐哦(^_−)☆"});
	            		else tips.info({message: "Click bottom left conner to continue music (^_−)☆"});
	            	};
	            }
	            
	            window.aplayers[0].on('play', function () {
	    			session.set('aplayer/status', 'play');
	    			window.aplayers[0].lrc.show();
	    			if(window.aplayers[0].firstTime === undefined){

	    				adjustSeek();
	    				window.aplayers[0].firstTime = false;
	    			}
				});
	            window.aplayers[0].on('pause', function () {
	    			session.set('aplayer/status', 'pause');
	    			window.aplayers[0].lrc.hide();
				});
	            window.aplayers[0].on('listswitch', function(e){
	                session.set('aplayer/playing', window.aplayers[0].list.audios[e.index].id);
	            });
	            setInterval(function(){
	                try{
	                	if(!window.aplayers[0].audio.paused) session.set('aplayer/seek', window.aplayers[0].audio.currentTime);
	            	}catch(e){

	            	}
	            }, 5000);
            });
        }
    )
}

function adjustSeek(){
	if(session.get('aplayer/seek') != undefined && window.aplayers[0].audio.currentTime < session.get('aplayer/seek')){
		window.aplayers[0].seek(session.get('aplayer/seek'));
		setTimeout(adjustSeek, 600);
	}
}


/* global tips */
var tips = {
	show: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "iotcat";
		}
		if(params.image === undefined){
			params.image = "https://cdn.yimian.xyz/img/head/head_100.png";
		}
		if(params.theme === undefined){
			params.theme = "dark";
		}
		tipsObj.show(params);
	},
	info: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "info";
		}
		tipsObj.info(params);
	},
	warning: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "warning";
		}
		tipsObj.warning(params);
	},
	success: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "success";
		}
		tipsObj.success(params);
	},
	error: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "error";
		}
		tipsObj.error(params);
	},
	question: function(params){
		tips.checkParams(params);
		if(params.title === undefined){
			params.title = "question";
		}
		tipsObj.question(params);
	},
	checkParams: function(params){
		if(params.position === undefined){
			params.position = "topCenter";
		}
		if(params.message === undefined){
			params.message = "No Content!!";
		}
		if(params.progressBarColor === undefined){
			params.progressBarColor = '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6);
		}
		if(params.imageWidth === undefined){
			params.imageWidth = 55;
		}
		if(params.progressBarEasing === undefined){
			params.progressBarEasing = 'ease';
		}
	}
}

/* Ushio Selection */
page.showUshio = function(proj){
	if(page.tran.getLang() == 'zh'){
		var title = '小汐菜单';
		var guide = '导航';
		var cool = '主页';
		var github = '源码';
		var setting = '设置';
		var close = '关闭';
	}else{
		var title = 'Ushio Menu';
		var guide = 'Guide';
		var cool = 'Cool';
		var github = 'Github';
		var setting = 'Setting';
		var close = 'Close';
	}

	tips.question({
	    timeout: 20000,
	    close: false,
	    overlay: true,
	    id: 'ushio-selection',
	    zindex: 999,
	    title: title,
	    color: '#80cbff',
	    message: '',
	    position: 'center',
	    buttons: [
	        ['<button>'+guide+'</button>', function (instance, toast) {
	        	window.location.href='https://guide.yimian.xyz/';
	            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
	        }, true],
	        ['<button>'+cool+'</button>', function (instance, toast) {
	        	window.location.href='https://ushio.cool/';
	            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
	        }, true],
	        ['<button>'+github+'</button>', function (instance, toast) {
	        	window.location.href='https://github.yimian.xyz/iotcat/'+proj;
	            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
	        }, true],
	        ['<button>'+setting+'</button>', function (instance, toast) {
	        	window.location.href='https://login.yimian.xyz/';
	            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
	        }, true],
            ['<button><b>'+close+'</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }, true]
	    ]
	});
}



/* brand */
function drawBrand(){
	if(!session.status){
		session_ajax_ini();
	}
	console.log('\n' + ' %c Ushio v3.3.4 %c ' + page.ip  + ' %c '+ ((session.method == 'WebSocket')?'WebSocket':'Ajax') +' %c https://ushio.cool/ \n', 'color: #FFFFCC; background: #030307; padding:5px 0;', 'color: #FF99FF; background: #030307; padding:5px 0;', 'color: '+((session.method == 'WebSocket')?'#91FF3A':'#F8FF00')+'; background: #030307; padding:5px 0;', 'background: #4682B4; padding:5px 0;');
}

/* session health */
SessionLastCntTime = new Date().valueOf();
var session_errCnt = 1;
setInterval(()=>{
	if(session.status){
		SessionLastCntTime = new Date().valueOf();
	}
	if(!page.window) return;
	if(page.LastWindowOpenTime > new Date().valueOf() - 10000) SessionLastCntTime = page.LastWindowOpenTime;
	if(new Date().valueOf() - SessionLastCntTime > 10000){
		console.log('Session unhealthy!!');
		session_ajax_ini(session_errCnt++ % 2);
	}
	if(new Date().valueOf() - SessionLastCntTime > 30000){
		alert('Session Error!!! Page will reload!');
		window.location.reload();
		throw new Error('ushio::Page Reload!');
	}
}, 7000);