<?php
function build_list($array) {
    $list = '<ul>';

    foreach($array as $key => $value) {
            if(is_array($value)) {
            	$list .= $key.': ';
                $list .= build_list($value);
            } else {
                $list .= '<li>'.$key.': '.$value.'</li>';
            }
    }

    $list .= '</ul>';
    return $list;
}


if ($_FILES) {
	if (is_uploaded_file($_FILES["file"]["tmp_name"][0])) {
		if (move_uploaded_file($_FILES["file"]["tmp_name"][0], '../upload/' . $_FILES["file"]["name"][0])) {
			$json = json_decode(file_get_contents('../upload/' . $_FILES["file"]["name"][0]), true);
			echo build_list($json);
		} else {
			echo 'Ошибка при обработке файла';
		}
	} else {
		echo 'Ошибка загрузки файла';
	}
}
?>