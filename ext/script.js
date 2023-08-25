document.getElementById("autofill").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        name: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        city: document.getElementById("city").value,
        postCode: document.getElementById("postCode").value,
        phoneNumber: document.getElementById("phoneNumber").value,
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
      city: document.getElementById("city").value,
      postCode: document.getElementById("postCode").value,
      phoneNumber: document.getElementById("phoneNumber").value,
    },
    function () {
      console.log("Saved");
    }
  );
});

document.getElementById("load").addEventListener("click", () => {
  chrome.storage.sync.get(
    ["name", "lastName", "city", "postCode", "phoneNumber"],
    function (result) {
      document.getElementById("firstName").value = result.name;
      document.getElementById("lastName").value = result.lastName;
      document.getElementById("city").value = result.city;
      document.getElementById("postCode").value = result.postCode;
      document.getElementById("phoneNumber").value = result.phoneNumber;
    }
  );
});
