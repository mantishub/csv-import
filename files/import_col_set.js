function checkFields() {
	var allDropdowns = document.getElementsByName("columns[]");
	var dropdownArray = [];
	var dupeArray = [];
	var dupeCnt = 0;
	for(var x = 0; x < allDropdowns.length; x++) {
		var currentDropdown = allDropdowns[x].options[allDropdowns[x].options.selectedIndex];
		if (dropdownArray.indexOf(currentDropdown.value) < 0) {
			dropdownArray[x] = currentDropdown.value;
		} else if (currentDropdown.value != 'ignore_column') {
			dupeArray[dupeCnt] = currentDropdown.text;
			dupeCnt++;
		}
	}
	if (dupeArray.length > 0) {
		var t_btn = document.getElementById('importForm');
		var t_msg = t_btn ? t_btn.getAttribute('data-duplicate-message') : '';
		alert( t_msg + "\r\n\r\n" + dupeArray.toString().replace(/,/g, "\r\n") );
		return false;
	} else {
		return true;
	}
}

document.getElementById('importForm').addEventListener('click', function(e) {
	if( !checkFields() ) {
		e.preventDefault();
	}
});
