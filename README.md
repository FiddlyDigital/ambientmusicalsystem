# Ambient Musical System
A musical system inspired by the works of Philip Glass.

## Description
On each load, a random instrument, musical mode, key and reverb type are chosen.
Notes are then played back at random intervals for an continously evolving ambient experience.

50% of the time it sounds terrible, but the other 50% is pretty poetic.

## Setup and Running

### Install Dependencies
```
npm install --global gulp-cli
npm install
bower install
```

### Run Development Version
```
npm run serve
```

### Run Distribution Version
``` 
npm run build
npm run serve:dist
```

## Notes
### Builds
Builds will output 
* An optimised, minified and obfuscated version of the application.
* A Zip file, containing the above.

### Docs
A comprehensive set of docs can be generate via:
```
npm run docs 
```

### Impulse Responses
* Courtesy of AirWindows - http://www.airwindows.com/airwindows-impulses/
* (Converted from .AIFF to .WAV via http://www.zamzar.com/)

### Samples
The application has the ability to load the audio samples either from a local source or remotely.
In order to help with Disk Space issues, I've copied ALL of the audio samples to my Dropbox Public Folder and set that as the default remote location.

Before checking a local/remote, the application checks to see if it has the file in it's Cache (semi-permanent IndexedDB).
If so it will use the cached version, otherwise it will fetch from the local/remote source.

The sample have been sourced from http://sso.mattiaswestlund.net/download.html
Then you can refer to them locally (put them into ~/src/assests/samples/) or host it yourself on another server.

If you want to use other samples, you'll need to modify the SamplesIndex and specify a differant remote path.