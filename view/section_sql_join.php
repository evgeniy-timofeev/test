<section id="join">
    <h2>SQL JOIN</h2>
    <p><strong>HTML/PHP:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_sql_join.php" target="_blank">view/section_sql_join.php</a></p>
    <p>6. Доработайте код предыдущего теста, чтобы отображалось объединение двух таблиц (набор столбцов в результате –
       объединение полей таблиц), связанных внешними ключами.</p>
    
    <?php
        $stmt = $DB->prepare(
            "SELECT
		d.driver_id driver_id, 
		c.car_id car_id, 
		d.driver_name driver_name, 
		d.driver_comment driver_comment, 
		c.gos_number gos_number, 
		c.car_model car_model, 
		c.car_comment car_comment, 
		d.car_id driver_car_id 
		FROM drivers as d RIGHT JOIN  cars as c 
		ON d.car_id = c.car_id"
        );
        
        $stmt->execute();
        $drivers = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    ?>

    <table border="1">
        <caption>Водители и машины</caption>
        <tr>
            <th>ID Водителя</th>
            <th>ID Машины</th>
            <th>Имя водителя</th>
            <th>Модель машины</th>
            <th>Гос номер машины</th>
            <th>Комментарий по машине</th>
            <th>Комментарий по водителю</th>
        </tr>
        
        <?php foreach ($drivers as $driver) { ?>
            <tr>
                <td><?= $driver['driver_id'] ?></td>
                <td><?= $driver['car_id'] ?></td>
                <td><?= $driver['driver_name'] ?></td>
                <td><?= $driver['car_model'] ?></td>
                <td><?= $driver['gos_number'] ?></td>
                <td><?= $driver['car_comment'] ?></td>
                <td><?= $driver['driver_comment'] ?></td>
            </tr>
        <?php } ?>
    </table>

</section>