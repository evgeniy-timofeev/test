<?php require_once '../model/db.php' ?>

<table border="1">
	<caption>Водители</caption>
	<tr>
		<th>ID Водителя</th>
		<th>ID Машины</th>
		<th>Имя</th>
		<th>Комментарий</th>
	</tr>
	
	<?php foreach($drivers as $driver) {?>
		<tr>
			<td><?=$driver['driver_id']?></td>
			<td><?=$driver['car_id']?></td>
			<td><?=$driver['driver_name']?></td>
			<td><?=$driver['driver_comment']?></td>
		</tr>
	<?php } ?>
</table>