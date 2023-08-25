// Listen to the values that we send through
// and interact with the webpage

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        try {

            const map1 = new Map();
            map1.set('legalNameSection_firstName', request.name);
            map1.set('legalNameSection_lastName', request.lastName);
            map1.set('addressSection_addressLine1', request.addressLine1);
            map1.set('addressSection_city', request.city);
            map1.set('addressSection_postalCode', request.postCode);
            map1.set('phone-number', request.phoneNumber);

            // Creating the first work experience object
            const workExperience1 = new Map();
            workExperience1.set("jobTitle", request.job1Title);
            workExperience1.set("company", request.job1Company);
            workExperience1.set("location", request.job1Location);
            workExperience1.set("description", request.job1Description);

            // Creating the second work experience object
            const workExperience2 = new Map();
            workExperience2.set("jobTitle", request.job2Title);
            workExperience2.set("company", request.job2Company);
            workExperience2.set("location", request.job2Location);
            workExperience2.set("description", request.job2Description);

            if (document.querySelector("div[data-automation-id='contactInformationPage']")){
                for (let [key, val] of map1) {
                    if (document.querySelector(`input[data-automation-id=${key}]`)){
                        document.querySelector(`input[data-automation-id=${key}]`).value = val;
                    }
                }
            }
       
            if (document.querySelector("div[data-automation-id='workExperienceSection']")){
                for (let [key, val] of workExperience1) {
                    if (key == 'description'){
                        document.querySelector("div[data-automation-id='workExperience-1']").querySelector(`textarea[data-automation-id=${key}]`).value = val;
                    } else {
                        document.querySelector("div[data-automation-id='workExperience-1']").querySelector(`input[data-automation-id=${key}]`).value = val;
                    }
                }
                for (let [key, val] of workExperience2) {
                    if (key == 'description'){
                        document.querySelector("div[data-automation-id='workExperience-2']").querySelector(`textarea[data-automation-id=${key}]`).value = val;
                    } else {
                        document.querySelector("div[data-automation-id='workExperience-2']").querySelector(`input[data-automation-id=${key}]`).value = val;
                    }
                }
                
            }

            if (document.querySelector("div[data-automation-id='educationSection']")){
                document.querySelector(`input[data-automation-id="school"]`).value = request.school;
            }
                
        } catch (error) {
            console.log(error)
            sendResponse({ status: "Exception occurred!" })
        }
    }
)
