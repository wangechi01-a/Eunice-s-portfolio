
 //My javaScript code starts here-->
 var tablinks = document.getElementsByClassName("tab-links");
 var tabcontents = document.getElementsByClassName("tab-contents");
 function opentab(tabname) {
     for (tablink of tablinks) {
         tablink.classList.remove("active-link")
     }
 
     for (tabcontent of tabcontents) {
         tabcontent.classList.remove("active-tab")
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab");
 
 }
 
 
 //menu opening on smalll screens
 var sidemenu = document.getElementById("sidemenu");
 function openmenu() {
     sidemenu.style.right = "0"; // Slide the menu into view
 }
 
 function closemenu() {
     sidemenu.style.right = "-200px"; // Slide the menu out of view
 }
 
 
 
 
 //calculating words in the textArea
 /*
 const textArea = document.querySelector('textarea'); // textarea or input
 textArea.addEventListener('input', calculateWords);
 function calculateWords(e) {
 const splitArr = e.target.value.split(' ');
 const newSplitArr = splitArr.filter((value) => {
 return value; // returning values with content
 });
 console.log(newSplitArr);
 } 
 */
 
 //--contact for javascript starts below-->
 //--Got some help from this github account on the code below: https://github.com/jamiewilson/form-to-google-sheets,, also he gave ideas and script to enter in google sheets extensions web app feature-->
 

const scriptURL = "https://script.google.com/macros/s/AKfycbww0Oxj8TAWm1pd9etVFUjnbo-UnsLbpZbbR8ms1-i_OIVoP8A3-Atqv5lOMOV2UyCQwA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 fetch(scriptURL, {
   method: "POST",
   body: new FormData(form),
 })
   .then((response) => response.json()) // Parse JSON response
   .then((data) => {
     if (data.status === "success") {
       msg.innerHTML = "Email sent successfully!";
       console.log("Success:", data.message);
     } else {
       throw new Error(data.message);
     }
     setTimeout(() => {
       msg.innerHTML = "";
     }, 5000);
     form.reset();
   })
   .catch((error) => {
     msg.innerHTML = "Error sending email!";
     console.error("Error!", error.message);
   });
});

 