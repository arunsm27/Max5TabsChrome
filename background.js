const MAX_TABS = 5;

// Listen for tab creation event
chrome.tabs.onCreated.addListener(async () => {
  const tabs = await chrome.tabs.query({});
  if (tabs.length > MAX_TABS) {
    const tabToRemove = tabs[tabs.length - 1];
    await chrome.tabs.remove(tabToRemove.id);
  }
});


chrome.tabs.onRemoved.addListener(async () => {
    const tabs = await chrome.tabs.query({});
    if (tabs.length > MAX_TABS) {
      const tabToRemove = tabs[0];
      await chrome.tabs.remove(tabToRemove.id);
    }
  });
  
  // Function to count the number of open tabs
//function countTabsAndClose() {
//    chrome.tabs.query({}, function(tabs) {
//        if (tabs.length > 5) {
//            // Close the new tab if there are more than 5 tabs
//            chrome.tabs.remove(tabs[tabs.length - 1].id);
//        }
//    });
//}

// Listen for tab creation event
//chrome.tabs.onCreated.addListener(function(tab) {
//    countTabsAndClose();
//});

// Initial check when the extension is loaded
//countTabsAndClose();
