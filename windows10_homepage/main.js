setInterval(() =>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = "AM";
    if(hours > 12){
        period = "PM";
        hours = hours - 12;
    }
    if(hours < 10){
       hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    time.textContent = hours + ":" + minutes + " " + period; 
});


function start_drawer(){
    var show = document.getElementById("drawer-tray");
    if(show.style.display !== "block"){
        show.style.display = "block";
    } else{
        show.style.display = "none";
    }
}

function show_sidebar(){
    document.getElementById('windows-start-hover-menu').style.display = "block"; 
}

function hide_sidebar(){
    document.getElementById('windows-start-hover-menu').style.display = "none"; 
}


function subCate_folder(){
    var folderShow = document.getElementById('folder_show');
    var arrow = document.getElementById('down-arrow');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "flex";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}

function subCate_chrome_folder(){
    var folderShow = document.getElementById('chrome_sub_folder_show');
    var arrow = document.getElementById('down-arrow-chrome');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}

function subCate_Conexant_folder(){
    var folderShow = document.getElementById('conexant_sub_folder_show');
    var arrow = document.getElementById('down-arrow-conexant');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}