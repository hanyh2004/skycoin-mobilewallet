# Skycoin Mobile Wallet

## IMPORTANT: This is a work-in-progress

To-do:
* Check balance for wallet
* Generate wallet from seed
* Add nickname to wallet
* Add design
* Add support for iOS
* Add encryption

## Installation

To create Ionic projects, you'll need to install the latest version of the CLI and Cordova. Before you do that, you'll need a recent version of Node.js. [Download the installer](https://nodejs.org/) for Node.js 6 or greater and then proceed to install the Ionic CLI and Cordova for native app development:

```bash
$ npm install -g ionic cordova
```

> You may need to add "sudo" in front of these commands to install the utilities globally.

Next you will need to install all libraries specific for the application:

```bash
$ npm install
```

To actually run/build the Android version of the mobile app, please refer to the [Cordova Android Platform guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/).

## Usage

Start the app on your Android device by running:

  ionic cordova run android
  
Compile a new build by running:

  ionic cordova build android

## Cordova plugin

If you update the Cordova plugin, you can persist these changes to the plugin directory by removing & adding the plugin:

  cordova plugin rm skycoin
  cordova plugin add src/cordova --nofetch
