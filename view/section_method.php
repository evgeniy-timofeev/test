<section id="Methods">
    <h2>Dynamic Method</h2>
    <p><strong>PHP:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/model/ClassA.php" target="_blank">model/ClassA.php</a></p>
    <p><strong>HTML/PHP:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_method.php" target="_blank">view/section_method.php</a></p>
    <p>4. Есть php-класс A, напишите его функцию f($a), которая вызывает другую его функцию, название которое передано в
       виде строкового аргумента $a, а если такой функции в классе нет – выводит слово «error».</p>
    
    <?php
        require_once 'model/ClassA.php'
    ?>
    
    <?php
        $class = new ClassA();
        echo "</br> <strong>Method a():</strong> ";
        $class->f('a');
        echo "</br> <strong>Method m():</strong> ";
        $class->f('m');
    ?>

</section>