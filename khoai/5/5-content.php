<?php
$url_host = $_SERVER['HTTP_HOST'];

$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

preg_match_all($pattern_uri, __DIR__, $matches);

$url_path = $url_host . $matches[1][0];

$url_path = str_replace('\\', '/', $url_path);
?>

<div class="type-5">
    <div>
        <div class="number">12<span style="font-size: 30px">Years of successful work</span>
        <div class="number">12<span style="font-size: 30px">Years of successful work</span>
        <div class="number">12<span style="font-size: 30px">Years of successful work</span>
            <span style="font-size: 30px; color: black;">in the market</span></div>

    </div>

</div>