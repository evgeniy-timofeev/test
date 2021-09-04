<section id="array_flip">
    <h2>Array Flip JS</h2>
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