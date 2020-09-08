# Ushio-js

Ushio front-end toolkit     

[简体中文（推荐）](./zh.md)

## Positioning
Ushio-js integrates a series of front-end services such as ushio-session, fp user agent recognition, [ushio user system](https://github.com/iotcat/ushio-auth), aplayer music control, tips pop-up window management, etc. Toolkit. ushio-js is referenced by all ushio supported websites.


## Instructions

### Global properties page
+ `page.fp`: device fp
+ `page.params`: GET parameters
+ `page.fpObj`: parameter of fp
+ `page.ip`: client ip address
+ `page.path`: page path
+ `page.url`: page with parameter path
+ `page.Timer`: the length of time the page has been opened
+ `page.openTime`: the timestamp of the open page
+ `page.title`: page title
+ `page.host`: target hostname
+ `page.sid`: session id
+ `page.timezone`: time zone
+ `page.timezoneOffset`: Time zone calibration parameter
+ `page.platform`: operating platform
+ `page.userAgent`: user agent
+ `page.language`: client language
+ `page.copyright.full`: copyright
+ `page.auth[]`: authentication information required for the page
+ `page.availableScreenResolution`: Available screen size
+ `page.deviceMemory`: device memory
+ `page.group[]`: page requirements for user groups
+ `page.lang[]`: the language the user knows
+ `page.mask`: page mask information
+ `page.nolang[]`: a language that the user does not recognize
+ `page.proj`: github project address corresponding to the page
+ `page.tran`: Translation related methods
+ `page.showUshio()`: Show Ushio menu


### Page setting parameters
+ `block_aplayer`: do not load aplayer
+ `block_viewport`: does not automatically adapt to mobile
+ `block_tips`: Do not load Global Tips
+ `aplayer_playlist`: play list
+ `block_setting`: Do not display the setting gear
+ `lang[]`: Languages supported by the page
+ `allow_no_cookie`: Allow cookieless operation

### Session method
+ `session.set(index, val)`: set session
+ `session.get(index)`: Get session
+ `session.del(index)`: delete session

### tips method
[Fully compatible with izitoast](https://izitoast.marcelodolza.com/)
+ `tips.show(params)`: show tips
+ `tips.info(params)`: display information
+ `tips.success(params)`: success information
+ `tips.warning(params)`: warning message
+ `tips.error(params)`: error message
+ `tips.question(params)`: question

### jQuery
+ `$.md5()`: Support md5 extension
