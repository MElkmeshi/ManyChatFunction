const express = require("express");
const app = express();
const json = require("./data.json");
let PORT = process.env.PORT || 3000;
app.get("/", (req,res) => {
    res.send("Hello World")
});
app.get("/api", (req,res) => {
    res.send(data)
});
function manychatjson(json,cardnum=10) {
    num = json["products"].length;
    if (cardnum>num){
        cardnum = num
    }
    manychat = {"version": "v2","content": {"messages": [],"actions": [],"quick_replies": []}};
    x = 1;
    for (let i = 0; i < Math.floor(num/cardnum); i++)   {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
        x = i;
        for (let j = 0; j < cardnum; j++)   {
            manychat["content"]["messages"][i]["elements"].push({"title": json["products"][(i*cardnum)+j]["name"],"subtitle": json["products"][(i*cardnum)+j]["description"],"image_url": json["products"][(i*cardnum)+j]["image"],"action_url": "https://manychat.com","buttons": []});
        }
    }
    if (num%cardnum > 0)    {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
        for (let i = x+1; i < x+2; i++){
            for(let j = 0; j < num%cardnum; j++)    {
                manychat["content"]["messages"][i]["elements"].push({"title": json["products"][(i*cardnum)+j]["name"],"subtitle": json["products"][(i*cardnum)+j]["description"],"image_url": json["products"][(i*cardnum)+j]["image"],"action_url": "https://manychat.com","buttons": []});
            }
        }
    }
    return manychat;
}
app.get("/test", (req,res) => {
    res.send(manychatjson(json));
});
app.listen(PORT, () => {
    console.log(`listening on post ${PORT}`);
});