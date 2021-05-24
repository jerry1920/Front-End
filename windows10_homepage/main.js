// Time And Date
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
    if(hours == 0){
        hours = 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    time.textContent = hours + ":" + minutes + " " + period; 
});

// Start Drawer or system drawer tray hide and show
function start_drawer(){
    var show = document.getElementById("drawer-tray");
    if(show.style.display !== "block"){
        show.style.display = "block";
    } else{
        show.style.display = "none";
    }
}

// left-system-menu hover show 
function show_sidebar(){
    document.getElementById('windows-start-hover-menu').style.display = "block"; 
    document.getElementById('windows-start-hover-menu').style["boxShadow"] = "5px 0 5px -4px rgba(0,0,0,0.7)"; 
}

// left-system-menu hover hide 
function hide_sidebar(){
    document.getElementById('windows-start-hover-menu').style.display = "none"; 
}

// Bing Wallpaper Folder Show Hide
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

// Chrome Apps Folder Show Hide
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

// Conexant Folder Show Hide
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

// Dolby Folder Show Hide
function subCate_Dolby_folder(){
    var folderShow = document.getElementById('dolby_sub_folder_show');
    var arrow = document.getElementById('down-arrow-dolby');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "flex";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}

// Git Folder Show Hide
function subCate_git_folder(){
    var folderShow = document.getElementById('git_sub_folder_show');
    var arrow = document.getElementById('down-arrow-git');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}

// Github Folder Show Hide
function subCate_github_folder(){
    var folderShow = document.getElementById('github_sub_folder_show');
    var arrow = document.getElementById('down-arrow-github');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "flex";
        arrow.style.transform =  'rotate(180deg)';
    } else{
        folderShow.style.display = "none";
        arrow.style.transform =  'rotate(0deg)';
    }
}

// Add an active class in right-search-bar-header of Search bar-header Windows Pannel Left-Side

var items = document.getElementsByClassName("item");
for (var i=0; i< items.length; i++){
    items[i].addEventListener("click", function(){
        var currentLocation =document.getElementsByClassName("active");
        currentLocation[0].className = currentLocation[0].className.replace(" active", "");
        this.className += " active";
    });
}


// More Option Show and Hide classes

function subCate_more_options(){
    var folderShow = document.getElementById('more-sub-option');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
    } else{
        folderShow.style.display = "none";
    }
}

// Feedback form open close
function feedback_form_open(){
    document.getElementById('form-feedback-problem').style.display = "block";
    
}

function feedback_form_Close(){
    document.getElementById('form-feedback-problem').style.display = "none";
}

// search-bar-windows-pannel-left-side
function searchbar_windows_panels(){
    var subCate_searchbar = document.getElementById('search-bar-windows-pannel-left-side');
    if(subCate_searchbar.style.display == "none"){
        subCate_searchbar.style.display = "block";
    } else{
        subCate_searchbar.style.display = "none";
    }
}

// option-3dot option show hide
function option_show_hide(){
    var optionShow= document.getElementById('option-3dot');
    if(optionShow.style.display == "none"){
        optionShow.style.display = "block";
    } else{
        optionShow.style.display = "none";
    }
}

// user-profile-account-details hide and show
function subCate_userProfile(){
    var folderShow = document.getElementById('user-profile-account-details');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
    } else{
        folderShow.style.display = "none";
    }
}

// System-Power-Icon-sub-categories hide show
function subCate_Power_Option(){
    var folderShow = document.getElementById('System-Power-Icon-sub-categories');
    if(folderShow.style.display == "none"){
        folderShow.style.display = "block";
    } else{
        folderShow.style.display = "none";
    }
}