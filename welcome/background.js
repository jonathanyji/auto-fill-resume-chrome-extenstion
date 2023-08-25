// Run hello.html file
// and put it up on screen

//Whenever the extension is installed, this function will run
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL('welcome/hello.html')
  let tab = await chrome.tabs.create({ url })
  console.log(`Created tab ${tab.id}`)
})