
# react-native-progress-hud

## Getting started

`$ npm install react-native-progress-hud --save`

### Mostly automatic installation

`$ react-native link react-native-progress-hud`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-progress-hud` and add `RNProgressHud.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNProgressHud.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.qudian.ProgressHUD.RNProgressHudPackage;` to the imports at the top of the file
  - Add `new RNProgressHudPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-progress-hud'
  	project(':react-native-progress-hud').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-progress-hud/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-progress-hud')
  	```


## Usage
```javascript
import RNProgressHud from 'react-native-progress-hud';

// TODO: What to do with the module?
RNProgressHud;
```
  