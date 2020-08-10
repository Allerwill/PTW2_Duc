<?php
    $url_host = $_SERVER['HTTP_HOST'];

    $pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');

    $pattern_uri = '/' . $pattern_document_root . '(.*)$/';

    preg_match_all($pattern_uri, __DIR__, $matches);

    $url_path = $url_host . $matches[1][0];

    $url_path = str_replace('\\', '/', $url_path);
?>

<div class="type-17">
    <div class="nav-menu">
        <ul class="menu">
            <li class="menu-item">Logo</li>
            <li class="menu-item">Phone</li>
            <li class="menu-item">Home <span class="arrow-icon">></span>
                <div class="sub-menu">
                    <div class="sub-item" selected>Home - Light</div>
                    <div class="sub-item">Home - Dark</div>
                </div>
            </li>
            <li class="menu-item">About us</li>
            <li class="menu-item">Project <span class="arrow-icon">></span>
                <div class="sub-menu">
                    <div class="sub-item" selected>Project - List</div>
                    <div class="sub-item">Project - Details</div>
                </div>
            </li>
            <li class="menu-item">Blog <span class="arrow-icon">></span>
                <div class="sub-menu">
                    <div class="sub-item" selected>Blog - Post</div>
                    <div class="sub-item">Blog - List</div>
                </div>
            </li>
            <li class="menu-item">Contacts</li>
            <li class="menu-item"></li>
        </ul>
        <div class="fake-nav-menu">
            <span class="split-line" line="one"></span>
            <span class="split-line" line="two"></span>
            <span class="split-line" line="three"></span>
            <span class="split-line" line="four"></span>
        </div>
        <div class="current-select">
            <div class="title-menu">BLOG - LIST</div>
            <div class="description"><a href="#">Home/ Blog<span class="load-item">/ Blog -Post</span></a></div>
        </div>
    </div>

</div>