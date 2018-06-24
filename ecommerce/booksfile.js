var all=document.querySelectorAll(".books")
var eng=document.querySelectorAll(".engineering");
var younga=document.querySelectorAll(".youngadult");
var kids=document.querySelectorAll(".kids");
var engbooks=document.getElementById("engineering");
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

engbooks.addEventListener("click",function(){

	var i;
	for(i=0;i<all.length;i++)
	all[i].className="hidden";
for(i=0;i<eng.length;i++)
	eng[i].className="show";
});
var click5k=document.getElementById("selectall");
click5k.addEventListener("click",function(){
	for(i=0;i<all.length;i++)
	all[i].className="show";
	
});
var click10k=document.getElementById("kids");
click10k.addEventListener("click",function(){
var i;
	for(i=0;i<all.length;i++)
	all[i].className="hidden";
for(i=0;i<eng.length;i++)
	kids[i].className="show";
});
var alli=document.getElementById("youngadult");
alli.addEventListener("click",function(){
for(i=0;i<all.length;i++)
	all[i].className="hidden";
	var i;
	for(i=0;i<younga.length;i++)
	younga[i].className="show";
});