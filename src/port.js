
const fs = require("fs");
const fd = fs.openSync("jsonCourses.json", "w");
var s = `
Bridge Market|
https://bridge-market.netlify.app|
https://d33wubrfki0l68.cloudfront.net/6183594cf753f94e9461e97d/screenshot_2021-11-04-03-53-51-0000.png|
vue,html,css,javascript,blockchain,adamant,arweave|
Cross-chain decentralized NFT marketplace with six tokens available
. Built in vuejs users can sign up and get all of their wallets made for them. They can then use the custom bidding system to trade NFTs across multiple different networks while maintaining
the trustless decentralized benefits of standard decentralized marketplaces like Opensea.|
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
https://d33wubrfki0l68.cloudfront.net/6149f787920d231768cdcb5f/screenshot_2021-09-21-15-17-28-0000.png
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
JSTAS|
https://jstats.netlify.app|
https://d33wubrfki0l68.cloudfront.net/6139150cdc2d59134feeddcc/screenshot_2021-09-08-19-54-53-0000.png|
mathematics, statistics, notebooks, ide, javascript|
Use client side javascript in a notebook experience with built in graphing and statistical libraries as well as some extra functions to give your programs a more sequential input experience
similar to cin>> or input("").|
https://github.com/Whsmith1234/jstas|
SMS image compression|
https://romantic-khorana-8cc1b8.netlify.app/|
https://d33wubrfki0l68.cloudfront.net/61392afe85f95600d51622d0/screenshot_2021-09-08-21-28-31-0000.png|
images,p5.js,javscript,compression,sms|
Converts images and drawings into a string of characters that can then be translated back to the image using the website. I made this when I did not have data on my phone and needed a way to send
 my friends images via text message. By storing only the pixels where colours change it allows for tiny strings to express readable drawings.
|https://github.com/Whsmith1234/SMS-image-compression|
Homework Helper|
https://homework-help.netlify.app/|
https://d33wubrfki0l68.cloudfront.net/61e250876a840ea1197e7817/screenshot_2022-01-15-04-41-45-0000.png
html, css, javascript, react, pwa, rust, tauri|
Being an awful procrastinator I often found myself needing a way to keep up with essays. To do this I built an essay helper using react js which splits up the process of writing and gives a live word count 
to keep me motivated working. Tauri was used to make the program a native app I could run while offline but using react I converted the site into a PWA to do the same.|
https://github.com/Whsmith1234/Homework-Helper|
Guelph Courses|
https://guelphcourses.netlify.app|
https://d33wubrfki0l68.cloudfront.net/61391677a5c9a50ccb95a3bb/screenshot_2021-09-08-20-00-59-0000.png|
html,css,javascript,bootstrap,graphs|
Scraped the university of Guelph's website to produce an adjacency matrix of all the undergraduate courses offered there.
 Used this data to make a website to show university of Guelph students all of their available courses in graph format to show where courses lead to as well as the pre-requisits they require.
|
https://github.com/Whsmith1234/Guelph-Courses|

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