function radioCrystals (input) {
    function transport (num, thick) {
        console.log('Transporting and washing');
        num = Math.floor(num);
        if (num == thick) {
            console.log(`Finished crystal ${thick} microns`);
            return -1;
        }
        return num;
    }

    function order (material, target) {
        let minValue = material;
        let operation = 6;
        if (Math.floor(material / 4) >= target - 1) {
            minValue = material/4;
            operation = 1;
        }
        if ((Math.floor(material * 0.8) >= target - 1) && ( material * 0.8 < minValue) ){
            minValue = material * 0.8;
            operation = 2;
        }
        if ((Math.floor(material - 20) >= target - 1) && ( material - 20 < minValue) ){
            minValue = material - 20;
            operation = 3;
        }   
        if ((Math.floor(material - 2) >= target - 1) && ( material - 2 < minValue) ){
            minValue = material - 2;
            operation = 4;
        }  
        if (material + 1 == target) operation = 5;
        return operation;
    }

    function cut (material,target) {
        let currentMaterial = material;
        let count = 0;
        while (Math.floor(currentMaterial) > target - 1) { //Cut
            currentMaterial /= 4;
            if (Math.floor(currentMaterial) >= target - 1) {
                count++;
                material /= 4;
            }
        }
        if (count) console.log(`Cut x${count}`);
        material = transport(material,target);
        return material;
    }

    function lap (material,target) {
        let currentMaterial = material;
        let count = 0;
        while (Math.floor(currentMaterial) > target - 1) { //Lap
            currentMaterial *= 0.8;
            if (Math.floor(currentMaterial) >= target - 1) {
                count++;
                material *= 0.8;
            }
        }
        if (count) console.log(`Lap x${count}`);
        material = transport(material,target);
        return material;
    }

    function grind (material,target) {
        let currentMaterial = material;
        let count = 0;
        while (Math.floor(currentMaterial) > target - 1) { //Grind
            currentMaterial -= 20;
            if (Math.floor(currentMaterial) >= target - 1) {
                count++;
                material -= 20;
            }
        }
        if (count) console.log(`Grind x${count}`);
        material = transport(material,target);
        return material;
    }

    function etch (material,target) {
        let currentMaterial = material;
        let count = 0;
        while (Math.floor(currentMaterial) > target - 1) { //Etch
            currentMaterial -= 2;
            if (Math.floor(currentMaterial) >= target - 1) {
                count++;
                material -= 2;
            }
        }
        if (count) console.log(`Etch x${count}`);
        material = transport(material,target);
        return material;
    }

    let finishedCristal = input[0];
    for (let index = 1; index < input.length; index++) {
        let thickness = input[index];
        console.log(`Processing chunk ${thickness} microns`);

        let test = 0;
        while (thickness != -1) {
            test = order (thickness, finishedCristal);
            switch (test) {
                case (1):
                    thickness = cut(thickness,finishedCristal);
                    break;
                case (2):
                    thickness = lap(thickness,finishedCristal);
                    break;
                case (3):
                    thickness = grind(thickness,finishedCristal);
                    break;
                case (4):
                    thickness = etch(thickness,finishedCristal);
                    break;
                case (5):
                    console.log('X-ray x1');
                    console.log(`Finished crystal ${finishedCristal} microns`);
                    thickness = -1;
                    break;
                case (6):
                    thickness = -1;
                    break;
            }
        }
    }
}

//radioCrystals ([1375, 50000]);
radioCrystals ([1000, 4000, 8100]);