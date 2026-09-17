const BUSINESS_EMAIL = "Arif@transfabfze.com";
const BUSINESS_PHONE = "+97152 294 9329";

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const v=id=>document.getElementById(id).value;
  const subject=encodeURIComponent("Transport Quote Request - " + v("pickup") + " to " + v("delivery"));
  const body=encodeURIComponent(
`Dear Transfab Transport LLC,

Please quote for the following transport requirement:

Name / Company: ${v("name")}
Phone: ${v("phone")}
Pickup: ${v("pickup")}
Delivery: ${v("delivery")}
Trailer: ${v("trailer")}
Cargo Details: ${v("cargo")}

Thank you.`
  );
  if(BUSINESS_EMAIL.includes("YOUR_")){
    alert("Website is ready. Add your business email in script.js to activate the quote email button.");
    return;
  }
  window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});