let videoBox = document.getElementById('video-container');
let videoMainBox = document.getElementById('video-wrapper');
let playVideo = document.getElementById('play-video');
let dTab = document.getElementById('details-tab');
let video = document.getElementById('video');
let videoClose = document.getElementById('video-close');
let menuIcon = document.querySelector('.menu i');
let menuOptions = document.getElementById('menuoptions');
let hall = document.getElementById('hall');
let play = document.getElementById('play');
let music = document.getElementById('music');
let bathroom = document.getElementById('bath');
let draw = document.getElementById('draw');


let pano = pannellum.viewer('panorama', {   
   "autoLoad": true,
   "hfov": 120,
   //"hotSpotDebug": true,
    "default": {
        "firstScene": "hall",
        "sceneFadeDuration": 1000,
    },

    "scenes": {
        "hall": {
            "title": "Hall",
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "./images/hall.jpg",
            "hotSpots": [
                {
                    "pitch": -16,
                    "yaw": -65,
                    "type": "scene",
                    "sceneId": "play",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Play Room",
                }
            ]
        },

        "play": {
            "title": "Play Room",
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "./images/play.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 110,
                    "type": "scene",
                    "sceneId": "music",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Music Room"
                },
                {
                    "pitch": -20,
                    "yaw": -153,
                    "type": "scene",
                    "sceneId": "bathroom",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Bathroom"
                }
            ]
        },

        "bathroom":{
            "title": "Bathroom",
            "yaw": 115,
            "type": "equirectangular",
            "panorama": "./images/bathroom.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 110,
                    "type": "scene",
                    "sceneId": "play",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Play Room"
                }
            ]
        },

        "music": {
            "title": "Music Room",
            "pitch": -1,
            "yaw": 115,
            "type": "equirectangular",
            "panorama": "./images/music.jpg",
            "hotSpots": [
                {
                    "pitch": -24,
                    "yaw": -176,
                    "type": "scene",
                    "sceneId": "draw",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Draw Room"
                }
            ]
        },

        "draw": {
            "title": "Draw Room",
            "yaw": 15,
            "type": "equirectangular",
            "panorama": "./images/draw.jpg",
            "hotSpots": [
                {
                    "pitch": -24,
                    "yaw": 87,
                    "type": "scene",
                    "sceneId": "hall",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Hall",
                    "targetYaw": -155,
                    "targetPitch": -5
                }
            ]
        }
    }

    
});

function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight  + 'px';
}


playVideo.addEventListener("click",() => {
    videoMainBox.style.zIndex = "16";
    videoBox.style.width = '100vw';
    videoBox.style.height = '100vh';
    video.play();
    setTimeout(() => {
        videoClose.style.visibility = 'visible';
    },500);
    
})

videoClose.addEventListener("click",() => {
    video.currentTime = 0;
    videoBox.style.width = '0vw';
    videoBox.style.height = '0vh';
    videoClose.style.visibility = 'hidden';
    videoMainBox.style.zIndex = "8";
})


menuIcon.addEventListener("click", () => {
    menuOptions.classList.toggle("togglemenu");
    dTab.classList.toggle("toggletab");
})

play.addEventListener("click",() => {
    pano.loadScene("play",-3,40,120);
})
bathroom.addEventListener("click",() => {
    pano.loadScene("bathroom",-3,-80,120);
})
music.addEventListener("click",() => {
    pano.loadScene("music",-3,-80,120);
})
draw.addEventListener("click",() => {
    pano.loadScene("draw",-3,-20,120);
})
hall.addEventListener("click",() => {
    pano.loadScene("hall",-3,-170,120);
})