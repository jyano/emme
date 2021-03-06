<html>
<head>
    <title>Game Development Tutorial</title>
    <script src = "jquery.js" type = "text/javascript"></script>
    <script src = "utility.js" type = "text/javascript"></script>
    <script src = "canvas.js" type = "text/javascript"></script>
    <script src = "sprite.js" type = "text/javascript"></script>
    <script src = "world.js" type = "text/javascript"></script>

    <script language = "javascript">

        var Context = null;
        var BLOCK_W = 32;
        var BLOCK_H = 32;

        var wall = new Sprite("wall.png");
        var water = new Sprite("water.png");
        var dog = new Sprite("dog-sprite-sheet.png");
        var dog2 = new Sprite("dog-sprite-sheet.png");

        var map = [ 0,0,0,0,0,0,0,0,0,0,
                    0,0,1,1,1,0,1,0,0,0,
                    0,0,1,1,1,0,0,0,0,0,
                    0,0,1,1,1,1,0,0,0,0,
                    0,0,0,0,1,1,1,0,0,0,
                    0,0,0,0,1,1,1,1,1,0,
                    0,0,0,0,0,0,1,1,1,1,
                    0,0,1,1,0,0,0,0,1,1,
                    0,0,0,0,0,1,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0 ];



        var mapIndex = 0;

        $(document).ready(function(){
            Context = new HTML("game", 640, 480);
        });

        $(window).load(function(){

        });

        setInterval(function(){

            mapIndex = 0;

            for (var y = 0; y < 10; y++)
            {
                for (var x = 0; x < 10; x++, mapIndex++)
                {
                    var tile_x = x * BLOCK_W;
                    var tile_y = y * BLOCK_H;

                    var tileType = map[mapIndex];

                    if (tileType == 0)
                        water.draw(tile_x, tile_y);
                    else
                        wall.draw(tile_x, tile_y);
                }
            }

            // Animated characters
            dog.drawAnimated(64, 32, [1,2,3,4]);
            dog2.drawAnimated(64, 64, [17, 18, 19, 20]);

        }, 12);

    </script>
</head>
<body>

    <canvas id = "game"></canvas>

</body>
</html>