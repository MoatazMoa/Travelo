//russia
//gallery
const fullImageBox_OA = document.querySelector("#full-image-box_OA");
const fullIMage_OA = document.querySelector("#fullImg_OA");
const xIcon = document.querySelector("#xIcon");

function openFullImg_OA(pic)
{
    fullImageBox_OA.style.display = "flex";
    fullIMage_OA.src = pic;
}

function closeFullImg_OA()
{
    fullImageBox_OA.style.display = "none";
}

