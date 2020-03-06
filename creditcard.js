
window.onload = function(){
    document.getElementById("card-number").addEventListener("keydown", numbersOnly);
};

/**
 * Only allow Numbers for credit card input field
 *
 * @function numbersOnly
 * prevent alphabets and special characters to add in the input field
 * allow copy, paste and select the input value
 */
let numbersOnly = function( event) {
    console.log(event);
	if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
	// Allow: Ctrl/cmd+A
	(event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) ||
	// Allow: Ctrl/cmd+C
	(event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) ||
	// Allow: Ctrl/cmd+X
	(event.keyCode == 88 && (event.ctrlKey === true || event.metaKey === true)) ||
	// Allow: Ctrl/cmd+V
	(event.keyCode == 86 && (event.ctrlKey === true || event.metaKey === true)) ||
	// Allow: home, end, left, right
	(event.keyCode >= 35 && event.keyCode <= 39)) {
		return true;
	}
	// Ensure that it is a number and stop the keypress
	if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
		event.preventDefault();
		return false;
	}
	return true;
};


