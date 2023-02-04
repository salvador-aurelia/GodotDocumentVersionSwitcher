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

if(window.location.href.includes("stable")){
    select.selectedIndex = 0;
}
if(window.location.href.includes("latest")){
    select.selectedIndex = 1;
}

select.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const currentUrl = window.location.href;
    if(selectedValue === "stable"){
        window.location.href = currentUrl.replace("latest", "stable");
        select.selectedIndex = 0;
    }else{
        window.location.href = currentUrl.replace("stable", "latest");
        select.selectedIndex = 1;
    }
});

versionDiv.innerHTML = "";
versionDiv.appendChild(select);