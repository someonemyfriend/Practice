// function manipulator(arr) {
//     let theSentense = arr[0];
//     for(let i = 1; i < arr.length; i++) {
        
//         let splitWorlds = arr[i].split(' ');
//        // console.log(splitWorlds);
        
//         if('Translate' == splitWorlds[0]){
//            // console.log('vqrno e');
//             theSentense = theSentense.replaceAll(splitWorlds[1], splitWorlds[2]);;
//             console.log(theSentense);
//         }
//         if('Includes' == splitWorlds[0]){
//             if(theSentense.includes('string')){
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }
//         }
//         if('Start' == splitWorlds[0]){
//             if(theSentense.startsWith(splitWorlds[1])){
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }
//         }
//         if('Lowercase' == splitWorlds[0]){
//             theSentense = theSentense.toLowerCase();
//             console.log(theSentense);
//         }
//         if('FindIndex' == splitWorlds[0]){
//             let seeIndex = theSentense.lastIndexOf(splitWorlds[1]);
//             console.log(seeIndex);
//         }
//         if('Remove' == splitWorlds[0]){
//             let secondIndex = Number(splitWorlds[1]) + Number(splitWorlds[2]);
//             let slice = theSentense.slice(splitWorlds[1], secondIndex);
//             //console.log(splitWorlds[1]);
//             theSentense = theSentense.replace(slice, '')
            
//             console.log(theSentense);
               
//         }

//     }
    
// }

function manipulator(arr) {
    let theSentence = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let splitWords = arr[i].split(' ');
        let command = splitWords[0];

        switch (command) {
            case 'Translate':
                theSentence = theSentence.split(splitWords[1]).join(splitWords[2]);
                console.log(theSentence);
                break;

            case 'Includes':
                console.log(theSentence.includes(splitWords[1]) ? 'True' : 'False');
                break;

            case 'Start':
                console.log(theSentence.startsWith(splitWords[1]) ? 'True' : 'False');
                break;

            case 'Lowercase':
                theSentence = theSentence.toLowerCase();
                console.log(theSentence);
                break;

            case 'FindIndex':
                console.log(theSentence.lastIndexOf(splitWords[1]));
                break;

            case 'Remove':
                let startIndex = Number(splitWords[1]);
                let count = Number(splitWords[2]);
                theSentence = theSentence.slice(0, startIndex) + theSentence.slice(startIndex + count);
                console.log(theSentence);
                break;
        }
    }
}

// manipulator(["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"]);

manipulator   (["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"]);





 


