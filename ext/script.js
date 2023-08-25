document.getElementById("autofill").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        name: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        addressLine1: document.getElementById("addressLine1").value,
        city: document.getElementById("city").value,
        postCode: document.getElementById("postCode").value,
        phoneNumber: document.getElementById("phoneNumber").value,

        job1Title: document.getElementById("job1Title").value,
        job1Company: document.getElementById("job1Company").value,
        job1Location: document.getElementById("job1Location").value,
        job1StartDate: document.getElementById("job1StartDate").value,
        job1EndDate: document.getElementById("job1EndDate").value,
        job1Description: document.getElementById("job1Description").value,

        job2Title: document.getElementById("job2Title").value,
        job2Company: document.getElementById("job2Company").value,
        job2Location: document.getElementById("job2Location").value,
        job2StartDate: document.getElementById("job2StartDate").value,
        job2EndDate: document.getElementById("job2EndDate").value,
        job2Description: document.getElementById("job2Description").value,

        school: document.getElementById("school").value,
      },
      function (response) {
        console.log(response);
      }
    );
  });
});

document.getElementById("save").addEventListener("click", () => {
  chrome.storage.sync.set(
    {
      name: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      addressLine1: document.getElementById("addressLine1").value,
      city: document.getElementById("city").value,
      postCode: document.getElementById("postCode").value,
      phoneNumber: document.getElementById("phoneNumber").value,

      job1Title: document.getElementById("job1Title").value,
      job1Company: document.getElementById("job1Company").value,
      job1Location: document.getElementById("job1Location").value,
      job1StartDate: document.getElementById("job1StartDate").value,
      job1EndDate: document.getElementById("job1EndDate").value,
      job1Description: document.getElementById("job1Description").value,

      job2Title: document.getElementById("job2Title").value,
      job2Company: document.getElementById("job2Company").value,
      job2Location: document.getElementById("job2Location").value,
      job2StartDate: document.getElementById("job2StartDate").value,
      job2EndDate: document.getElementById("job2EndDate").value,
      job2Description: document.getElementById("job2Description").value,

      school: document.getElementById("school").value,
    },
    function () {
      console.log("Saved");
    }
  );
});

document.getElementById("load").addEventListener("click", () => {
  chrome.storage.sync.get(
    [
      "name", "lastName", "addressLine1", "city", "postCode", "phoneNumber",
      "job1Title", "job1Company", "job1Location", "job1StartDate", "job1EndDate", "job1Description",
      "job2Title", "job2Company", "job2Location", "job2StartDate", "job2EndDate", "job2Description",
      "school",
    ],
    function (result) {
      document.getElementById("firstName").value = result.name;
      document.getElementById("lastName").value = result.lastName;
      document.getElementById("addressLine1").value = result.addressLine1;
      document.getElementById("city").value = result.city;
      document.getElementById("postCode").value = result.postCode;
      document.getElementById("phoneNumber").value = result.phoneNumber;

      document.getElementById("job1Title").value = result.job1Title;
      document.getElementById("job1Company").value = result.job1Company;
      document.getElementById("job1Location").value = result.job1Location;
      document.getElementById("job1StartDate").value = result.job1StartDate;
      document.getElementById("job1EndDate").value = result.job1EndDate;
      document.getElementById("job1Description").value = result.job1Description;

      document.getElementById("job2Title").value = result.job2Title;
      document.getElementById("job2Company").value = result.job2Company;
      document.getElementById("job2Location").value = result.job2Location;
      document.getElementById("job2StartDate").value = result.job2StartDate;
      document.getElementById("job2EndDate").value = result.job2EndDate;
      document.getElementById("job2Description").value = result.job2Description;

      document.getElementById("school").value = result.school;
    }
  );
});
