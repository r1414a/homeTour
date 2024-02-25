let pano = pannellum.viewer('panorama', {   
    "autoLoad": true,
   "hfov": 120,
    "default": {
        "firstScene": "hall",
        "author": "Rupesh Chincholkar",
        "sceneFadeDuration": 1000,
    },

    "scenes": {
        "hall": {
            "title": "Hall",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "./images/hall.jpg",
            "hotSpots": [
                {
                    "pitch": -16,
                    "yaw": 115,
                    "type": "scene",
                    "text": "Play Room",
                    "sceneId": "play",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Play Room"
                }
            ]
        },

        "play": {
            "title": "Play Room",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "./images/play.jpg",
            "hotSpots": [
                {
                    "pitch": -25,
                    "yaw": 110,
                    "type": "scene",
                    "text": "Music Room",
                    "sceneId": "music",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Music Room"
                }
            ]
        },
        "music": {
            "title": "Music Room",
            "hfov": 120,
            "pitch": -1,
            "yaw": 115,
            "type": "equirectangular",
            "panorama": "./images/music.jpg",
            "hotSpots": [
                {
                    "pitch": -24,
                    "yaw": -176,
                    "type": "scene",
                    "text": "Draw Room",
                    "sceneId": "draw",
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": "Draw Room"
                }
            ]
        },

        "draw": {
            "title": "Draw Room",
            "hfov": 100,
            "yaw": 15,
            "type": "equirectangular",
            "panorama": "./images/draw.jpg",
            "hotSpots": [
                {
                    "pitch": -24,
                    "yaw": 87,
                    "type": "scene",
                    "text": "Hall",
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
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}