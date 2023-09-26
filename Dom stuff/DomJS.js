const body = document.body;

body.append("Hey");

const myCreatedDiv = document.createElement("div");
/* 
myCreatedDiv.innerText=  "Hi"; */
/* myCreatedDiv.textContent = "HOla" */

myCreatedDiv.innerHTML = "<strong>HEYYYY</strong>";

/// better way of doing this

const div2 = document.createElement("div");
const strong = document.createElement("strong"); /// created <strong></Strong>

strong.innerText = "The new  text with Strong tag";
div2.append(strong);

body.append(div2);
body.append(myCreatedDiv);

const div = document.querySelector("div");
const spanhi = document.querySelector("#hi");
const bye = document.querySelector("#bye");
/* bye.remove(); */ /// just removing a span

///adding classses and changing ID

spanhi.setAttribute("id", "sdsdsf"); ///the id = "hi" changed to sdsdf
// removing attribute

spanhi.removeAttribute("id");

//////////Dealing with Data-stuff///////////

//first getting the stuff   ----- observe that if u write in data-letters-info it comes as Camel case of lettersInfo
//output for code below is

/* 
                            lettersInfo:   "ABC"
                            test : "1" 
                        */
console.log(spanhi.dataset);

/// so now just to get test
console.log(spanhi.dataset.lettersInfo); //--> will just give me ABC

///now I can place data inside the div
spanhi.dataset.awesome = "newinputVar";
/// new_var =       data

///////Now focusing on classes//////////////////////
//// adding or remove class in the span
spanhi.classList.add("newclass");
spanhi.classList.remove("hi2");
///remove if there else put of  not
spanhi.classList.toggle("hi3");

///now not changing the class but put directly place the style of the element
spanhi.style.color = "red";
