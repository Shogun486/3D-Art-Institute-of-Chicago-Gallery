3D Art Gallery (Art Institute of Chicago "Experience")
==============

Ever wanted an "on-demand" art gallery experience? Well, you now can! This website allows
you to search all artworks under the API of the _Art Institute of Chicago_'s (AIC). You can now
view any of these artworks on this website, displayed as a gallery for you to walk through.
When you approach each artwork, a description box will pop up so you can learn more about the piece. 
You'll feel like you're walking inside of the AIC itself!

## Demo
To watch a quick demo, click [here].

## API Details
The [AIC's REST API] holds the museum's public data. The image files you see are not from this API, but
instead must be acquired through a different URL following [IIIF Image API] standards. Within [paintingData.js], 
you'll find that image requests are specifcially made with the URL suffix `/full/843,/0/default.jpg` (IIIF supports 
multiple image display options). This particular display option is what's used by AIC's website, therefore 
images will load much faster on your end if you stick with this option. You don't have to make any changes to any of the files
for this website to work. These details are simply informational.

## Tools
This website is created using JavaScript, HTML, and CSS. 
The Three.js library allows this website to function as a three-dimensional art gallery experience. 

## Using the website
To use the website, all you need to do is:
  * Install [Node.js]
  * Run `npm install` on your terminal
  * Then run `npx vite`
  * Open the `localhost` link in your browser

[here]: https://drive.google.com/file/d/1pjongfAoSrFIB_XtTA_hxK6wNA9FfanO/view
[Node.js]: https://nodejs.org
[AIC's REST API]: https://api.artic.edu/docs/#introduction
[IIIF Image API]: https://iiif.io/api/image/2.0/
[paintingData.js]: https://github.com/Shogun486/3D_Art_Gallery/blob/main/modules/paintingData.js


