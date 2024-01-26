class Shape {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.setColor = color;
    }
}

class Circle extends Shape {
    constructor(text, textColor) {
        super(text, textColor);
        render()
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.setColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}


class Square extends Shape {
    constructor(text, textColor) {
        super(text, textColor);
        render()
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="10" width="200" height="200" fill="${this.setColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor) {
        super(text, textColor);
        render()
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,190 150,10 290,190" fill="${this.setColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

module.exports = Square, Triangle, Circle;