function phoneShop(arr) {
    let phones = arr.shift().split(", ");
    
    for (let command of arr) {
        if (command.startsWith("Add -")) {
            let phone = command.split(" - ") [1];
            if (!phones.includes(phone)) {
                phones.push(phone);
            }
        } else if (command.startsWith("Remove -")) {
            let phone = command.split(" - ") [1];
            let index = phones.indexOf(phone);
            if (index !== -1) {
                phones.splice(index, 1);
            }
        } else if (command.startsWith("Bonus phone -")) {
            let [oldPhone, newPhone] = command.split(" - ")[1].split(":");
            let index = phones.indexOf(oldPhone);
            if (index !== -1) {
                phones.splice(index + 1, 0, newPhone);
            }
        } else if (command.startsWith("Last -")) {
            let phone = command.split(" - ") [1];
            let index = phones.indexOf(phone);
            if (index !== -1) {
                phones.splice(index, 1);
                phones.push(phone);
            }
        } else if (command === "End") {
            break;
        }
    }
    console.log(phones.join(", "));
}
phoneShop(["HuaweiP20, XiaomiNote",

"Remove - Samsung",

"Bonus phone - XiaomiNote:Iphone5",

"End"]);