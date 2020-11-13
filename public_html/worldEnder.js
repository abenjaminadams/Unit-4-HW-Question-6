/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Addressing the user:
document.write("Hello, I am not liable for anything... Proceed with caution!" + "<br>");


//First declaration of variables:

let stuffEntered=[], userReply;

//Using a do/while loop to gather the users response.
do { 
       userReply = prompt("");
       stuffEntered.push(userReply);
       
       //The following code will discreetly run in the background until the loop is complete
       document.write(userReply + "<br>");
}

while (stuffEntered.length < 3); 





document.write("Thank you! The bombs have been disarmed safely! CoNgRaTs AgEnT");
//Just kidding thats probably too much ^^^



