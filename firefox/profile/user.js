// enable user stylesheets
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// change blank page color
user_pref("browser.display.background_color", "#181A1B");
// unmap the backspace key
user_pref("browser.backspace_action", 2);
// hide other bookmarks
user_pref("browser.toolbars.bookmarks.2h2020", false);
// do not save information entered in web page forms and the search bar
user_pref("browser.formfill.enable", false);
// do not guess the prefix or suffix of url
user_pref("browser.fixup.alternate.enabled", false);
// disable inline autocomplete of url.
user_pref("browser.urlbar.autoFill", false);
// force all new windows opened by javaScript into tabs
user_pref("browser.link.open_newwindow.restriction", 0);
// do not close the window when closing last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// prompt for confirmation when attempting to open an excessive number of tabs
user_pref("browser.tabs.maxOpenBeforeWarn", 2);
user_pref("browser.tabs.warnOnOpen", true);
// the zoom level should be applied on the current tab only
user_pref("browser.zoom.siteSpecific", false);
// turn off location aware browsing
user_pref("geo.enabled", false);
// mailto protocol is not handled by an external application
user_pref("network.protocol-handler.external.mailto", false);
// a header stating the request not to be tracked is sent to all websites
user_pref("privacy.donottrackheader.enabled", true);
// enable tracking protection
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.trackingprotection.enabled", true);
// the browsing history is automatically cleared on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.passwords", false);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
// disable automatic restart
user_pref("toolkit.winRegisterApplicationRestart", false);
