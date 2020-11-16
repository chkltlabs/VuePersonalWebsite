<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="s.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.3/ace.js"></script>
    <meta name="viewport" content="width=device-width">
</head>
<body>
<!--        <video autoplay muted loop id="myVideo">-->
<!--            <source src="video/austin.mp4" type="video/mp4">-->
<!--        </video>-->
<div class="styled-select blue semi-square">
    <select id="langBox">
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
    </select>
</div>
<div id="editor" class="editor">class Erik {
    constructor(){
    this.skills = [
    'JavaScript',
    'PHP',
    'CSS',
    'HTML',
    'Java'
    ];
    this.hasDevJob = true;
    }
    get resume(){
    return 'contact.php';
    }

    get portfolio(){
    return 'portfolio.php';
    }

    get blog(){
    if(confirm('Are you sure you want to read these ramblings?')){
    return 'blog.php';
    }
    }

    get favoriteBeer(){
    if(hefeweizen){
    return 'Hefeweizen';
    } else if(craftWheatBeers){
    return 'Craft Wheat Beers';
    } else {
    return 'Blue Moon, I guess...';
    }
    }
    }</div>
<div class="frontpage">
    <h1 class="frontname">
        Erik V Gratz
    </h1>
    <ul>
        <li class="list">PHP Software Developer</li>
        <li class="list">Acroyogi</li>
        <li class="list">Craft Beer, Outer Space Enthusiast</li>
        <li class="list">Over 40% ramen noodles by volume</li>
        <li class="list">World Traveler</li><br>
        <li class="list"><a href="/about.php">this.enter()</a></li>
    </ul>
</div>
<script src="js/index.js"></script>
</body>
</html>

