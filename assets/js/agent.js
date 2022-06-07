const submit = document.querySelector("#submit");
const load = document.querySelector("#load");
const url = document.querySelector("#img_url");
const address_patient = document.querySelector("#address");
const status_div = document.querySelector("#status");
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
background-position: center;`

const download_url = ()=>{
    let str = url.value;
    console.log(url.value);
    let res = str.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=view&id=");
    res = res.replace("/view?usp=sharing", "");
    console.log(res)
    contract.methods.verify(address_patient.value, res).send({from: account }, function (err, res1) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        // console.log("verifying");
        // console.log(res1);
    });
}

const load_res = ()=>{
    contract.methods.verified_return().call({from: account }, function (err, result) {
        if(result == "true"){
            status_style = status_style.replace("url()",`url(https://www.pngmart.com/files/16/Tick-Green-Check-Mark-Transparent-PNG.png)`)
            status_style = status_style.replace("url(https://www.kindpng.com/picc/m/413-4131735_transparent-tick-mark-png-transparent-background-transparent-background.png)",`url(https://www.pngmart.com/files/16/Tick-Green-Check-Mark-Transparent-PNG.png)`)
            status_div.style = status_style;
            status_div.querySelector("h1").innerHTML = "Verified!!";
        }
        else{
            status_style = status_style.replace("url()",`url(https://www.kindpng.com/picc/m/413-4131735_transparent-tick-mark-png-transparent-background-transparent-background.png)`)
            status_style = status_style.replace("url(https://www.pngmart.com/files/16/Tick-Green-Check-Mark-Transparent-PNG.png)",`url(https://www.kindpng.com/picc/m/413-4131735_transparent-tick-mark-png-transparent-background-transparent-background.png)`)
            status_div.style = status_style;
            status_div.querySelector("h1").innerHTML = "!!Fake!!";
        }
        // console.log(result,err);
        // console.log("result");
    });
}

submit.addEventListener("click",download_url);
load.addEventListener("click",load_res);