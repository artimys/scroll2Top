jQuery - scroll2Top()
=======
A simple customizable plugin for scrolling back to top of page.

### Setup:
------
**1. Include JS files ([jQuery](http://jquery.com/download/) >= 1.7.2 and scroll2Top.js)**
````html
  <script src="js/jquery.1.11.0.min.js"></script>
  <script src="js/jquery.scroll2Top.min.js"></script>
````

**2. Include CSS/Image (modify to your needs)**
````css
  #to_the_top {
    display: none;
    position: fixed;
    cursor: pointer;
    /* modify below css to your needs */
    background: url('images/top.png') no-repeat left top;
    width: 60px;
    height: 60px;
    top: 240px;
    right: 50px;
  }
````


**3. Include HTML**
````html
  <div id="to_the_top"></div>
````

**4. Call method scroll2Top() on element**
````javascript
  $("#to_the_top").scroll2Top();
````

### Options:
------

| Option        | Value           | Desciption  |
| :------------- |:-------------| :-----|
| appearAt    | Integer (px)     | When scroll image should appear based on scrollbar's vertical position.  (higher the number, the longer it takes for scroll image to appear) `default: 250` |
| fadeSpeed   | Integer (ms)     | Control 'Fade' effect speed for scroll image. `default: 200` |
| scrollSpeed | Integer (ms)     | Control speed when animation scrolls up. `default: 600` |

````javascript
  $("#to_the_top").scroll2Top({
    scrollSpeed: 200, // DEFAULT(ms): 600
    appearAt: 650     // DEFAULT(px): 250
  });
````