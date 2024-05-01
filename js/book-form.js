const form_OA = document.getElementById("form_OA");
const where_OA = document.getElementById("where-to_OA");
const guestsNumber_OA = document.getElementById("how-many_OA");
const arrivalDate_OA = document.getElementById("arrivals_OA")
const leavingDate_OA = document.getElementById("leaving_OA");


form_OA.addEventListener('submit', e => {
    e.preventDefault();

    validateForm_OA();

});


function validateForm_OA()
{
    let allValid = true;

    //where-to
    const whereValue_OA = where_OA.value.trim();
    if(whereValue_OA == "")
    {
        setError_OA(where_OA, "Please provide where you want to visit");
        allValid = false ;
    }
    else
    {
        setSuccess_OA(where_OA);
    }


    //guests-number
    const guestsNumberValue_OA = guestsNumber_OA.value;
    if (guestsNumberValue_OA == "")
    {
        setError_OA(guestsNumber_OA, "Please provide the number of guests");
        allValid = false ;
    }
    else if (guestsNumberValue_OA == 0)
    {
        setError_OA(guestsNumber_OA, "You can not enter (0) as the number of guests");
        allValid = false ;
    }
    else if (guestsNumberValue_OA > 20)
    {
        setError_OA(guestsNumber_OA, "the maximum number of guests is 20");
        allValid = false ;
    }
    else
    {
        setSuccess_OA(guestsNumber_OA);
    }

    //arriva-date
    const arrivalDateValue_OA = arrivalDate_OA.value;
    if (arrivalDateValue_OA === "")
    {
        setError_OA(arrivalDate_OA, "please choose an arrival date");
        allValid = false ;
    }
    else
    {
        setSuccess_OA(arrivalDate_OA);
    }

    //leaving-date
    const leavingDateValue_OA = leavingDate_OA.value;
    if(leavingDateValue_OA === "")
    {
        setError_OA(leavingDate_OA, "please choose a leaving date");
        allValid = false ;
    }
    else
    {
        setSuccess_OA(leavingDate_OA);
    }


    if (allValid) {
        localStorage.setItem("destination", whereValue_OA);
        localStorage.setItem("guestCount", guestsNumberValue_OA);
        localStorage.setItem("arrivalDate", arrivalDateValue_OA);
        localStorage.setItem("leavingDate", leavingDateValue_OA);
    
      }




}

function setError_OA(element, errorMessage )
{
    const parent = element.parentElement;
    if(parent.classList.contains("success"))
    {
        parent.classList.remove("success");
    }

    parent.classList.add("error");
    const messageDiv = parent.querySelector(".error");
    messageDiv.innerHTML = errorMessage;
}


function setSuccess_OA(element)
{
    const parent = element.parentElement;
    if(parent.classList.contains("error"))
    {
        parent.classList.remove("error");
    }

    parent.classList.add("success");
}
