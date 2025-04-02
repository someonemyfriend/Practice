function followers(arr){

    let theFollowers = [];
    for(let i = 0; i < arr.length - 1; i++){
        //console.log(arr[i]);
        let split = arr[i].split(': ');
        //console.log(split);
        if('Blocked' == split[0]){
            if(theFollowers[split[1]] !== undefined){
                delete theFollowers[split[1]];
               // console.log('followers -> ' + theFollowers);
            } else {
                console.log(`${split[1]} doesn't exist.`);

            }
        }
        if('Comment' == split[0]){
            if(theFollowers[split[1]] == undefined){
                theFollowers[split[1]] = 1;
            } else {
                theFollowers[split[1]] += 1;
            }
        }
        if('New follower' == split[0]){
            if(theFollowers[split[1]] == undefined){
                theFollowers[split[1]] = 0;
                //console.log(theFollowers);
            }
        }
        if('Like' == split[0]){
            if(theFollowers[split[1]] == undefined){
                theFollowers[split[1]] = Number(split[2]);
            } else {
                theFollowers[split[1]] += Number(split[2]);
            }
        }
        
    }

    console.log((Object.keys(theFollowers).length) + ' followers');
    
    Object.keys(theFollowers).forEach(function (key) {
        console.log(key + ': ' + theFollowers[key]);
      });
}



// followers((["Blocked: Amy",
//     "Comment: Amy",
//     "New follower: Amy",
//     "Like: Tom: 5",
//     "Like: Ellie: 5",
//     "Like: Tom: 5",
//     "Log out"]));

    followers(["Blocked: Iva",
        "New follower: George",
        "Blocked: George",
        "Like: Tom: 5",
        "New follower: Vasi",
        "Log out"]);

    

