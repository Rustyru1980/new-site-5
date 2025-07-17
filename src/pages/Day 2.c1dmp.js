// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

$w('#viewImage').onClick((event) => {
	$w('#coderainImage').show()
        
});//Click "Run", or Preview your site, to execute your code
$w('#eventCell').onMouseIn((event) => {
        $w('#backImage').show();
})
});





$w('#eventCell').onMouseOut((event) => {
    $w('#backImage').hide()    
})

$w('#colourTrigger').onViewportEnter((event) => {
    $w('#styledBox').style.backgroundColor = "rgba(255,0,0,0.5)";  
})
$w('#colourTrigger').onViewportLeave((event) => {
   $w('#styledBox').style.backgroundColor = "rgba(26,106,255,1)";  
})