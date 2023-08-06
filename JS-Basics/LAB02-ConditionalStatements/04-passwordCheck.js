function passwordCheck(input) {
    let correctText =  "s3cr3t!P@ssw0rd";
  
    if (input[0] === correctText) {
      console.log("Welcome");
    } else {
      console.log("Wrong password!");
    }
  
}

passwordCheck(["s3cr3t!P@ssw0rd"]);
  