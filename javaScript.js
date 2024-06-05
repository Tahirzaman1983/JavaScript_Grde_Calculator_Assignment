var marks = +prompt("Enter your marks out of 100","enter your marks");
if (marks > 100) {
  var result="please enter marks below the 100";
} else if (marks >= 90) {
   result="Your Grade A ";
  
} else if (marks >= 80) {
  result="your Grad is B";
} else if (marks >= 70) {
  result="your Grad is C";
} else if (marks >= 60) {
  result="your Grad is D";
} else {
  result="sorry Your are Fail";
}
alert("you entered  "  + marks + "  "+ "marks "+result);

