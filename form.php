<?php

$to = 'support@t-code.ru, dir@irksound.ru, ermolaev_94@mail.ru, sound@irksound.ru, support@t-code.ru';
$userEmail = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$subject = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$message = strip_tags(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_MAGIC_QUOTES), '<p><a><b><div>');
$meropriyatie = filter_input(INPUT_POST, 'meropriyatie', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$ot = filter_input(INPUT_POST, 'ot', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$do = filter_input(INPUT_POST, 'do', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$plochadka = filter_input(INPUT_POST, 'plochadka', FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);

$colvo = "<b>Количество посетителей:</b> от $ot до $do";
$name = "<b>Имя:</b> $name";
$phone = "<b>Телефон:</b> $phone";
$message = "<b>Комментарий:</b> $message";
$meropriyatie = "<b>Тип мероприятия:</b> $meropriyatie";
$plochadka = "<b>Площадка:</b> $plochadka";

if (empty($userEmail)) {
	die('Отсутствует или неверен [ez] адрес почты.');
} elseif (empty($phone)) {
	die('Отсутствует  номер телефона.');
}

$the_file = '';
if (!empty($_FILES['uploaded_file']['tmp_name'])) {
	$path = $_FILES['uploaded_file']['name'];
	if (copy($_FILES['uploaded_file']['tmp_name'], $path)) {
		$the_file = $path;
	}
}

$headers = null;

if (empty($the_file)) {

	$headers = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/html; charset=UTF-8";
	$headers[] = "From: $name <$userEmail>";
	$headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
	$headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
	$headers[] = "Subject: {$subject}";
	$headers[] = "X-Mailer: PHP/" . phpversion();

	$allmsg = "<p>$name </p>
	<p>$phone </p>
	<p>$message </p>
	<p>$meropriyatie </p>
	<p>$plochadka </p>
	<p>$colvo </p>";
	$allmsg = "<html><head><title>Звуковые системы</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";
	if (!mail($to, $subject, $allmsg, implode("\r\n", $headers))) {
		echo 'Письмо не отправлено - что-то не сработало.';
	} else {
		echo 'Отправлено письмо без вложений.';
	}
} else {

	if (!$the_file) {
		die("Ошибка отправка письма: Файл $the_file не может быть прочитан.");
	}
	$fp = fopen($the_file, "r");
	$file = fread($fp, filesize($path));
	fclose($fp);
	unlink($path);

	$allmsg = "<p>$name </p>
	<p>$phone </p>
	<p>$message </p>
	<p>$meropriyatie </p>
	<p>$plochadka </p>
	<p>$colvo </p>";
	$allmsg = "<html><head><title>Обратная связь</title><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"></head><body>" . $allmsg . "</body></html>";

	$boundary = "--" . md5(uniqid(time()));

	$headers = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "From: $name <$userEmail>";
	$headers[] = "Bcc: JJ Chong <bcc@domain2.com>";
	$headers[] = "Reply-To: Recipient Name <receiver@domain3.com>";
	$headers[] = "Subject: {$subject}";
	$headers[] = "X-Mailer: PHP/" . phpversion();
	$headers[] = "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

	$multipart = array();
	$multipart[] = "--$boundary";
	$multipart[] = "Content-Type: text/html; charset=UTF-8";
	$multipart[] = "Content-Transfer-Encoding: Quot-Printed\r\n";
	$multipart[] = "$allmsg\r\n";
	$multipart[] = "--$boundary";
	$multipart[] = "Content-Type: application/octet-stream";
	$multipart[] = "Content-Transfer-Encoding: base64";
	$multipart[] = "Content-Disposition: attachment; filename = \"" . $path . "\"\r\n";
	$multipart[] = chunk_split(base64_encode($file));
	$multipart[] = "--$boundary";

	if (!mail($to, $subject, implode("\r\n", $multipart), implode("\r\n", $headers))) {
		echo 'Письмо не отправлено - что-то не сработало.';
	} else {
		echo 'Отправлено письмо с вложениями.';
	}
}
