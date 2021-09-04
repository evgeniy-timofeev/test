<section id="array_flip">
    <h2>Array Flip JS</h2>
    <p><strong>HTML:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/view/section_flip.php" target="_blank">view/section_flip.php</a></p>
    <p><strong>JS:</strong> <a href="//github.com/evgeniy-timofeev/test/blob/master/assets/js/array_flip.js" target="_blank">assets/js/array_flip.js</a></p>
    <p>1. Напишите аналог php-функции array_flip на JavaSrcipt (ключи и значения меняются местами).</p>
    <div class="code">

				
					<pre>
	let arr = {
		a: 1,
		b: 2,
		с: 3,
	}

	function array_flip(arr) {
		let temp = {}

		for (let key in arr) {					
			temp[arr[key]] = key
		}

		return temp
	}
					</pre>

    </div>
    <div class="data">
        <p>Обработанные данные:</p>
        <code class="datumn">

        </code>

    </div>
</section>