var all=document.querySelectorAll(".mobiles");
var lessthan5kw=document.querySelectorAll(".lessthan5k");
var lessthan10kw=document.querySelectorAll(".lessthan10k");
var lessthan20kw=document.querySelectorAll(".lessthan20k");
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var click5k=document.getElementById("lessthan5k");
click5k.addEventListener("click",function(){
	var i;
	for(i=0;i<all.length;i++)
		all[i].className="hidden";
	for(i=0;i<lessthan5kw.length;i++)
		lessthan5kw[i].className="show";
});
var click10k=document.getElementById("lessthan10k");
click10k.addEventListener("click",function(){
	var i;
	for(i=0;i<all.length;i++)
		all[i].className="hidden";
	for(i=0;i<lessthan10kw.length;i++)
		lessthan10kw[i].className="show";

});
var click20k=document.getElementById("lessthan20k");
click20k.addEventListener("click",function(){
	var i;
	for(i=0;i<all.length;i++)
		all[i].className="hidden";
	for(i=0;i<lessthan20kw.length;i++)
		lessthan20kw[i].className="show";

});
var alli=document.getElementById("selectall");
alli.addEventListener("click",function(){
for(i=0;i<all.length;i++)
	all[i].className="show";
});

