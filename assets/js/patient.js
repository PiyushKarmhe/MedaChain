const submit = document.querySelector("#submit");
const load = document.querySelector("#load");
const innerCrousal = document.querySelector(".carousel-inner");


const add = (list)=>{
    for(let i=0; i<list.length; i++){
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        div.classList.add("active");
        const img  = document.createElement("img");
        img.src=list[i];
        img.classList.add("d-block");
        img.classList.add("w-100");
        div.appendChild(img);
        innerCrousal.appendChild(div);
    }
}

const download_url = ()=>{
    contract.methods.download_prep(account).send({from: account }, function (err, result) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        console.log("Checking");
    });
}

const load_img = ()=>{
    contract.methods.urls_return().call({from: account }, function (err, result) {
        if (err) {
            console.log("An error occured", err);
            return;
        }
        console.log("loading");
        console.log(result[0]);
        add(result);
    });
}
submit.addEventListener("click",download_url);
load.addEventListener("click",load_img);