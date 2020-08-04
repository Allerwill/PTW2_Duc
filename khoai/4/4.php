<?php 
    $url_host = 'http://' . $_SERVER['HTTP_HOST'];
    $pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');
    $pattern_uri = '/' . $pattern_document_root . '(.*)$/';
    
    preg_match_all($pattern_uri, __DIR__, $matches);
    $url_path = $url_host . $matches[1][0];
    $url_path = str_replace('\\', '/', $url_path);
    
    require_once 'scssphp/scss.inc.php';
    use ScssPhp\ScssPhp\Compiler;
    
    $scss = new Compiler();
    
    $result = $scss->compile('@import"sass/4.scss"');
    
    file_put_contents("css/4.css",$result);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo $url_path ?>/font/font-awesome-4.7.0/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo $url_path ?>/css/lib/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $url_path ?>/css/4.css">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;469;500;600;700&display=swap"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $url_path ?>/css/lib/swiper-bundle.css">
    <link rel="stylesheet" href="<?php echo $url_path ?>/css/lib/w3.css">
    <script src="<?php echo $url_path ?>/js/lib/swiper-bundle.min.js"></script>
    <script src="<?php echo $url_path ?>/js/lib/jquery-3.2.0.min.js"></script>
    <script src="<?php echo $url_path ?>/js/lib/bootstrap.min.js"></script>
    <script src="<?php echo $url_path ?>/js/script.js"></script>
    <title>Module 4</title>
</head>

<body>
    <?php include '4-content.php' ?>
</body>

</html>