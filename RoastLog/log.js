document.getElementById("addRows").addEventListener("click", function(event){
    
    var rowCode = `
    
    <tr>
    <td id="minuteCount"> Minute </td>
    <td>
        <label for="roastingTemp"></label>
        <input type="text" id="roastingTemp" name="roastingTemp" placeholder="Temperature of Roaster"> 
    </td>
    <td>
        <label for="roastPhase"> Roasting Phase:</label>
        <select name="roastPhase" id="roastPhase">
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
        <textarea placeholder="Roasting Observations" rows="3" cols="80" id="roastingNotes" name="roastingNotes"></textarea>
    </td>
</tr>

    `;


    
    document.getElementById("newRow").innerHTML = document.getElementById("newRow").innerHTML + rowCode;


    function increment (){
        let min = 0;
        let newMin = min + 1;
        console.log(newMin);
        document.getElementById("MinuteCount").innerText = newMin;
        console.log(newMin);
    };
    increment();

});        
