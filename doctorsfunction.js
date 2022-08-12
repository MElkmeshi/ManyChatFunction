function manychatjson(json,cardnum=10) {
    var title = "name";
    var subtitle = "appointments";
    var image_url = "image";
    num = json["appointments"].length;
    if (cardnum>num || cardnum == 0){
        cardnum = num
    }
    manychat = {"version": "v2","content": {"messages": [],"actions": [],"quick_replies": []}};
    x = 1;
    for (let i = 0; i < Math.floor(num/cardnum); i++)   {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
        x = i;
        for (let j = 0; j < cardnum; j++)   {
            manychat["content"]["messages"][i]["elements"].push({"title": json[title],"subtitle": json[subtitle][(i*cardnum)+j],"image_url": json[image_url],"action_url": "https://manychat.com","buttons": []});
        }
    }
    if (num%cardnum > 0)    {
        manychat["content"]["messages"].push({"type": "cards","elements": [],"image_aspect_ratio": "horizontal"});
        for (let i = x+1; i < x+2; i++){
            for(let j = 0; j < num%cardnum; j++)    {
                manychat["content"]["messages"][i]["elements"].push({"title": json[title],"subtitle": json[subtitle][(i*cardnum)+j],"image_url": json[image_url],"action_url": "https://manychat.com","buttons": []});
            }
        }
    }
    return manychat;
}
