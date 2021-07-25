# WhatsApp Web on Linux installation guide

## Creating a Chrome app

Chrome apps will allow us to create a windowed websites what will be perfect for this case.

To start, we need to access to the https://web.whatsapp.com/ site.

Then, click the chrome settings button (`...`) -> `More tools` -> `Create shortcut...` 

<img src="https://i.imgur.com/kd3OpL6.png" alt="" width="100%">

That will prompt the following modal, mark the `Open as windows` checkbox.
<img src="https://i.imgur.com/318iP6T.png" alt="" width="100%">

## Adding the new app to your desktop and application menu

Fist, go to the `chrome://apps` site, and you wil find the app you just created:
<img src="https://i.imgur.com/OlHqvI8.png" alt="" width="100%">

Right click the app and select `Create shortcuts...`
<img src="https://i.imgur.com/J1r1wj3.png" alt="" width="100%">
<img src="https://i.imgur.com/JOSz8q4.png" alt="" width="100%">

## Removing the web version borders

### Install a custom javascript extension

You can choose the extension you like, I suggest you the [Custom JavaScript for Websites 2
](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk)

### Configure the script to run on the whatsapp web site

Click the `Extensions` icon from the application bar and start the [Custom JavaScript for Websites 2
](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) extension.

Copy & paste the contents of the [`script.js`](https://github.com/xXNurioXx/whatsapp-web-linux/blob/main/script.js) file of this repository.

<img src="https://i.imgur.com/BcDYYb8.png" alt="" width="100%">

Click the `Save` button and now you have the whatsapp web app on linux. (more or less...)
