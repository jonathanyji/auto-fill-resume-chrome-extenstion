// Listen to the values that we send through
// and interact with the webpage

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        try {
            document.querySelector("input[data-automation-id='legalNameSection_firstName']").value = request.name,
                document.querySelector("input[data-automation-id='legalNameSection_lastName']").value = request.lastName,
                document.querySelector("input[data-automation-id='addressSection_city']").value = request.city,
                document.querySelector("input[data-automation-id='addressSection_postalCode']").value = request.postCode,
                document.querySelector("input[data-automation-id='phone-number']").value = request.phoneNumber
        } catch (error) {
            console.log(error)
            sendResponse({ status: "Exception occurred!" })
        }
    }
)
