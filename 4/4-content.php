<?php
$url_host = $_SERVER['HTTP_HOST'];

$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

preg_match_all($pattern_uri, __DIR__, $matches);

$url_path = $url_host . $matches[1][0];

$url_path = str_replace('\\', '/', $url_path);
?>

<div class="type-4">
    <div class="fake-body"></div>

    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="img-title">Residential care <br>project in Paris</div>
                <div class="office">Architecture</div>
                <div class="more-info"><img src="images/zoom.png" style="width: 15px;"></div>
                <div class="cover-img"><img src="images/1.jpg" alt=""></div>
            </div>
            <div class="swiper-slide">
                <div class="img-title">Concert hall in <br>New york</div>
                <div class="office">Interior</div>
                <div class="more-info"><img src="images/zoom.png" style="width: 15px;"></div>
                <div class="cover-img"><img src="images/2.jpg" alt=""></div>
            </div>
            <div class="swiper-slide">
                <div class="img-title">Modern hotel in <br>London</div>
                <div class="office">Design</div>
                <div class="more-info"><img src="images/zoom.png" style="width: 15px;"></div>
                <div class="cover-img"><img src="images/3.jpg" alt=""></div>
            </div>
            <div class="swiper-slide">
                <div class="img-title">Residential care <br>project in Sydney</div>
                <div class="office">Interior</div>
                <div class="more-info"><img src="images/zoom.png" style="width: 15px;"></div>
                <div class="cover-img"><img src="images/4.jpg" alt=""></div>
            </div>
            <div class="swiper-slide">
                <div class="img-title">Modern hotel in <br>Moscow</div>
                <div class="office">Architecture</div>
                <div class="more-info"><img src="images/zoom.png" style="width: 15px;"></div>
                <div class="cover-img"><img src="images/5.jpg" alt=""></div>
            </div>
        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

    </div>

    <div class="w3-content w3-display-container" style="text-align: -webkit-center;">
        <img class="mySlides" src="images/1.jpg" style="width:330px">
        <img class="mySlides" src="images/2.jpg" style="width:330px">
        <img class="mySlides" src="images/3.jpg" style="width:330px">
        <img class="mySlides" src="images/4.jpg" style="width:330px">
        <img class="mySlides" src="images/5.jpg" style="width:330px">
        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        <span class="close">x</span>
    </div>
    <script>
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = x.length
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }

        $('.more-info').click(function () {
            $('body').addClass("enable")
        });
        $('.close, .fake-body').click(function () {
            $('body').removeClass("enable")
        });
    </script>

</div>