



function showSensationsVisual() {
    document.getElementById("sensations-description-visual").style.display = 'block';
    document.getElementById("button-sensations-description").innerHTML = document.getElementById("button-sensations-description").innerHTML.replace('+', '-');

    }

function hideSensationsVisual() {
    document.getElementById("sensations-description-visual").style.display = 'none';
    document.getElementById("button-sensations-description").innerHTML = document.getElementById("button-sensations-description").innerHTML.replace('-', '+');

}




function showSensationsSmell() {
    document.getElementById("sensations-description-smell").style.display = 'block';
    }

function hideSensationsSmell() {
        document.getElementById("sensations-description-smell").style.display = 'none';
    }
    
    
function showSensationsPalate() {
        document.getElementById("sensations-description-palate").style.display = 'block';
        }
 function hideSensationsPalate() {
            document.getElementById("sensations-description-palate").style.display = 'none';
        }
        
function showSensationsTouch() {
            document.getElementById("sensations-description-touch").style.display = 'block';
            }
function hideSensationsTouch() {
                document.getElementById("sensations-description-touch").style.display = 'none';
            }
            
function showSensationsListen() {
                document.getElementById("sensations-description-listen").style.display = 'block';
                }
function hideSensationsListen() {
                    document.getElementById("sensations-description-listen").style.display = 'none';
                }