cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ms-adal.utility",
      "file": "plugins/cordova-plugin-ms-adal/www/utility.js",
      "pluginId": "cordova-plugin-ms-adal",
      "runs": true
    },
    {
      "id": "cordova-plugin-ms-adal.AuthenticationContext",
      "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationContext.js",
      "pluginId": "cordova-plugin-ms-adal",
      "clobbers": [
        "Microsoft.ADAL.AuthenticationContext"
      ]
    },
    {
      "id": "cordova-plugin-ms-adal.CordovaBridge",
      "file": "plugins/cordova-plugin-ms-adal/www/CordovaBridge.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.AuthenticationResult",
      "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationResult.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.TokenCache",
      "file": "plugins/cordova-plugin-ms-adal/www/TokenCache.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.TokenCacheItem",
      "file": "plugins/cordova-plugin-ms-adal/www/TokenCacheItem.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.UserInfo",
      "file": "plugins/cordova-plugin-ms-adal/www/UserInfo.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.LogItem",
      "file": "plugins/cordova-plugin-ms-adal/www/LogItem.js",
      "pluginId": "cordova-plugin-ms-adal"
    },
    {
      "id": "cordova-plugin-ms-adal.AuthenticationSettings",
      "file": "plugins/cordova-plugin-ms-adal/www/AuthenticationSettings.js",
      "pluginId": "cordova-plugin-ms-adal",
      "clobbers": [
        "Microsoft.ADAL.AuthenticationSettings"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-ms-adal": "0.10.1"
  };
});