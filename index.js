const express = require("express");
const app = express();
const json = require("./data.json");
let PORT = process.env.PORT || 5000;
app.get("/", (req,res) => {
    res.send("Hello World")
});
app.get("/api", (req,res) => {
    res.send(data)
});
function manychatjson(json,cardnum=10) {
    if (cardnum>num || cardnum == 0)
        cardnum = num;
    //{if you want to edit} edit the num varibles to the length of the list you want to repart about
    var num = json["products"].length,i;
    manychat = {"version": "v2","content": {"messages": [],"actions": [],"quick_replies": []}};
    for (i = 0; i < Math.floor(num/cardnum); i++)   {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
        for (let j = 0; j < cardnum; j++)   {
            /*edit each vaible the way you want it to display
            don't forget the other for loop*/
            title = json["products"][(i*cardnum)+j]["name"];
            subtitle = json["products"][(i*cardnum)+j]["description"];
            image_url = json["products"][(i*cardnum)+j]["image"];
            manychat["content"]["messages"][i]["elements"].push({"title": title,"subtitle": subtitle,"image_url": image_url,"action_url": "https://manychat.com","buttons": []});
        }
    }
    if (num%cardnum > 0)   {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
            for(let j = 0; j < num%cardnum; j++)    {
                //this one
                title = json["products"][(i*cardnum)+j]["name"];
                subtitle = json["products"][(i*cardnum)+j]["description"];
                image_url = json["products"][(i*cardnum)+j]["image"];
                manychat["content"]["messages"][i]["elements"].push({"title": title,"subtitle": subtitle,"image_url": image_url,"action_url": "https://manychat.com","buttons": []});    
            }
    }
    return manychat;
}
app.get("/test", (req,res) => {
    cardnum = req.headers.cardnum
    res.send(manychatjson(json,9));
});
app.listen(PORT, () => {
    console.log(`listening on post ${PORT}`);
});
