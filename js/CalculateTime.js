function calculateTime() {
            let dirt = parseInt(document.getElementById('dirt').value) || 0;
            let stone = parseInt(document.getElementById('stone').value) || 0;
            let wood = parseInt(document.getElementById('wood').value) || 0;
            
            if (dirt + stone + wood !== 70) {
                document.getElementById('result').innerHTML = "Error: Total must be 70 blocks.";
                return;
            }
            
            let fastestRetime = (dirt * 0.15) + (stone * 0.4) + (wood * 0.5) + (69 * 0.3) // Fastest time using Top Scores timing
            let fastestTime = fastestRetime + 0.7; // Fastest time using Hypixel timing

            document.getElementById('result').innerHTML = `
            <p> Fastest Possible Time: ${fastestTime.toFixed(2)}s </p>
            <p> w/ Top scores retiming: ${fastestRetime.toFixed(2)}s </p>
            `;
        }
