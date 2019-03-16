var time;

var audio = new Audio("sound.wav")

var mMin = zeroPadding(30);
var mSec = zeroPadding(00);
var sMin = zeroPadding(10);
var sSec = zeroPadding(00);

var timerset;

window.onload = function() {
    reWrite();
    document.getElementById("mStop").style.display = "none";
    document.getElementById("sStop").style.display = "none";
}

function mPlus() {
    ++mMin;
    reWrite();
}

function mMinus() {
    --mMin;
    reWrite();
}

function sPlus() {
    ++sMin;
    reWrite();
}

function sMinus() {
    --sMin;
    reWrite();
}


function cntMStart() {
    timerset = 0;
    cntStart();
}

function cntSStart() {
    timerset = 1;
    cntStart();
}

function cntStart() {
    if (timerset == 0) {
        document.getElementById("mStart").style.display = "none";
        document.getElementById("mStop").style.display = "inline";
        document.getElementById("sStart").disabled = "disabled"
    }
    else {
        document.getElementById("sStart").style.display = "none";
        document.getElementById("sStop").style.display = "inline";
        document.getElementById("mStart").disabled = "disabled"
    }
    document.getElementById("mPlus").disabled = "disabled";
    document.getElementById("mMinus").disabled = "disabled";
    document.getElementById("sPlus").disabled = "disabled";
    document.getElementById("sMinus").disabled = "disabled";
    time = setInterval("countDown()", 1000);
}

function cntStop() {
    reSet();
}

function countDown() {
    if (timerset == 0) {
        mMin = parseInt(mMin);
        mSec = parseInt(mSec);

        tmWrite(mMin*60+mSec-1);
    }
    else {
        sMin = parseInt(sMin);
        sSec = parseInt(sSec);

        tmWrite(sMin*60+sSec-1);
    }
}

function tmWrite(int) {
    int = parseInt(int);
    if (int <= 0) {
        reSet();
        audio.play();
        alert("時間っぽい");
        // ボイス
    }
    else {
        if (timerset == 0) {
            mMin = Math.floor(int/60);
            mSec = int % 60;
        }
        else {
            sMin = Math.floor(int/60);
            sSec = int % 60;
        }
        
        reWrite();
    }
}

function reSet() {
    clearInterval(time);
    document.getElementById("mStop").style.display = "none";
    document.getElementById("sStop").style.display = "none";
    document.getElementById("mStart").style.display = "inline";
    document.getElementById("sStart").style.display = "inline";
    document.getElementById("mStart").disabled = ""
    document.getElementById("sStart").disabled = ""
    document.getElementById("mPlus").disabled = "";
    document.getElementById("mMinus").disabled = "";
    document.getElementById("sPlus").disabled = "";
    document.getElementById("sMinus").disabled = "";
    mMin = 30;
    mSec = 00;
    sMin = 10;
    sSec = 00;
    reWrite();
    
}

function zeroPadding(num) {
    if (num <= 0) {
        num = 0;
    }
    return ('0' + num).slice(-2);
}

function reWrite(){
    mMin = zeroPadding(mMin);
    mSec = zeroPadding(mSec);
    sMin = zeroPadding(sMin);
    sSec = zeroPadding(sSec);
    document.getElementById("mTimer").textContent = mMin + ":" + mSec;
    document.getElementById("sTimer").textContent = sMin + ":" + sSec;
}