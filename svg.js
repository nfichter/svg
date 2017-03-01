var savage = document.getElementById("bruh");

var clear = document.getElementById("cya");

var lastX = -1;
var lastY = -1;

var drawPath = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", mouseX);
    c.setAttribute("cy", mouseY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "black");
    c.setAttribute("stroke", "green");
    savage.appendChild(c);

    if (lastX >=0) {
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	
	l.setAttribute("x1", mouseX);
	l.setAttribute("y1", mouseY);
	l.setAttribute("x2", lastX);
	l.setAttribute("y2", lastY);
	l.setAttribute("fill", "black");
	l.setAttribute("stroke", "green");
	l.setAttribute("stroke-width", "20");
	savage.appendChild(l);
    }
    lastX = mouseX;
    lastY = mouseY;
};

savage.addEventListener('click', drawPath);
