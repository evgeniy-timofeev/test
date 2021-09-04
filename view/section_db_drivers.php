<section id="db">
    <h2>DataBase</h2>
    <p><strong>HTML/PHP:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_db_drivers.php" target="_blank">view/section_db_drivers.php</a></p>
    <p>5. Напишите код на php, который выводит содержимой таблицы БД в виде HTML-таблицы. В примере можно использовать
       любой тип СУБД и любые известные библиотеки и фреймворки для обращения к БД.</p>
    
    
    <?php
        $stmt = $DB->prepare("SELECT * FROM drivers");
        $stmt->execute();
        $drivers = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    ?>

    <table border="1">
        <caption>Водители</caption>
        <tr>
            <th>ID Водителя</th>
            <th>ID Машины</th>
            <th>Имя</th>
            <th>Комментарий</th>
        </tr>
        
        <?php foreach ($drivers as $driver) { ?>
            <tr>
                <td><?= $driver['driver_id'] ?></td>
                <td><?= $driver['car_id'] ?></td>
                <td><?= $driver['driver_name'] ?></td>
                <td><?= $driver['driver_comment'] ?></td>
            </tr>
        <?php } ?>
    </table>

</section>