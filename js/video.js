var video;

/* Load */
window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log('Starting');
	console.log(video.volume);
});

/* Play */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector('#volume').innerHTML = video.volume + '00%'
});

/* Pause */
document.querySelector("#pause").addEventListener("click", function() {
	console.log('Pause Video');
	video.pause();
});

/* Mute & Unmute */
var mutebutton = document.getElementById('mute');
	mutebutton.onclick = function() {
		if(video.muted === false){
			console.log('Mute Video');
			video.muted = true;
			let mutetext = document.querySelector('#mute').innerHTML = 'Unmute';
		}
		else {
			console.log('Unmute Video');
			video.muted = false;
			let mutetext = document.querySelector('#mute').innerHTML = 'Mute';
		}
	}

/* Slow down & Speed up */
var slowerbutton = document.getElementById('slower');
	slowerbutton.onclick = function() {
		video.playbackRate -= video.playbackRate * 0.1;
		console.log(video.playbackRate*100 + '%');
	}
var speedupbutton = document.getElementById('faster');
	speedupbutton.onclick = function() {
		video.playbackRate += video.playbackRate * 0.1;
		console.log(video.playbackRate*100+ '%')
	}

/* Skip Ahead */
var skipbutton = document.getElementById('skip');
	skipbutton.onclick = function() {
		if (video.duration - video.currentTime >= 5){
		video.currentTime += 5;
		}
		else{
		video.currentTime = 0;
		}
	console.log(video.currentTime);
	video.play()
	}

/* Old School & Original */
var oldschoolbutton = document.getElementById('old');
	oldschoolbutton.onclick = function() {
		video.classList.add('oldTime');
		/*video.className = 'oldTime';*/

	}
var originalbutton = document.getElementById('original');
	originalbutton.onclick = function() {
		if (video.className === 'oldTime'){
			video.classList.remove('oldTime');
			/*video.className -= 'oldTime';*/
		}
	}

/* VolumeSlider */
document.querySelector('#volumeSlider').addEventListener('change', function(e) {
	console.log(this);
	console.log(this.value + '%');
	video.volume = e.currentTarget.value / 100
	let vol = document.querySelector('#volume').innerHTML = e.currentTarget.value + '%'
})
