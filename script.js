let input = prompt("What would you like to do?");
let list = [];
let i = 0;
while (input !== "quit"){
    if (input === "new"){
        let task = prompt("Enter the task you want to add: ");
        list.push(task)
    } else if (input === "list"){
        for (let task of list){
            console.log(`${i} : ${task}`);
        }
    } else if (input === "delete"){
        let task = prompt("Enter the index of the task you want to delete: ");

    }

    input = prompt("What would you like to do?");

}