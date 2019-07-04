/* fp@iotcat v2.0.1 */
;(function(e,r,a){"use strict";if(typeof window!=="undefined"&&typeof define==="function"&&define.amd){define(a)}else if(typeof module!=="undefined"&&module.exports){module.exports=a()}else if(r.exports){r.exports=a()}else{r[e]=a()}})("fp",this,function(){"use strict";var l=.8;var f=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535];r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var a=[0,0,0,0];a[3]+=e[3]+r[3];a[2]+=a[3]>>>16;a[3]&=65535;a[2]+=e[2]+r[2];a[1]+=a[2]>>>16;a[2]&=65535;a[1]+=e[1]+r[1];a[0]+=a[1]>>>16;a[1]&=65535;a[0]+=e[0]+r[0];a[0]&=65535;return[a[0]<<16|a[1],a[2]<<16|a[3]]};var d=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535];r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var a=[0,0,0,0];a[3]+=e[3]*r[3];a[2]+=a[3]>>>16;a[3]&=65535;a[2]+=e[2]*r[3];a[1]+=a[2]>>>16;a[2]&=65535;a[2]+=e[3]*r[2];a[1]+=a[2]>>>16;a[2]&=65535;a[1]+=e[1]*r[3];a[0]+=a[1]>>>16;a[1]&=65535;a[1]+=e[2]*r[2];a[0]+=a[1]>>>16;a[1]&=65535;a[1]+=e[3]*r[1];a[0]+=a[1]>>>16;a[1]&=65535;a[0]+=e[0]*r[3]+e[1]*r[2]+e[2]*r[1]+e[3]*r[0];a[0]&=65535;return[a[0]<<16|a[1],a[2]<<16|a[3]]};var g=function(e,r){r%=64;if(r===32){return[e[1],e[0]]}else if(r<32){return[e[0]<<r|e[1]>>>32-r,e[1]<<r|e[0]>>>32-r]}else{r-=32;return[e[1]<<r|e[0]>>>32-r,e[0]<<r|e[1]>>>32-r]}};var v=function(e,r){r%=64;if(r===0){return e}else if(r<32){return[e[0]<<r|e[1]>>>32-r,e[1]<<r]}else{return[e[1]<<r-32,0]}};var h=function(e,r){return[e[0]^r[0],e[1]^r[1]]};var m=function(e){e=h(e,[0,e[0]>>>1]);e=d(e,[4283543511,3981806797]);e=h(e,[0,e[0]>>>1]);e=d(e,[3301882366,444984403]);e=h(e,[0,e[0]>>>1]);return e};var s=function(e,r){e=e||"";r=r||0;var a=e.length%16;var t=e.length-a;var n=[0,r];var i=[0,r];var o=[0,0];var u=[0,0];var l=[2277735313,289559509];var s=[1291169091,658871167];for(var c=0;c<t;c=c+16){o=[e.charCodeAt(c+4)&255|(e.charCodeAt(c+5)&255)<<8|(e.charCodeAt(c+6)&255)<<16|(e.charCodeAt(c+7)&255)<<24,e.charCodeAt(c)&255|(e.charCodeAt(c+1)&255)<<8|(e.charCodeAt(c+2)&255)<<16|(e.charCodeAt(c+3)&255)<<24];u=[e.charCodeAt(c+12)&255|(e.charCodeAt(c+13)&255)<<8|(e.charCodeAt(c+14)&255)<<16|(e.charCodeAt(c+15)&255)<<24,e.charCodeAt(c+8)&255|(e.charCodeAt(c+9)&255)<<8|(e.charCodeAt(c+10)&255)<<16|(e.charCodeAt(c+11)&255)<<24];o=d(o,l);o=g(o,31);o=d(o,s);n=h(n,o);n=g(n,27);n=f(n,i);n=f(d(n,[0,5]),[0,1390208809]);u=d(u,s);u=g(u,33);u=d(u,l);i=h(i,u);i=g(i,31);i=f(i,n);i=f(d(i,[0,5]),[0,944331445])}o=[0,0];u=[0,0];switch(a){case 15:u=h(u,v([0,e.charCodeAt(c+14)],48));case 14:u=h(u,v([0,e.charCodeAt(c+13)],40));case 13:u=h(u,v([0,e.charCodeAt(c+12)],32));case 12:u=h(u,v([0,e.charCodeAt(c+11)],24));case 11:u=h(u,v([0,e.charCodeAt(c+10)],16));case 10:u=h(u,v([0,e.charCodeAt(c+9)],8));case 9:u=h(u,[0,e.charCodeAt(c+8)]);u=d(u,s);u=g(u,33);u=d(u,l);i=h(i,u);case 8:o=h(o,v([0,e.charCodeAt(c+7)],56));case 7:o=h(o,v([0,e.charCodeAt(c+6)],48));case 6:o=h(o,v([0,e.charCodeAt(c+5)],40));case 5:o=h(o,v([0,e.charCodeAt(c+4)],32));case 4:o=h(o,v([0,e.charCodeAt(c+3)],24));case 3:o=h(o,v([0,e.charCodeAt(c+2)],16));case 2:o=h(o,v([0,e.charCodeAt(c+1)],8));case 1:o=h(o,[0,e.charCodeAt(c)]);o=d(o,l);o=g(o,31);o=d(o,s);n=h(n,o)}n=h(n,[0,e.length]);i=h(i,[0,e.length]);n=f(n,i);i=f(i,n);n=m(n);i=m(i);n=f(n,i);i=f(i,n);return("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)};var e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:true},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:false},screen:{detectScreenOrientation:true},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:false},extraComponents:[],excludes:{enumerateDevices:true,pixelRatio:true,doNotTrack:true,fontsFlash:true},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"};var p=function(e,r){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach){e.forEach(r)}else if(e.length===+e.length){for(var a=0,t=e.length;a<t;a++){r(e[a],a,e)}}else{for(var n in e){if(e.hasOwnProperty(n)){r(e[n],n,e)}}}};var u=function(e,t){var n=[];if(e==null){return n}if(Array.prototype.map&&e.map===Array.prototype.map){return e.map(t)}p(e,function(e,r,a){n.push(t(e,r,a))});return n};var r=function(e,r){if(r==null){return e}var a;var t;for(t in r){a=r[t];if(a!=null&&!Object.prototype.hasOwnProperty.call(e,t)){e[t]=a}}return e};var a=function(r,e){if(!t()){return r(e.NOT_AVAILABLE)}navigator.mediaDevices.enumerateDevices().then(function(e){r(e.map(function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}))}).catch(function(e){r(e)})};var t=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices};var n=function(a,e){var r=e.audio;if(r.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)){return a(e.EXCLUDED)}var t=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(t==null){return a(e.NOT_AVAILABLE)}var n=new t(1,44100,44100);var i=n.createOscillator();i.type="triangle";i.frequency.setValueAtTime(1e4,n.currentTime);var o=n.createDynamicsCompressor();p([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){if(o[e[0]]!==undefined&&typeof o[e[0]].setValueAtTime==="function"){o[e[0]].setValueAtTime(e[1],n.currentTime)}});i.connect(o);o.connect(n.destination);i.start(0);n.startRendering();var u=setTimeout(function(){n.oncomplete=function(){};n=null;return a("audioTimeout")},r.timeout);n.oncomplete=function(e){var r;try{clearTimeout(u);r=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,r){return e+Math.abs(r)},0).toString();i.disconnect();o.disconnect()}catch(e){a(e);return}a(r)}};var i=function(e){e(navigator.userAgent)};var o=function(e,r){e(navigator.webdriver==null?r.NOT_AVAILABLE:navigator.webdriver)};var c=function(e,r){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||r.NOT_AVAILABLE)};var T=function(e,r){e(window.screen.colorDepth||r.NOT_AVAILABLE)};var S=function(e,r){e(navigator.deviceMemory||r.NOT_AVAILABLE)};var A=function(e,r){e(window.devicePixelRatio||r.NOT_AVAILABLE)};var C=function(e,r){e(w(r))};var w=function(e){var r=[window.screen.width,window.screen.height];if(e.screen.detectScreenOrientation){r.sort().reverse()}return r};var y=function(e,r){e(B(r))};var B=function(e){if(window.screen.availWidth&&window.screen.availHeight){var r=[window.screen.availHeight,window.screen.availWidth];if(e.screen.detectScreenOrientation){r.sort().reverse()}return r}return e.NOT_AVAILABLE};var E=function(e){e((new Date).getTimezoneOffset())};var x=function(e,r){if(window.Intl&&window.Intl.DateTimeFormat){e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone);return}e(r.NOT_AVAILABLE)};var M=function(e,r){e(q(r))};var O=function(e,r){e(Q(r))};var k=function(e,r){e($(r))};var _=function(e){e(!!(document.body&&document.body.addBehavior))};var b=function(e){e(!!window.openDatabase)};var L=function(e,r){e(re(r))};var P=function(e,r){e(ae(r))};var D=function(e,r){e(te(r))};var I=function(e,r){if(ge()){e(ie(r));return}e(r.NOT_AVAILABLE)};var R=function(e,r){if(ve()){e(oe());return}e(r.NOT_AVAILABLE)};var N=function(e){if(ve()){e(ue());return}e()};var F=function(e){e(le())};var G=function(e){e(se())};var U=function(e){e(ce())};var V=function(e){e(fe())};var H=function(e){e(de())};var X=function(r,e){if(!me()){return r("swf object not loaded")}if(!pe()){return r("flash not installed")}if(!e.fonts.swfPath){return r("missing options.fonts.swfPath")}Se(function(e){r(e)},e)};var W=function(e,r){var u=["monospace","sans-serif","serif"];var l=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];if(r.fonts.extendedJsFonts){var a=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];l=l.concat(a)}l=l.concat(r.fonts.userDefinedFonts);l=l.filter(function(e,r){return l.indexOf(e)===r});var t="mmmmmmmmmmlli";var n="72px";var i=document.getElementsByTagName("body")[0];var o=document.createElement("div");var s=document.createElement("div");var c={};var f={};var d=function(){var e=document.createElement("span");e.style.position="absolute";e.style.left="-9999px";e.style.fontSize=n;e.style.fontStyle="normal";e.style.fontWeight="normal";e.style.letterSpacing="normal";e.style.lineBreak="auto";e.style.lineHeight="normal";e.style.textTransform="none";e.style.textAlign="left";e.style.textDecoration="none";e.style.textShadow="none";e.style.whiteSpace="normal";e.style.wordBreak="normal";e.style.wordSpacing="normal";e.innerHTML=t;return e};var g=function(e,r){var a=d();a.style.fontFamily="'"+e+"',"+r;return a};var v=function(){var e=[];for(var r=0,a=u.length;r<a;r++){var t=d();t.style.fontFamily=u[r];o.appendChild(t);e.push(t)}return e};var h=function(){var e={};for(var r=0,a=l.length;r<a;r++){var t=[];for(var n=0,i=u.length;n<i;n++){var o=g(l[r],u[n]);s.appendChild(o);t.push(o)}e[l[r]]=t}return e};var m=function(e){var r=false;for(var a=0;a<u.length;a++){r=e[a].offsetWidth!==c[u[a]]||e[a].offsetHeight!==f[u[a]];if(r){return r}}return r};var p=v();i.appendChild(o);for(var T=0,S=u.length;T<S;T++){c[u[T]]=p[T].offsetWidth;f[u[T]]=p[T].offsetHeight}var A=h();i.appendChild(s);var C=[];for(var w=0,y=l.length;w<y;w++){if(m(A[l[w]])){C.push(l[w])}}i.removeChild(s);i.removeChild(o);e(C)};var j=function(e,r){if(he()){if(!r.plugins.excludeIE){e(z(r))}else{e(r.EXCLUDED)}}else{e(K(r))}};var K=function(e){if(navigator.plugins==null){return e.NOT_AVAILABLE}var r=[];for(var a=0,t=navigator.plugins.length;a<t;a++){if(navigator.plugins[a]){r.push(navigator.plugins[a])}}if(J(e)){r=r.sort(function(e,r){if(e.name>r.name){return 1}if(e.name<r.name){return-1}return 0})}return u(r,function(e){var r=u(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,r]})};var z=function(r){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var a=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=u(a,function(e){try{new window.ActiveXObject(e);return e}catch(e){return r.ERROR}})}else{e.push(r.NOT_AVAILABLE)}if(navigator.plugins){e=e.concat(K(r))}return e};var J=function(e){var r=false;for(var a=0,t=e.plugins.sortPluginsFor.length;a<t;a++){var n=e.plugins.sortPluginsFor[a];if(navigator.userAgent.match(n)){r=true;break}}return r};var Z=function(e){e(ne())};var Y=function(e,r){e(ee(r))};var q=function(r){try{return!!window.sessionStorage}catch(e){return r.ERROR}};var Q=function(r){try{return!!window.localStorage}catch(e){return r.ERROR}};var $=function(r){try{return!!window.indexedDB}catch(e){return r.ERROR}};var ee=function(e){if(navigator.hardwareConcurrency){return navigator.hardwareConcurrency}return e.NOT_AVAILABLE};var re=function(e){return navigator.cpuClass||e.NOT_AVAILABLE};var ae=function(e){if(navigator.platform){return navigator.platform}else{return e.NOT_AVAILABLE}};var te=function(e){if(navigator.doNotTrack){return navigator.doNotTrack}else if(navigator.msDoNotTrack){return navigator.msDoNotTrack}else if(window.doNotTrack){return window.doNotTrack}else{return e.NOT_AVAILABLE}};var ne=function(){var e=0;var r;if(typeof navigator.maxTouchPoints!=="undefined"){e=navigator.maxTouchPoints}else if(typeof navigator.msMaxTouchPoints!=="undefined"){e=navigator.msMaxTouchPoints}try{document.createEvent("TouchEvent");r=true}catch(e){r=false}var a="ontouchstart"in window;return[e,r,a]};var ie=function(e){var r=[];var a=document.createElement("canvas");a.width=2e3;a.height=200;a.style.display="inline";var t=a.getContext("2d");t.rect(0,0,10,10);t.rect(2,2,6,6);r.push("canvas winding:"+(t.isPointInPath(5,5,"evenodd")===false?"yes":"no"));t.textBaseline="alphabetic";t.fillStyle="#f60";t.fillRect(125,1,62,20);t.fillStyle="#069";if(e.dontUseFakeFontInCanvas){t.font="11pt Arial"}else{t.font="11pt no-real-font-123"}t.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15);t.fillStyle="rgba(102, 204, 0, 0.2)";t.font="18pt Arial";t.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45);t.globalCompositeOperation="multiply";t.fillStyle="rgb(255,0,255)";t.beginPath();t.arc(50,50,50,0,Math.PI*2,true);t.closePath();t.fill();t.fillStyle="rgb(0,255,255)";t.beginPath();t.arc(100,50,50,0,Math.PI*2,true);t.closePath();t.fill();t.fillStyle="rgb(255,255,0)";t.beginPath();t.arc(75,100,50,0,Math.PI*2,true);t.closePath();t.fill();t.fillStyle="rgb(255,0,255)";t.arc(75,75,75,0,Math.PI*2,true);t.arc(75,75,25,0,Math.PI*2,true);t.fill("evenodd");if(a.toDataURL){r.push("canvas fp:"+a.toDataURL())}return r};var oe=function(){var o;var e=function(e){o.clearColor(0,0,0,1);o.enable(o.DEPTH_TEST);o.depthFunc(o.LEQUAL);o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);return"["+e[0]+", "+e[1]+"]"};var r=function(e){var r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(r){var a=e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);if(a===0){a=2}return a}else{return null}};o=Ae();if(!o){return null}var u=[];var a="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";var t="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";var n=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,n);var i=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);o.bufferData(o.ARRAY_BUFFER,i,o.STATIC_DRAW);n.itemSize=3;n.numItems=3;var l=o.createProgram();var s=o.createShader(o.VERTEX_SHADER);o.shaderSource(s,a);o.compileShader(s);var c=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(c,t);o.compileShader(c);o.attachShader(l,s);o.attachShader(l,c);o.linkProgram(l);o.useProgram(l);l.vertexPosAttrib=o.getAttribLocation(l,"attrVertex");l.offsetUniform=o.getUniformLocation(l,"uniformOffset");o.enableVertexAttribArray(l.vertexPosArray);o.vertexAttribPointer(l.vertexPosAttrib,n.itemSize,o.FLOAT,!1,0,0);o.uniform2f(l.offsetUniform,1,1);o.drawArrays(o.TRIANGLE_STRIP,0,n.numItems);try{u.push(o.canvas.toDataURL())}catch(e){}u.push("extensions:"+(o.getSupportedExtensions()||[]).join(";"));u.push("webgl aliased line width range:"+e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE)));u.push("webgl aliased point size range:"+e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE)));u.push("webgl alpha bits:"+o.getParameter(o.ALPHA_BITS));u.push("webgl antialiasing:"+(o.getContextAttributes().antialias?"yes":"no"));u.push("webgl blue bits:"+o.getParameter(o.BLUE_BITS));u.push("webgl depth bits:"+o.getParameter(o.DEPTH_BITS));u.push("webgl green bits:"+o.getParameter(o.GREEN_BITS));u.push("webgl max anisotropy:"+r(o));u.push("webgl max combined texture image units:"+o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS));u.push("webgl max cube map texture size:"+o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE));u.push("webgl max fragment uniform vectors:"+o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS));u.push("webgl max render buffer size:"+o.getParameter(o.MAX_RENDERBUFFER_SIZE));u.push("webgl max texture image units:"+o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS));u.push("webgl max texture size:"+o.getParameter(o.MAX_TEXTURE_SIZE));u.push("webgl max varying vectors:"+o.getParameter(o.MAX_VARYING_VECTORS));u.push("webgl max vertex attribs:"+o.getParameter(o.MAX_VERTEX_ATTRIBS));u.push("webgl max vertex texture image units:"+o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS));u.push("webgl max vertex uniform vectors:"+o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS));u.push("webgl max viewport dims:"+e(o.getParameter(o.MAX_VIEWPORT_DIMS)));u.push("webgl red bits:"+o.getParameter(o.RED_BITS));u.push("webgl renderer:"+o.getParameter(o.RENDERER));u.push("webgl shading language version:"+o.getParameter(o.SHADING_LANGUAGE_VERSION));u.push("webgl stencil bits:"+o.getParameter(o.STENCIL_BITS));u.push("webgl vendor:"+o.getParameter(o.VENDOR));u.push("webgl version:"+o.getParameter(o.VERSION));try{var f=o.getExtension("WEBGL_debug_renderer_info");if(f){u.push("webgl unmasked vendor:"+o.getParameter(f.UNMASKED_VENDOR_WEBGL));u.push("webgl unmasked renderer:"+o.getParameter(f.UNMASKED_RENDERER_WEBGL))}}catch(e){}if(!o.getShaderPrecisionFormat){return u}p(["FLOAT","INT"],function(i){p(["VERTEX","FRAGMENT"],function(n){p(["HIGH","MEDIUM","LOW"],function(t){p(["precision","rangeMin","rangeMax"],function(e){var r=o.getShaderPrecisionFormat(o[n+"_SHADER"],o[t+"_"+i])[e];if(e!=="precision"){e="precision "+e}var a=["webgl ",n.toLowerCase()," shader ",t.toLowerCase()," ",i.toLowerCase()," ",e,":",r].join("");u.push(a)})})})});return u};var ue=function(){try{var e=Ae();var r=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(r.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(r.UNMASKED_RENDERER_WEBGL)}catch(e){return null}};var le=function(){var e=document.createElement("div");e.innerHTML="&nbsp;";e.className="adsbox";var r=false;try{document.body.appendChild(e);r=document.getElementsByClassName("adsbox")[0].offsetHeight===0;document.body.removeChild(e)}catch(e){r=false}return r};var se=function(){if(typeof navigator.languages!=="undefined"){try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2)){return true}}catch(e){return true}}return false};var ce=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight};var fe=function(){var e=navigator.userAgent.toLowerCase();var r=navigator.oscpu;var a=navigator.platform.toLowerCase();var t;if(e.indexOf("windows phone")>=0){t="Windows Phone"}else if(e.indexOf("win")>=0){t="Windows"}else if(e.indexOf("android")>=0){t="Android"}else if(e.indexOf("linux")>=0||e.indexOf("cros")>=0){t="Linux"}else if(e.indexOf("iphone")>=0||e.indexOf("ipad")>=0){t="iOS"}else if(e.indexOf("mac")>=0){t="Mac"}else{t="Other"}var n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(n&&t!=="Windows Phone"&&t!=="Android"&&t!=="iOS"&&t!=="Other"){return true}if(typeof r!=="undefined"){r=r.toLowerCase();if(r.indexOf("win")>=0&&t!=="Windows"&&t!=="Windows Phone"){return true}else if(r.indexOf("linux")>=0&&t!=="Linux"&&t!=="Android"){return true}else if(r.indexOf("mac")>=0&&t!=="Mac"&&t!=="iOS"){return true}else if((r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!==(t==="Other")){return true}}if(a.indexOf("win")>=0&&t!=="Windows"&&t!=="Windows Phone"){return true}else if((a.indexOf("linux")>=0||a.indexOf("android")>=0||a.indexOf("pike")>=0)&&t!=="Linux"&&t!=="Android"){return true}else if((a.indexOf("mac")>=0||a.indexOf("ipad")>=0||a.indexOf("ipod")>=0||a.indexOf("iphone")>=0)&&t!=="Mac"&&t!=="iOS"){return true}else{var i=a.indexOf("win")<0&&a.indexOf("linux")<0&&a.indexOf("mac")<0&&a.indexOf("iphone")<0&&a.indexOf("ipad")<0;if(i!==(t==="Other")){return true}}return typeof navigator.plugins==="undefined"&&t!=="Windows"&&t!=="Windows Phone"};var de=function(){var e=navigator.userAgent.toLowerCase();var r=navigator.productSub;var a;if(e.indexOf("firefox")>=0){a="Firefox"}else if(e.indexOf("opera")>=0||e.indexOf("opr")>=0){a="Opera"}else if(e.indexOf("chrome")>=0){a="Chrome"}else if(e.indexOf("safari")>=0){a="Safari"}else if(e.indexOf("trident")>=0){a="Internet Explorer"}else{a="Other"}if((a==="Chrome"||a==="Safari"||a==="Opera")&&r!=="20030107"){return true}var t=eval.toString().length;if(t===37&&a!=="Safari"&&a!=="Firefox"&&a!=="Other"){return true}else if(t===39&&a!=="Internet Explorer"&&a!=="Other"){return true}else if(t===33&&a!=="Chrome"&&a!=="Opera"&&a!=="Other"){return true}var n;try{throw"a"}catch(e){try{e.toSource();n=true}catch(e){n=false}}return n&&a!=="Firefox"&&a!=="Other"};var ge=function(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))};var ve=function(){if(!ge()){return false}var e=Ae();return!!window.WebGLRenderingContext&&!!e};var he=function(){if(navigator.appName==="Microsoft Internet Explorer"){return true}else if(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent)){return true}return false};var me=function(){return typeof window.swfobject!=="undefined"};var pe=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")};var Te=function(e){var r=document.createElement("div");r.setAttribute("id",e.fonts.swfContainerId);document.body.appendChild(r)};var Se=function(r,e){var a="___fp_swf_loaded";window[a]=function(e){r(e)};var t=e.fonts.swfContainerId;Te();var n={onReady:a};var i={allowScriptAccess:"always",menu:"false"};window.swfobject.embedSWF(e.fonts.swfPath,t,"1","1","9.0.0",false,n,i,{})};var Ae=function(){var e=document.createElement("canvas");var r=null;try{r=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}if(!r){r=null}return r};var Ce=[{key:"userAgent",getData:i},{key:"webdriver",getData:o},{key:"language",getData:c},{key:"colorDepth",getData:T},{key:"deviceMemory",getData:S},{key:"pixelRatio",getData:A},{key:"hardwareConcurrency",getData:Y},{key:"screenResolution",getData:C},{key:"availableScreenResolution",getData:y},{key:"timezoneOffset",getData:E},{key:"timezone",getData:x},{key:"sessionStorage",getData:M},{key:"localStorage",getData:O},{key:"indexedDb",getData:k},{key:"addBehavior",getData:_},{key:"openDatabase",getData:b},{key:"cpuClass",getData:L},{key:"platform",getData:P},{key:"doNotTrack",getData:D},{key:"plugins",getData:j},{key:"canvas",getData:I},{key:"webgl",getData:R},{key:"webglVendorAndRenderer",getData:N},{key:"adBlock",getData:F},{key:"hasLiedLanguages",getData:G},{key:"hasLiedResolution",getData:U},{key:"hasLiedOs",getData:V},{key:"hasLiedBrowser",getData:H},{key:"touchSupport",getData:Z},{key:"fonts",getData:W,pauseBefore:true},{key:"fontsFlash",getData:X,pauseBefore:true},{key:"audio",getData:n},{key:"enumerateDevices",getData:a}];var we=function(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")};we.get=function(a,t){if(!t){t=a;a={}}else if(!a){a={}}r(a,e);a.components=a.extraComponents.concat(Ce);var n={data:[],addPreprocessedComponent:function(e,r){if(typeof a.preprocessor==="function"){r=a.preprocessor(e,r)}n.data.push({key:e,value:r})}};var i=-1;var o=function(e){i+=1;if(i>=a.components.length){t(n.data);return}var r=a.components[i];if(a.excludes[r.key]){o(false);return}if(!e&&r.pauseBefore){i-=1;setTimeout(function(){o(true)},1);return}try{r.getData(function(e){n.addPreprocessedComponent(r.key,e);o(false)},a)}catch(e){n.addPreprocessedComponent(r.key,String(e));o(false)}};o(false)};we.getPromise=function(a){return new Promise(function(e,r){we.get(a,e)})};we.getV18=function(i,o){if(o==null){o=i;i={}}return we.get(i,function(e){var r=[];for(var a=0;a<e.length;a++){var t=e[a];if(t.value===(i.NOT_AVAILABLE||"not available")){r.push({key:t.key,value:"unknown"})}else if(t.key==="plugins"){r.push({key:"plugins",value:u(t.value,function(e){var r=u(e[2],function(e){if(e.join){return e.join("~")}return e}).join(",");return[e[0],e[1],r].join("::")})})}else if(["canvas","webgl"].indexOf(t.key)!==-1){r.push({key:t.key,value:t.value.join("~")})}else if(["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(t.key)!==-1){if(t.value){r.push({key:t.key,value:1})}else{continue}}else{if(t.value){r.push(t.value.join?{key:t.key,value:t.value.join(";")}:t)}else{r.push({key:t.key,value:t.value})}}}var n=s(u(r,function(e){return e.value}).join("~~~"),31);o(n,r)})};var ye=null;var Be="";var Ee=null;var xe=null;var Me=null;var Oe={};var ke=null;var _e=false;var be=null;function Le(e){var r=s(e.map(function(e){return e.value}).join(),15);r=r.substr(0,8);var a=0;for(var t in e){var n=e[t];var i=n.key+" = "+String(n.value).substr(0,100);Be+=i+"\n";Oe[n.key]=String(n.value).substr(0,100)}if(cookie.get("_fp_ref_"))a=Ie(Pe(window.btoa(JSON.stringify(Oe))),cookie.get("_fp_ref_"));else{a=0}Ee=a;if(a<l){cookie.set("_fp_ref_",Pe(window.btoa(JSON.stringify(Oe))))}var o=new Date;var u=o-be;Me=u;if(a<l){cookie.set("_fp",r);cookie.set("_fp_LastChangeTime",Date.parse(o)/1e3);xe=o;ye=r}else{xe=new Date(cookie.get("_fp_LastChangeTime")*1e3);ye=cookie.get("_fp")}console.log("\n"+" %c fp v2.0.1 %c "+ye+"::"+String(Ee*100).substr(0,4)+"%::"+Me+"ms %c https://fp.yimian.xyz \n","color: #00FFFF; background: #030307; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #4682B4; padding:5px 0;")}function Pe(e){var r="";for(var a=0;a<e.length;a+=Math.round(e.length/289)){r+=e.charAt(a)}return r}function De(){var e={_fp:cookie.get("_fp"),_fp_ref_:cookie.get("_fp_ref_"),_fp_LastChangeTime:cookie.get("_fp_LastChangeTime")};ke=window.btoa(JSON.stringify(e));return ke}var Ie=function(){function e(e,r){var a;var t=e.length;var n=r.length;if(t<n){var i=e;e=r;r=i;var o=t;t=n;n=o}var u=[];u[0]=[];for(var i=0;i<n+1;++i){u[0][i]=i}for(var l=1;l<t+1;++l){u[l]=[];u[l][0]=l;for(var s=1;s<n+1;++s){a=e.charAt(l-1)===r.charAt(s-1)?0:1;u[l][s]=c(u[l-1][s]+1,u[l][s-1]+1,u[l-1][s-1]+a)}}return 1-u[t-1][n-1]/Math.max(t,n)}function c(e,r,a){if(e<=r&&e<=a)return e;if(r<=e&&r<=a)return r;return a}return e}();var Re=function(e){var r;try{r=JSON.parse(window.atob(e))}catch(e){return false}if(r._fp===undefined||r._fp_ref_===undefined||r._fp_LastChangeTime===undefined){return false}return true};var Ne=function(e,r){if(e!=ke&&!_e&&Re(e)){e=window.atob(e);var a=JSON.parse(e);cookie.set("_fp",a._fp);cookie.set("_fp_ref_",a._fp_ref_);cookie.set("_fp_LastChangeTime",a._fp_LastChangeTime);Fe()}Ge(r)};var Fe=function(){be=new Date;we.get(Le);_e=true};var Ge=function(e){if(!ye){setTimeout(Ge,1,e);return}e(ye,De(),Ee,Be,xe,Me,Oe)};var Ue=function(e,r){if(typeof e==="function"){if(!_e){Fe()}Ge(e);return}if(typeof e==="string"){if(r==undefined)r=function(){};if(e=="reset"){cookie.del("_fp");cookie.del("_fp_ref_");cookie.del("_fp_LastChangeTime");Fe();Ge(r);return}else{Ne(e,r)}return}};return Ue});


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
    if(page.params['fpKey'] == undefined || page.params['fpKey'].length < 20){
        fp(fp_callback);
    }else{
        fp(page.params['fpKey'], fp_callback);
    }
}

function fp_callback(myFp, key, acc, detail, createdTime, timeUsed, detailObj) {
        page.fp = myFp;
        page.fpKey = key;
        $.post("https://log.yimian.xyz/iis.php",{
            "fp":myFp,
            "url": page.url,
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
            updateHref();
        });
}

function log_update() {
    $.post('https://log.yimian.xyz/iis.php',{
        "sid": page.sid,
        "sessiontime": page.Timer
    })
}
setTimeout("log_ini();", 800);




/* update the href in <a> with fp and from*/
function updateHref(){
	var links = $(document).find("a");
	for(var index in links) {

		var _href = links.eq(index).attr("href");

		if(_href != null) {
			if(_href.indexOf("?") == -1) links.eq(index).attr("href",_href + "?fpKey=" + page.fp + ((page.host) ? ("&from=https://"+page.host) : ""));
			else links.eq(index).attr("href",_href + "&fpKey=" + page.fp + ((page.host) ? ("&from=https://"+page.host) : ""));
		}
	}
};
