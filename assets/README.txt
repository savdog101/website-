HOW TO TRY A STYLE
1. Upload ALL files in this folder into your repository's "assets" folder.
2. In each page's <head> (index.html etc), change the stylesheet line to one of:
   <link rel="stylesheet" href="assets/style-1-editorial.css">   (or -2-technical, -3-glass, -4-overlay, -5-magazine)
3. Pick colours on the <html> tag:  <html lang="en" data-palette="purple">   (black, blue, purple, pink)

HOW TO ADD AN IMAGE TO A CARD
Upload your photo to an "images" folder, then add one line as the FIRST thing inside the card:
<a class="tile big" href="...">
  <img class="cover" src="images/my-photo.jpg" alt="Describe the photo">
  <span class="chip">Paper</span> ...
