

function SiteUser (nameLast, nameFirst, country, address1, address2, city, state, province, postalCode, phoneNumber, email, birthDate, interest) {
	this.nameLast;
	this.nameFirst;
	this.country;
	this.address1;
	this.address2;
	this.city;
	this.state;
	this.province;
	this.postalCode;
	this.phoneNumber;
	this.email;
	this.birthDate;
	this.interest;
	this.purchase = function () {
		alert("You have made a purchase");
	};
}

var newUser = new SiteUser ("Speck", "Richard", "United States", "2440 E Tudor Rd", "PMB 943",
	"Anchorage", "AK", "", "99507", "4072550590", "rickspeck@yahoo.com", 
	"06141960",["pants", "longcoat", "backpack"]);

newUser.purchase();
	// JavaScript Document