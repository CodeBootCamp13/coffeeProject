let minute = 1;

document.getElementById("addRows").addEventListener("click", function(event){
	
	minute = minute + 1;

	var rowCode = `
	
	<tr>
		<td id="minuteCount_${minute}"> Minute ${minute}</td>
		<td>
			<label for="roastingTemp"></label>
			<input type="text" id="roastingTemp_${minute}" name="roastingTemp" placeholder="Temperature of Roaster"> 
		</td>
		<td>
			<label for="roastPhase"> Roasting Phase:</label>
			<select name="roastPhase" id="roastPhase_${minute}">
				<optgroup label="Roasting Phase">
					<option value="developing">Developing</option>
					<option value="yellowing">Yellowing</option>
					<option value="browning">Browning</option>
					<option value="1Crack">1st Crack</option>
					<option value="2Crack">2nd Crack</option>
					<option value="endDrop">End/Drop</option>
				</optgroup>
			</select> 
		</td>
		<td>
			<label for="roastingNotes"></label>
			<textarea placeholder="Roasting Observations" rows="3" cols="80" id="roastingNotes_${minute}" name="roastingNotes"></textarea>
		</td>
	</tr>
	`;


	document.getElementById("newRow").innerHTML = document.getElementById("newRow").innerHTML + rowCode;

});        
