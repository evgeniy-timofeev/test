<section  id="drag-n-drop">
	<h2>Drag-n-Drop</h2>
	<p>7. Напишет код html-страницы, на которую можно drag-and-grop-нуть json-файл. Сразу послеdrag-and-drop-а этот json-файл должен быть отправлен на сервер, там средствами php разобран, и на основе него создан вложенный html-список, который должен быть отправлен обратно и вставлен в качестве содержимого страницы.</p>
	<a href = "test.json" download = "">Скачайте тестовый файл .json</a>
	<div class="uploader">
		<div>Перетащите файл формата JSON сюда</div>
		<div class="or">-или-</div>
		<div class="browser">
			<label>
				<span>Открыть проводник файлов</span>
				<input type="file" name="files[]" multiple="multiple"
				title="Click to add Files">
			</label>
		</div>
	</div>
	</div>
	<div class="col">
		<div class="dataZone"></div>
	</div>


</section>