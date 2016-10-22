# Ambient Musical System
A musical system inspired by the works of Philip Glass.

## Description
On each load, a random instrument, musical mode, key and reverb type are chosen.
Notes are then played back at random intervals for an continously evolving ambient experience.

50% of the time it sounds terrible, but the other 50% is pretty poetic.

## Setup and Running

### Prerequisites
You need to download the required music sample files from http://sso.mattiaswestlund.net/download.html and extract the contents of the Samples folder in the zip to ~/src/assets/samples.

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

### Disk Space
The Samples take up 500mb+ when unzipped.
When you do a build, these files will end up being copied into the dist too.
If you're developing on Cloud9 IDE or hosting on a small server, you may run into problems with Disk space.

I'm working on cutting down the amount of samples needed. 
If you're stuck you can delete some instrument listings from ~/src/app/MusicSystemSamples.js and then delete the corresponding Sample files from ~src/assets/samples.
