const submit = document.querySelector("#submit");
const url = document.querySelector("#img_url");
const address_patient = document.querySelector("#address");
const status_div = document.querySelector("#status");

const upload_url = ()=>{

    var status_style = 
    `background-color: white;
    width: 40%;
    border-top: 2px solid #5ea4f3;
    padding: 20px;
    font: optional;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 8%);
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    background: url();
    background-size: cover;
    background-position: center;`;

    let str = url.value;
    console.log(url.value);
    let res = str.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=");
    res = res.replace("/view?usp=sharing", "");

    contract.methods.upload_prep(account, address_patient.value, res).send({from: account }, function (err, res) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        console.log("Uploaded");
    });
    
    status_style = status_style.replace("url()",`url(${res})`)
    status_div.style = status_style;
    console.log(status_style);
}

submit.addEventListener("click",upload_url);