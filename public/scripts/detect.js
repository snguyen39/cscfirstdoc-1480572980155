var isMobile = {
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    any: function() {
        if(isMobile.Android()){
            return "Android";
        }
        else if(isMobile.iOS()){
            return "iOS";
        }
        else if(isMobile.BlackBerry()){
            return "BlackBerry";
        }
        else 
            return "Windows";
    }
};

var solutionGalleryDownload = document.getElementById("solutionGalleryDownload");

if(isMobile.any() == "iOS"){
    solutionGalleryDownload.href = "itms-services://?action=download-manifest&url=https://cscfirstdoc.mybluemix.net/build/FirstDocSolution.plist";
}
else if(isMobile.any() == "Android") {
    solutionGalleryDownload.href = "https://cscfirstdoc.mybluemix.net/build/FirstDocSolution.apk";
}
else{
    solutionGalleryDownload.href = "";
}


