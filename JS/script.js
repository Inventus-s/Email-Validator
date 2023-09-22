console.log("Script is Working");
let resultContainer = document.getElementById("resultContainer");

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Working");
  resultContainer.innerHTML = `<img src="/img/loader.svg" alt="loader">`;
  let key = "ema_live_kmM72FH1pDG7EAPTPzCRA7Ix2XtLIbkw4m2DpCQl";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``
  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key]!== " "){ 
        str = str + `<div>${key} : ${result[key]}</div>`
    }
  }

  console.log(str);

  resultContainer.innerHTML = str;
});

// let result = {
//   tag: "",
//   free: true,
//   role: false,
//   user: "handle.extras",
//   email: "handle.extras@gmail.com",
//   score: 0.64,
//   state: "deliverable",
//   domain: "gmail.com",
//   reason: "valid_mailbox",
//   mx_found: true,
//   catch_all: null,
//   disposable: false,
//   smtp_check: true,
//   did_you_mean: "",
//   format_valid: true,
// };
