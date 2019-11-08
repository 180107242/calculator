function write_symbol(number) {
			// body...
			document.form.input.value += number;
		}
function clean() {
      // body...
      document.form.input.value = "";
    }
function res() {
      if (document.form.input.value) {
        document.form.input.value = eval(document.form.input.value);

      }
    }
 function isNumber() { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
function check_and_make_square() {
      // body...
      let f = document.form.input.value;
      if (isNumber(f)) {
        let s = square(f);
      }
    }

    
    function square(number) {
      // body...
      document.form.input.value = number * number;
    }

	
	function check_and_make_factorial() {
			// body...
			let f = document.form.input.value;
			if (isNumber(f)) {
				 result = factorial(f);
				 document.form.input.value = result;
			}else {document.form.input.value = false;} 
		}

		function factorial(number) {
			// body...
			if (number == 1) {
				return 1;
			}else{
				return number * factorial(number - 1);
			}
		}
