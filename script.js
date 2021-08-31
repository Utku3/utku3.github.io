const calculateButton = document.getElementById("bestWorstAo5Button");
calculateButton.onclick = function() {
    const dAo5 = document.getElementById("desiredAo5");

    //Checking if the Desired Ao5 Button exist or not in order to stop duplacting the HTML.
    if(typeof(dAo5) != 'undefined' && dAo5 != null){
        console.log("You already calculated the possible Ao5's.");
    } else{
    const t1 = document.getElementById('time1').value;
    const t2 = document.getElementById('time2').value;
    const t3 = document.getElementById('time3').value;
    const t4 = document.getElementById('time4').value;

    const maxAo5List = [Number(t1),Number(t2),Number(t3),Number(t4)];
    const minAo5List = [Number(t1),Number(t2),Number(t3),Number(t4)];

    maxAo5List.sort(function(a, b){return a - b});
    minAo5List.sort(function(a, b){return a - b});

    maxAo5List.splice(0,1);
    minAo5List.splice(3,1);

    let maxMean = (maxAo5List[0]+maxAo5List[1]+maxAo5List[2])/3;
    let minMean = (minAo5List[0]+minAo5List[1]+minAo5List[2])/3;

    console.log(maxAo5List);
    console.log(minAo5List);

    console.log(maxMean);
    console.log(minMean);

    const bestAo5 = document.getElementById("bestAo5");
    bestAo5.innerHTML = "Best possible Ao5: " + minMean.toFixed(2);
    const worstAo5 = document.getElementById("worstAo5");
    worstAo5.innerHTML = "Worst possible Ao5: " + maxMean.toFixed(2);

    const div = document.createElement('div');

    div.className = 'desiredDiv';
  
    div.innerHTML = `
    </br>
    <label class="desiredAo5Label" for="time">Desired Ao5:</label>
    <input id="desiredAo5" type="number" step="any" value="">
    </br>
    <button id="desiredAo5Button">Calculate</button>
    </br>
    <p id="neededTimeLabel"></p>
    `;
  
    document.getElementById('desired').appendChild(div);
    const desiredAo5Button = document.getElementById("desiredAo5Button");
    desiredAo5Button.onclick = function() {
        const desiredAo5 = document.getElementById("desiredAo5").value;
        if (Number(desiredAo5)>Number(maxMean) || Number(minMean)>Number(desiredAo5)) {
            const neededTimeLabel = document.getElementById("neededTimeLabel");
            neededTimeLabel.innerHTML = "You can't achieve the desired Ao5";
            //alert("You can't achieve the desired Ao5");
        }
        else {
            const neededTime = ((Number(desiredAo5)*3)-Number(maxAo5List[0])-Number(maxAo5List[1]));
            const neededTimeLabel = document.getElementById("neededTimeLabel");
            neededTimeLabel.innerHTML = "You need to get " + neededTime.toFixed(2) + " to achieve desired Ao5.";
            //alert("You need to get " + neededTime.toFixed(2) + " to achieve desired Ao5.");
        }
    }

};
};