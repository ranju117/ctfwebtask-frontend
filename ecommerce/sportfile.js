var all=document.querySelectorAll(".sport")
var lessthan1kw=document.querySelectorAll(".grthan1k");
var lessthan5kw=document.querySelectorAll(".grthan5k");
var lessthan10kw=document.querySelectorAll(".grthan10k");

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
var click1k=document.getElementById("lessthan1k");
click1k.addEventListener("click",function(){
	var i;
	for(i=0;i<lessthan1kw.length;i++)
	lessthan1kw[i].className="hidden";
});
var click5k=document.getElementById("lessthan5k");
click5k.addEventListener("click",function(){
	for(i=0;i<all.length;i++)
	all[i].className="show";
	var i;
	for(i=0;i<lessthan5kw.length;i++)
	lessthan5kw[i].className="hidden";
});
var click10k=document.getElementById("lessthan10k");
click10k.addEventListener("click",function(){
	var i;
	for(i=0;i<all.length;i++)
	all[i].className="show";
	
	for(i=0;i<lessthan10kw.length;i++)
	lessthan10kw[i].className="hidden";
});
var alli=document.getElementById("selectall");
alli.addEventListener("click",function(){
for(i=0;i<all.length;i++)
	all[i].className="show";
});