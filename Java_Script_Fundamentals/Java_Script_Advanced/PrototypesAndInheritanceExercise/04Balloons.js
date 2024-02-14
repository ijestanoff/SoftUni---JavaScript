function balloons () {
    class Balloon {
        constructor (color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor (color, gasWeight, ribbonColor, ribbonLength) {
            super (color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this.ribbon = {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

        get ribbon () {
            return this._ribbon;
        }

        set ribbon (data) {
            this._ribbon = data;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor (color, gasWeight, ribbonColor, ribbonLength, text) {
            super (color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text () {
            return this._text;
        }

        set text (data) {
            this._text = data;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}