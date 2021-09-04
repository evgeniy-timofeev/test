<section id="control">
    <h2>Controls</h2>
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
    <div id="firstDivOnPage"><p><span></span></p></div>
    <div class="controls">
        <div class="left-side resizable">
            <p>TEST</p>
            <span id="resizableY" class="bottom-resize"></span>
            <span id="resizableX" class="right-resize"></span>
        </div>
        <div class="right-side">
            <p>TEST</p>
        </div>
        <div class="right-side">
            <p>TEST</p>
        </div>

        <div class="tabs">
            <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
            <label for="tab-btn-1">Вкладка 1</label>
            <input type="radio" name="tab-btn" id="tab-btn-2" value="">
            <label for="tab-btn-2">Вкладка 2</label>
            <div id="content-1">
                <textarea id="changed" placeholder=""></textarea>
            </div>
            <div id="content-2">
                <textarea id="editDiv" placeholder=""></textarea>
            </div>
        </div>

    </div>
</section>