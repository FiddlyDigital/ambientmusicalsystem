# Ambient Musical System
A musical system inspired by the works of Philip Glass.

## Description
On each load, a random instrument, musical mode, key and reverb type are chosen.
Notes are then played back at random intervals for an continously evolving ambient experience.

50% of the time it sounds terrible, but the other 50% is pretty poetic.

## Setup and Running

### Install Dependencies
* npm install
* bower install

### Run Development Version
* npm run serve

### Run Distribution Version
* npm run build
* npm run serve:dist

## Notes
### Impulse Responses
* See ~/src/assets/impulse_responses
* Courtesy of AirWindows - http://www.airwindows.com/airwindows-impulses/
* (Converted from .AIFF to .WAV via http://www.zamzar.com/)

### Samples
In order to help with Disk Space issues, I've copied ALL of the audio samples to my Dropbox Public Folder.
If you run the application as-is, it will retrive them there.

If you'd prefer, you can download them from http://sso.mattiaswestlund.net/download.html
Then you can refer to them locally (put them into ~/src/assests/samples/) or host it yourself on another server.

You can then modify ~/src/app/app.component.js - I've samples of how to refer locally and to another server there.