function getSelectedText(theMessageEvent) {
    if (theMessageEvent.name === "getSelectedText") {
        var sel = '';
        sel = window.getSelection() + ''; // to string
        safari.self.tab.dispatchMessage("openIMDB",sel);
    }
}
    

if (window.top === window) {  // is not on a iframe?	
    safari.self.addEventListener("message", getSelectedText, false);
}



