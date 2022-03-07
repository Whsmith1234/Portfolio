
const fs = require("fs");
const fd = fs.openSync("jsonCourses.json", "w");
var s = `
Bridge Market|
https://bridge-market.netlify.app|
https://d33wubrfki0l68.cloudfront.net/6183594cf753f94e9461e97d/screenshot_2021-11-04-03-53-51-0000.png|
vue,html,css,javascript,blockchain,adamant,arweave|
Cross-chain decentralized NFT marketplace with 6 tokens available|
https://github.com/Whsmith1234/Bridge-Market|
Arvid|
https://arvideo.netlify.app|
https://d33wubrfki0l68.cloudfront.net/62219deba95d11408460f879/screenshot_2022-03-04-05-04-46-0000.png|
vue,html,css,javascript,arweave,video,chrome-extension|
Upload any video src to the Arweave Blockchain using the Arvid chrome extension. The video can now not be taken down, changed or censored due to the nature of the arweave network. People visting the location
of the video later can use the chrome extension to view your saved copy or the original.| 
https://github.com/Whsmith1234/AR-Vid|
UGC|
https://ugc.netlify.app|
https://d33wubrfki0l68.cloudfront.net/61415ef1ce1f961374bc1523/screenshot_2021-09-15-02-48-18-0000.png|
react,firebase,html,css,javascript|
Users sign up with their school email which then brings them to the list of group chats currently available for their school as well as
the ability to make more. From there they can chat in real time with other students at their school|
https://github.com/Whsmith1234/group-chats|
MySkinDose|
https://myskindose.com|
https://d33wubrfki0l68.cloudfront.net/61bbd4f8b8bb41346bdb3f5d/screenshot_2021-12-17-00-08-26-0000.png
|
html,css,javascript,python,SQL|
The team at MySkinDose needed a website to show off their product and mission. They also needed to be able to accept emails of potential customers which is done via a flask api.|
 |
True Market Leaders|
https://truemarketleaders.com|
https://d33wubrfki0l68.cloudfront.net/61760c9a14f124345f1b8aac/screenshot_2021-10-25-01-47-08-0000.png
|
html,css,js,bootstrap,python,SQL|
Stock screener used to check if a certain stock is good pick based on a custom algorithm computed using python via a flask api. 
The most commonly searched stocks are stored in a MySql database to limit external api callls and computing resources.|
 |
3a Graphics|
https://3aboxes.netlify.app|
https://d33wubrfki0l68.cloudfront.net/61760c9a14f124345f1b8aac/screenshot_2021-10-25-01-47-08-0000.png
|
webGL,3d graphics|
3agraphics from Guelph Ontario needed a custom 3d box modelling designer for clients to design their own shipping materials. Using webGl and p5.js users could view the box from every angle as well as upload images to customize their work.
|
 |

`;
s = s.replace(/[\n\r]/g,"");
s = s.split("|")
var useful = ["name", "link", "image", "tags", "description", "code"];
var x = {};
var final = [];
for(var i =0;i<s.length;i++){
    if(useful[i%useful.length]==="tags"){
        x["tags"] = s[i].split(",");
    }else{
    x[useful[i%useful.length]] = s[i];
    if(useful[i%useful.length]==="code"){
        final.push(x);
        x={};
    }
}
}
var text = JSON.stringify(final);
fs.writeSync(fd, text, 0, 'utf8');