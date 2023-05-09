const hn = document.querySelector(".txtbox");
const cue = document.querySelectorAll(".tarea")



function add(){
    if (hn.value == "" || cue[0].value == "" || cue[1].VALUE == "" || cue[2].value == "" || cue[3].value == ""){
        alert("Fill out all the data");
    }
    else{
    const lc = document.createElement("div");
    lc.className = "list";
    const hnc = document.createElement("div");
    const cuecont = document.createElement("div");

    hnc.className = "hnc";
    cuecont.className = "cont"
    const gh = document.createTextNode(hn.value);
    gh.className = "gh";
    hnc.appendChild(gh);

    const cb = document.createElement("div");
    const crb = document.createElement("div");
    const rb = document.createElement("div");
    const reb = document.createElement("div");



    cb.className = "cb";
    crb.className = "crb";
    rb.className = "rb";
    reb.className = "reb";

    const cbt = document.createTextNode(cue[0].value);
    const crbt = document.createTextNode(cue[1].value);
    const rbt = document.createTextNode(cue[2].value);
    const rebt = document.createTextNode(cue[3].value);

    cb.innerHTML = "<h3>CUE</h3><br><br><br>";
    crb.innerHTML = "<h3>CRAVING</h3><br><br><br>";
    rb.innerHTML = "<h3>RESPONSE</h3><br><br><br>";
    reb.innerHTML = "<h3>REWARD</h3><br><br><br>";



    cb.appendChild(cbt);
    crb.appendChild(crbt);
    rb.appendChild(rbt);
    reb.appendChild(rebt);

    cuecont.appendChild(cb);
    cuecont.appendChild(crb);
    cuecont.appendChild(rb);
    cuecont.appendChild(reb);


    

    lc.appendChild(hnc);
    lc.appendChild(cuecont);

    const mc = document.querySelector(".container");
    mc.appendChild(lc);
    
    hn.value = '';
    cue[0].value = "";
    cue[1].value = "";
    cue[2].value = "";
    cue[3].value = "";



    }
    
}
