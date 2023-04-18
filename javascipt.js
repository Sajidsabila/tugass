// view nama user

var name  = prompt("Masukkan Nama Kamu");
document.getElementById("nama").innerText = name;

// slide image //
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("imgslide");
    if (n > imglist.length) slideIndex = 1;
    else if(n  < 1)  slideIndex = imglist.length;
    for (i = 0; i < imglist.length; i++){
        imglist[i].style.display = "none";
    }

    imglist[slideIndex -1 ].style.display = 'block';
}

// validation form

function validateForm() {
    // Mengirim data
    var name = document.forms["message-form"]["full-name"].value;
    var tanggal = document.forms["message-form"]["birth-date"].value;
    var jk = document.forms["message-form"]["gender"].value;
    var pesan = document.forms["message-form"]["messages"].value;
    
    // mengecek apakah form kosong atau tidak
    if(name == ""   || tanggal =="" || jk =="" || pesan ==""){
        alert("form nama tidak boleh kosong");
        return false;
    }

    // Mengambil data
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = tanggal;
    document.getElementById("sender-gender").innerText = jk;
    document.getElementById("sender-messages").innerText = pesan;
    return false;
}


// mengambil tanggl hari ini


const date = new Date();
document.getElementById("current-time").innerHTML = date;


