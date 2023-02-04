const versionDiv = document.querySelector(".version");
const select = document.createElement("select");

const stableOption = document.createElement("option");
stableOption.text = "Stable";
stableOption.value = "stable";
select.add(stableOption);

const latestOption = document.createElement("option");
latestOption.text = "Latest";
latestOption.value = "latest";
select.add(latestOption);

select.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const currentUrl = window.location.href;
    if(selectedValue === "stable"){
        window.location.href = currentUrl.replace("latest", "stable");
    }else{
        window.location.href = currentUrl.replace("stable", "latest");
    }
});

versionDiv.innerHTML = "";
versionDiv.appendChild(select);