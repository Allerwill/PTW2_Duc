<?php
    $url_host = $_SERVER['HTTP_HOST'];

    $pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

    $pattern_uri = '/' . $pattern_document_root . '(.*)$/';

    preg_match_all($pattern_uri, __DIR__, $matches);

    $url_path = $url_host . $matches[1][0];

    $url_path = str_replace('\\', '/', $url_path);
?>

<div class="type-5">
    <div class="container">

        <div class="background-cover-number">

            <div class="number">12</div>
            <h4 class="experience-info wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;"><span class="text-primary">Years of successful work</span><br> in the market</h4>

        </div>

    </div>
</div>