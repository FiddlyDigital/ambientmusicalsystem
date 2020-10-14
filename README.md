# Ambient Musical System
A musical system inspired by the works of Philip Glass.

## Description
On each load, a random instrument, musical mode, key and reverb type are chosen.
Notes are then played back at random intervals for an continously evolving ambient experience.

*BE CAREFUL WITH VOLUME LEVELS AS THEY CAN VARY WILDLY, OR EMIT HIGH-PITCHED SHRIEKS.*

*This is a characteristic of the randomisation process.*

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
Before checking a local/remote source, the application checks to see if the file is in it's Cache (semi-permanent IndexedDB).
If so it will use the cached version, otherwise it will fetch from the local/remote source.

The sample have been sourced from http://sso.mattiaswestlund.net/download.html

If you want to use other samples, you'll need to modify the SamplesIndex, following the same pattern
