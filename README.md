# etch-a-sketch

The project consists in creating an interactive grid that has a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

The grid has been created and the coloring happens on-hover.

Now I want to create a color restart button, and add a color selector and a grid-size (input range) interactive bar.
To restart, add an event listener to the restart button that sets the color of the container (or each .col element) to the original one.

After the beforementioned is done, I will add a randomizer for the color, and a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions. (using the opacity property in CSS).

<!--  -->

Added some styles (4 colour palette).
The restart button and grid-size input range have been created and are functional.

Will now add a color selector, random color button, random opacity button and erase function.

<!--  -->

Added an eraser and paint buttons. Also, added a color selector and a color randomizer button.
Will now add a function to modify the opacity of the painting and, finally, will make the whole page flexible.

<!--  -->

The button to increase the opacity has been added. The opacity now behaves as a sinusoidal function when the "Vary Opacity" button is selected. Project is completed.
