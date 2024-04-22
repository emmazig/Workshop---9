# Workshop-9

Create variable 

Let webcam;

(in set up) 

Pixel density → pixelDensity(1);

webcam=CreateCapture(VIDEO)

webcam.size(400,400)

webcam.hide(); → hides webcam

→ anything you can do with images you can do with live video, eg, filters, tints , pixel manipulation.

Add class eg, ball or point class.
In show:

Instead of fill or stroke:

Let pixelColour = webcam.get(this.x,this.y);

Fill (pixelColour[0], pixelColour[1], pixelColour[2]);

 Also take webcam and background out of draw 


Let scale = 18 or something else i used 10

In setup

webcam.size(width/scale, height/scale)

In show

Let px = this.x/scale;

Let py = this.y/scale;

Let pixelColour = webcam.get(px, py);


After adding part of my code from workshop task 7, I played around with different transparencies, amount of points and the size of points. Then I manipulated half the canvas in the same way I did in workshop tak 3 to create this half and half mirror effect.
