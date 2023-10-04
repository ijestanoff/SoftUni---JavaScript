function legendaryFarming (input) {
    let farming = {};
    let legendary = {shards : 0, fragments : 0, motes: 0};
    //let findArtefact = false;
    //while (true) {
        let materials = input.split(' ');
        for (let index=0; index<materials.length; index+=2) {
            let quantity = Number(materials[index]);
            let material = materials[index+1].toLowerCase();
            if (material != 'shards' && material != 'fragments' && material != 'motes') {
                if (!farming.hasOwnProperty(material)) {
                    farming[material] = 0;
                }
                farming[material] +=quantity;
            } else {
                legendary[material] +=quantity;
                if (legendary['shards'] >=250) {
                    console.log("Shadowmourne obtained!");
                    legendary['shards'] -= 250;
                    //findArtefact = true;
                    break;
                } else if (legendary['fragments'] >=250) {
                    console.log("Valanyr obtained!")
                    legendary['fragments'] -= 250;
                    //findArtefact = true;
                    break;
                } else if (legendary['motes'] >=250) {
                    console.log("Dragonwrath obtained!")
                    legendary['motes'] -= 250;
                    //findArtefact = true;
                    break;
                }
                //if (findArtefact) break;
            }
        }
        //if (findArtefact) break;
    //}
    
    let totalSortByValueKey = Object.entries(legendary).sort((a, b) => {
        if (b[1] - a[1] !== 0) { // First, sort by values in descending order
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]); // If values are equal, sort by keys in ascending order
    });
    legendary = Object.fromEntries(totalSortByValueKey);

    for (let [material, quantity] of Object.entries(legendary)){
        console.log(`${material}: ${quantity}`);
    }

    let keyValueArray = Object.entries(farming);
    keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
    farming = Object.fromEntries(keyValueArray);

    for (let [material, quantity] of Object.entries(farming)){
        console.log(`${material}: ${quantity}`);
    }
}

legendaryFarming ('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming ('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');