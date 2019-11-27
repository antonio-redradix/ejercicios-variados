// You must create a server (lite-server for example)
// The script should return the first five persons, but sometimes I get only 2, 3 or 4

function getFirstFive(){
    let persons = []
    let pHeight = [];
    let promise = new Promise((resolve, reject) => {
        for (let i = 1;i<6;i++){
            fetch("https://swapi.co/api/people/"+i+"/")
                .then(response => {
                    if (response.status == 200){
                        response.json()
                            .then(data => {
                                pHeight.push(parseInt(data.height));
                                persons.push(data.name);
                                if (i===5){
                                    resolve()
                                }
                            });
                };
            });
        };
    }).then((result) => {
        console.log(persons);
        console.log(pHeight);
        console.log(pHeight.reduce((acc,x) => acc+x,0)/5);
    });
};

getFirstFive();