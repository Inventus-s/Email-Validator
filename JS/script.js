console.log("Script is Working");
let resultContainer = document.getElementById("255");
// resultContainer.innerHTML = `<div>hello</div>`;

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Working");
  let email = document.getElementById("email").value;
  resultContainer.innerHTML = `<img src="/img/loader.svg" alt="loader">`;
  console.log("Working");
  let key = "ema_live_kmM72FH1pDG7EAPTPzCRA7Ix2XtLIbkw4m2DpCQl";
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  console.log("Working");
  let result = await res.json();
  let str = ``
  let header = document.getElementById('header')
  header.innerText = `Email Validation Information: ${result["email"]}`
  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key]!== " "){ 
        str = str + `<div class="box"><dd class="data">${key}</dd><dt class="data">${result[key]}</dt></div>`
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
