<section id="maping">
    <h2>Map drawing</h2>
    <p><strong>HTML:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_map.php" target="_blank">view/section_map.php</a></p>
    <p><strong>JS:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/assets/js/map.js" target="_blank">assets/js/map.js</a></p>
    <p>9. С использованием любой JS-библиотеки отображения и управления картами на html-странице напишите html-страницу
       с картой Москвы, на которую добавлена полупрозрачная красная зона, вокруг садового кольца. Границы зоны должны
       допускать возможность их изменения/редактирования. При каждом изменении границы должна пересчитываться и где-то
       отображаться либо площадь выделенной зоны, либо её периметр.</p>
    <div id="search_street_container" class="col-md-12">

        <div id="map_controls_options">
            <div class="clearfix">
                <div class="col-md-8">
                    <p>
                        <input type="button"
                               onclick="editMarkers();"
                               class="btn lf-btn"
                               value="Редактировать маркеры"
                               id="edit-markers">
                        <input type="button"
                               onclick="calculateResult();"
                               class="btn lf-res-btn"
                               value="Подсчитывать"
                               id="calculate-result">
                    </p>
                </div>
            </div>
            <div id="map_tools"></div>
            <div id="areaMap"></div>
        </div>
    </div>
</section>