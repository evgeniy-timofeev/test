<section id="control">
    <h2>Controls</h2>
    <p><strong>HTML:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_controls.php" target="_blank">view/section_controls.php</a></p>
    <p><strong>JS:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/assets/js/controls.js" target="_blank">assets/js/controls.js</a></p>
    <p>8. Тест для проверки для проверки владения control-ами (кнопки, закладки, диалоговые окна, разделители).</p>
    <ol>
        <li>Требуется написать html+css+js код страницы, разделенной на три части (div-а): слева панель на всю высоту
            страницы и 30% ширины, справа две горизонтальные части на 70% ширины и 50% высоты.
        </li>
        <li>Пользователю должна быть доступна возможности изменения ширины левой части и высоты верхней/нижней путем
            перетаскивания границ вправо/влево и вверх/вниз соответственно (использовать controlsplitter).
        </li>
        <li>На всю ширину и высоту нижней часть должен быть развернут контрол с двумя закладками (использовать
            controltabs) с названиями «один», «два».
        </li>
        <li>При переключении на закладку «один» должен открываться элементtextarea-а, редактирование которого приводит к
            изменению содержимого div-а левой части страницы.
        </li>
        <li>При переключении на закладку «два» должен открываться элементtextarea-а, редактирование которого приводит к
            изменению содержимого div-а верхней части страницы.
        </li>
        <li>Допустимо использовать jquery-ui или любые другие известные JS-библиотеки, реализующие splitter-ы и
            tabber-ы.
        </li>
    </ol>
    <div class="controls">
        <div class="left-side resizable resizable1">
            <p>Left Side</p>
        </div>
        <div class="right-side right-side-up resizable resizable2">
            <p>Up Side</p>
        </div>
        <div class="right-side">
            <div class="tabs">
                <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
                <label for="tab-btn-1">Один</label>
                <input type="radio" name="tab-btn" id="tab-btn-2" value="">
                <label for="tab-btn-2">Два</label>
                <div id="content-1">
                    <textarea id="changer1" placeholder=""></textarea>
                </div>
                <div id="content-2">
                    <textarea id="changer2" placeholder=""></textarea>
                </div>
            </div>
        </div>
    </div>
</section>