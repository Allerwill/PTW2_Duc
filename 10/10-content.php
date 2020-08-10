<?php
$url_host = $_SERVER['HTTP_HOST'];

$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

preg_match_all($pattern_uri, __DIR__, $matches);

$url_path = $url_host . $matches[1][0];

$url_path = str_replace('\\', '/', $url_path);
?>

<div class="type-10">
    <div class="cover-map">
        <div class="title-map">
            <span class="first">WE ARE</span>
            <span class="second">WORLDWIDE</span>
        </div>

        <div class="google-map">
            <div class="location" position="one">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="two">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="three">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="four">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="five">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="six">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="seven">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
            <div class="location" position="eight">
                <div class="location-info">
                    <div class="city-name">NEW YORK</div>
                    <div class="content-city">+0 595-510-1352<br>flatley.don@weissnat.me<br>713 Dibbert Bridge</div>
                    <span class="arrow"></span>
                </div>
            </div>
        </div>
    </div>
</div>