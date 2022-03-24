<?php

// поля из формы
$name = $_POST['name'];
$phone = $_POST['tel'];
$message = $_POST['message'];

// токен нашего бота из botFather
$token = "5261493967:AAG8EOjx6lNP3PavK0I6iXudCID6LmAiq3M";
 $chat_id = "https://api.telegram.org/bot5261493967:AAG8EOjx6lNP3PavK0I6iXudCID6LmAiq3M/getUpdates";
$chat_id = "180988088";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'message:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
