console.log(" iRingo: ✈ TestFlight Response");const e=function(){if("undefined"!=typeof $environment&&$environment["surge-version"])return"Surge";if("undefined"!=typeof $environment&&$environment["stash-version"])return"Stash";if("undefined"!=typeof module&&module.exports)return"Node.js";if("undefined"!=typeof $task)return"Quantumult X";if("undefined"!=typeof $loon)return"Loon";if("undefined"!=typeof $rocket)return"Shadowrocket";if("undefined"!=typeof Egern)return"Egern"}();class t{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class s{static name="Storage";static version="1.1.0";static about(){return a("",`🟧 ${this.name} v${this.version}`,"")}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static getItem(s=new String,a=null){let i=a;if(!0===s.startsWith("@")){const{key:e,path:a}=s.match(this.#e)?.groups;s=e;let o=this.getItem(s,{});"object"!=typeof o&&(o={}),i=t.get(o,a);try{i=JSON.parse(i)}catch(e){}}else{switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.read(s);break;case"Quantumult X":i=$prefs.valueForKey(s);break;case"Node.js":this.data=this.#t(this.dataFile),i=this.data?.[s];break;default:i=this.data?.[s]||null}try{i=JSON.parse(i)}catch(e){}}return i??a}static setItem(s=new String,a=new String){let i=!1;if("object"==typeof a)a=JSON.stringify(a);else a=String(a);if(!0===s.startsWith("@")){const{key:e,path:o}=s.match(this.#e)?.groups;s=e;let n=this.getItem(s,{});"object"!=typeof n&&(n={}),t.set(n,o,a),i=this.setItem(s,n)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.write(a,s);break;case"Quantumult X":i=$prefs.setValueForKey(a,s);break;case"Node.js":this.data=this.#t(this.dataFile),this.data[s]=a,this.#s(this.dataFile),i=!0;break;default:i=this.data?.[s]||null}return i}static removeItem(s){let a=!1;if(!0===s.startsWith("@")){const{key:e,path:i}=s.match(this.#e)?.groups;s=e;let o=this.getItem(s);"object"!=typeof o&&(o={}),keyValue=t.unset(o,i),a=this.setItem(s,o)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:a=!1;break;case"Quantumult X":a=$prefs.removeValueForKey(s)}return a}static clear(){let t=!1;switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:t=!1;break;case"Quantumult X":t=$prefs.removeAllValues()}return t}static#t(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s);if(!a&&!i)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#s(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s),o=JSON.stringify(this.data);a?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}}const a=(...e)=>console.log(e.join("\n"));var i={Switch:!0},o={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},n={Settings:i,Configs:o},r={Switch:!0,PEP:{GCC:"US"}},c={Settings:r},l={Switch:!0,UrlInfoSet:{Dispatcher:"AutoNavi",Directions:"AutoNavi",RAP:"Apple",LocationShift:"AUTO"},TileSet:{Map:"CN",Satellite:"HYBRID",Traffic:"CN",POI:"CN",Flyover:"XX",Munin:"XX"},GeoManifest:{Dynamic:{Config:{CountryCode:{default:"CN",iOS:"AUTO",iPadOS:"AUTO",watchOS:"US",macOS:"AUTO"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"AUTO",iPadOS:"AUTO",watchOS:"AUTO",macOS:"AUTO"}}}},p={},h={Settings:l,Configs:p},d={Switch:!0,CountryCode:"US",NewsPlusUser:!0},u={Settings:d},m={Switch:!0,CountryCode:"US",canUse:!0},S={Settings:m},f={Switch:!0,CountryCode:"SG",Region:"AUTO",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},g={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},y={Settings:f,Configs:g},v={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},b={Settings:v},A={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},T={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},w={Settings:A,Configs:T},C=Database={Default:Object.freeze({__proto__:null,Configs:o,Settings:i,default:n}),Location:Object.freeze({__proto__:null,Settings:r,default:c}),Maps:Object.freeze({__proto__:null,Configs:p,Settings:l,default:h}),News:Object.freeze({__proto__:null,Settings:d,default:u}),PrivateRelay:Object.freeze({__proto__:null,Settings:m,default:S}),Siri:Object.freeze({__proto__:null,Configs:g,Settings:f,default:y}),TestFlight:Object.freeze({__proto__:null,Settings:v,default:b}),TV:Object.freeze({__proto__:null,Configs:T,Settings:A,default:w})};function O(e,i,o){a("☑️ Set Environment Variables","");let{Settings:n,Caches:r,Configs:c}=function(e,a,i){let o=s.getItem(e,i),n={};switch(typeof $argument){case"string":let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in e)t.set(n,s,e[s]);break;case"object":for(let e in $argument)t.set(n,e,$argument[e])}const r={Settings:i?.Default?.Settings||{},Configs:i?.Default?.Configs||{},Caches:{}};Array.isArray(a)||(a=[a]);for(let e of a)r.Settings={...r.Settings,...i?.[e]?.Settings,...n,...o?.[e]?.Settings},r.Configs={...r.Configs,...i?.[e]?.Configs},o?.[e]?.Caches&&"string"==typeof o?.[e]?.Caches&&(o[e].Caches=JSON.parse(o?.[e]?.Caches)),r.Caches={...r.Caches,...o?.[e]?.Caches};return function e(t,s){for(var a in t){var i=t[a];t[a]="object"==typeof i&&null!==i?e(i,s):s(a,i)}return t}(r.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),r;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(e,i,o);switch(i){case"WeatherKit":Array.isArray(n?.AQI?.ReplaceProviders)||t.set(n,"AQI.ReplaceProviders",n?.AQI?.ReplaceProviders?[n.AQI.ReplaceProviders.toString()]:[]),n.AQI.ReplaceProviders.includes("TWC")&&n.AQI.ReplaceProviders.push("The Weather Channel"),n.AQI.ReplaceProviders.includes("QWeather")&&n.AQI.ReplaceProviders.push("和风天气"),n.AQI.ReplaceProviders.push(void 0),Array.isArray(n?.AQI?.Local?.ReplaceScales)||t.set(n,"AQI.Local.ReplaceScales",n?.AQI?.Local?.ReplaceScales?[n.AQI.Local.ReplaceScales.toString()]:[]);break;case"Siri":Array.isArray(n?.Domains)||t.set(n,"Domains",n?.Domains?[n.Domains.toString()]:[]),Array.isArray(n?.Functions)||t.set(n,"Functions",n?.Functions?[n.Functions.toString()]:[]);break;case"TV":Array.isArray(n?.Tabs)||t.set(n,"Tabs",n?.Tabs?[n.Tabs.toString()]:[])}if(a(`✅ Set Environment Variables, Settings: ${typeof n}, Settings内容: ${JSON.stringify(n)}`,""),c.Storefront=new Map(c.Storefront),c.Locale&&(c.Locale=new Map(c.Locale)),c.i18n)for(let e in c.i18n)c.i18n[e]=new Map(c.i18n[e]);return{Settings:n,Caches:r,Configs:c}}a("v3.2.1(1002)");const L=new class{constructor(e,t=void 0){return console.log("\n🟧 URL v2.1.2\n"),e=this.#a(e,t),this}#a(e,t=void 0){const s=/(?:(?<protocol>\w+:)\/\/(?:(?<username>[^\s:"]+)(?::(?<password>[^\s:"]+))?@)?(?<host>[^\s@/]+))?(?<pathname>\/?[^\s@?]+)?(?<search>\?[^\s?]+)?/,a=/(?<hostname>.+):(?<port>\d+)$/;if(e=e.match(s)?.groups||{},t&&(!(t=t?.match(s)?.groups||{}).protocol||!t.hostname))throw new Error(`🚨 ${name}, ${t} is not a valid URL`);if((e.protocol||t?.protocol)&&(this.protocol=e.protocol||t.protocol),(e.username||t?.username)&&(this.username=e.username||t.username),(e.password||t?.password)&&(this.password=e.password||t.password),(e.host||t?.host)&&(this.host=e.host||t.host,Object.freeze(this.host),this.hostname=this.host.match(a)?.groups.hostname??this.host,this.port=this.host.match(a)?.groups.port??""),e.pathname||t?.pathname){if(this.pathname=e.pathname||t?.pathname,this.pathname.startsWith("/")||(this.pathname="/"+this.pathname),this.paths=this.pathname.split("/").filter(Boolean),Object.freeze(this.paths),this.paths){const e=this.paths[this.paths.length-1];if(e?.includes(".")){const t=e.split(".");this.format=t[t.length-1],Object.freeze(this.format)}}}else this.pathname="";return(e.search||t?.search)&&(this.search=e.search||t.search,Object.freeze(this.search),this.search&&(this.searchParams=this.search.slice(1).split("&").map((e=>e.split("="))))),this.searchParams=new Map(this.searchParams||[]),this.harf=this.toString(),Object.freeze(this.harf),this}toString(){let e="";return this.protocol&&(e+=this.protocol+"//"),this.username&&(e+=this.username+(this.password?":"+this.password:"")+"@"),this.hostname&&(e+=this.hostname),this.port&&(e+=":"+this.port),this.pathname&&(e+=this.pathname),0!==this.searchParams.size&&(e+="?"+Array.from(this.searchParams).map((e=>e.join("="))).join("&")),e}toJSON(){return JSON.stringify({...this})}}($request.url);a(`⚠ url: ${L.toJSON()}`,"");const R=$request.method,k=L.hostname,N=L.pathname,U=L.paths;a(`⚠ METHOD: ${R}, HOST: ${k}, PATH: ${N}`,"");const I=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];function M(e){switch(e.platform||e.name){case"ios":a("🚧 ios",""),e=t(e);break;case"osx":a("🚧 osx",""),!0===e?.macBuildCompatibility?.runsOnAppleSilicon&&(a("🚧 runsOnAppleSilicon",""),e=t(e));break;case"appletvos":a("🚧 appletvos","");break;default:a(`🚧 unknown platform: ${e.platform||e.name}`,"")}return e;function t(e){return e.compatible=!0,e.platformCompatible=!0,e.hardwareCompatible=!0,e.osCompatible=!0,e?.permission&&(e.permission="install"),e?.deviceFamilyInfo&&(e.deviceFamilyInfo=[{number:1,name:"iOS",iconUrl:"https://itunesconnect-mr.itunes.apple.com/itc/img/device-icons/device_family_icon_1.png"},{number:2,name:"iPad",iconUrl:"https://itunesconnect-mr.itunes.apple.com/itc/img/device-icons/device_family_icon_2.png"},{number:3,name:"Apple TV",iconUrl:"https://itunesconnect-mr.itunes.apple.com/itc/img/device-icons/device_family_icon_3.png"}]),e?.compatibilityData?.compatibleDeviceFamilies&&(e.compatibilityData.compatibleDeviceFamilies=[{name:"iPad",minimumSupportedDevice:null,unsupportedDevices:[]},{name:"iPhone",minimumSupportedDevice:null,unsupportedDevices:[]},{name:"iPod",minimumSupportedDevice:null,unsupportedDevices:[]},{name:"Mac",minimumSupportedDevice:null,unsupportedDevices:[]}]),e.macBuildCompatibility&&(e.macBuildCompatibility.runsOnIntel=!0,e.macBuildCompatibility.runsOnAppleSilicon=!0),e}}a(`⚠ FORMAT: ${I}`,""),(async()=>{const{Settings:e,Caches:t,Configs:i}=O("iRingo","TestFlight",C);switch(a(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:let i={};switch(I){case void 0:case"application/x-www-form-urlencoded":case"text/plain":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/html":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":if(i=JSON.parse($response.body??"{}"),"testflight.apple.com"===k)switch(N){case"/v1/session/authenticate":if(!0===e.MultiAccount){a("⚠ 启用多账号支持","");const e=$request?.headers?.["X-Request-Id"]??$request?.headers?.["x-request-id"],o=$request?.headers?.["X-Session-Id"]??$request?.headers?.["x-session-id"],n=$request?.headers?.["X-Session-Digest"]??$request?.headers?.["x-session-digest"];t?.data?(a("⚠ 有Caches.data",""),i?.data?.accountId===t?.data?.accountId&&(a("⚠ Account ID相等，刷新缓存",""),t.headers={"X-Request-Id":e,"X-Session-Id":o,"X-Session-Digest":n},t.data=i.data,t.data.termsAndConditions=null,t.data.hasNewTermsAndConditions=!1,s.setItem("@iRingo.TestFlight.Caches",t))):(a("⚠ Caches空，写入",""),t.headers={"X-Request-Id":e,"X-Session-Id":o,"X-Session-Digest":n},t.data=i.data,t.data.termsAndConditions=null,t.data.hasNewTermsAndConditions=!1,s.setItem("@iRingo.TestFlight.Caches",t))}break;case"/v1/devices":case"/v1/devices/apns":case"/v1/devices/add":case"/v1/devices/remove":break;default:switch(U[0]){case"v1":case"v2":case"v3":switch(U[1]){case"accounts":if("settings"===U[2])switch(U[3]){case void 0:break;case"notifications":U[4]}else switch(U[3]){case void 0:break;case"apps":if(void 0===U[4]){if(!0===e.Universal)a("🚧 启用通用应用支持",""),null===i.error&&(a("🚧 数据无错误",""),i.data=i.data.map((e=>(!1!==e.previouslyTested&&(a("🚧 不是前测试人员",""),e.platforms=e.platforms.map((e=>(e.build=M(e.build),e)))),e))))}else switch(U[5]){case void 0:break;case"builds":if(void 0===U[7])if(!0===e.Universal)a("🚧 启用通用应用支持",""),null===i.error&&(a("🚧 数据无错误",""),i.data.currentBuild=M(i.data.currentBuild),i.data.builds=i.data.builds.map((e=>M(e))));break;case"platforms":switch(U[6],U[7]){case void 0:break;case"trains":switch(U[9]){case void 0:break;case"builds":if(void 0===U[10])if(!0===e.Universal)a("🚧 启用通用应用支持",""),null===i.error&&(a("🚧 数据无错误",""),i.data=i.data.map((e=>M(e))))}}}}break;case"apps":if("install"===U[3])U[4];break;case"messages":U[2],U[3]}}}$response.body=JSON.stringify(i);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((t=>function(t){switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:a("","❗️执行错误!",t,"");break;case"Node.js":a("","❗️执行错误!",t.stack,"")}}(t))).finally((()=>function(s={}){switch(e){case"Surge":s.policy&&t.set(s,"headers.X-Surge-Policy",s.policy),a("",`🚩 执行结束! 🕛 ${(new Date).getTime()/1e3-$script.startTime} 秒`,""),$done(s);break;case"Loon":s.policy&&(s.node=s.policy),a("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(s);break;case"Stash":s.policy&&t.set(s,"headers.X-Stash-Selected-Proxy",encodeURI(s.policy)),a("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(s);break;case"Egern":case"Shadowrocket":default:a("","🚩 执行结束!",""),$done(s);break;case"Quantumult X":s.policy&&t.set(s,"opts.policy",s.policy),delete s["auto-redirect"],delete s["auto-cookie"],delete s["binary-mode"],delete s.charset,delete s.host,delete s.insecure,delete s.method,delete s.opt,delete s.path,delete s.policy,delete s["policy-descriptor"],delete s.scheme,delete s.sessionIndex,delete s.statusCode,delete s.timeout,s.body instanceof ArrayBuffer?(s.bodyBytes=s.body,delete s.body):ArrayBuffer.isView(s.body)?(s.bodyBytes=s.body.buffer.slice(s.body.byteOffset,s.body.byteLength+s.body.byteOffset),delete s.body):s.body&&delete s.bodyBytes,a("","🚩 执行结束!",""),$done(s);break;case"Node.js":a("","🚩 执行结束!",""),process.exit(1)}}($response)));
