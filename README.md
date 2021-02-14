# Android web installer

This is an easy-to-use web installer for Android-based operating systems that runs entirely in the browser. It uses WebUSB, which is supported by Chromium and its derivatives, and [fastboot.js](https://github.com/kdrag0n/fastboot.js) library for flashing. This allows it to work on computers and Android devices software with no additional software or command-line tools.

![Screenshot of an install in progress on a desktop computer](https://i.ibb.co/khjYhRn/Screen-Shot-2021-02-14-at-3-28-29-PM.png)

## Install process



## Adapting for other ROMs

By default, this installer is configured for the ProtonAOSP production environment, but it was built with reusability in mind. It can be adapted to other ROM projects with only configuration changes.

You can start with the following Yarn commands:

- `yarn install`
- `yarn serve`
- `yarn build`
- `yarn lint`

All configuration is in `src/config.js` and `.env`, and the release index at `public/releases/index.json` is fetched from the root of the domain hosting the installer. You may also want to change the favicon at `public/favicon.png`.

## Contributing

Contributions are welcome! If you adapt this installer or make other improvements to it, please contribute the improvements back to the official repository instead of forking it and keeping the changes to yourself. There are many rough edges that need to be improved upon.
