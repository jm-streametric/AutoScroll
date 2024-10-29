"use strict";

const LS = chrome.storage.local;



async function removeOptions() {

  if ("Options.config.user" in await LS.get()) {
  
    var o = JSON.parse(LS.get("Options.config.user")["Options.config.user"])
    LS.set(o, function () {
      LS.remove(["Options.config.user"])
    })
  }
  
  if ("Options.config.base" in await LS.get()) {
    LS.remove(["Options.config.base"])
  }

}

removeOptions()