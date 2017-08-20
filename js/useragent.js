var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
console.log(mobile);

$('#mobile_styles').attr('disabled', !mobile);
$('#desktop_styles').attr('disabled', mobile);