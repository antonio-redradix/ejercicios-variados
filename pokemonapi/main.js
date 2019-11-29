class Shape{
    constructor(width,heigth){
        this.width=width
        this.heigth=heigth
    }
    getArea(){}
}
class Rect extends Shape{
    constructor(width,heigth){
        super(width,heigth)
    }
    getArea(Rect){
        let area=this.width*this.heigth
        return area
    }
}
class Triangle extends Shape{
    constructor(width,heigth){
        super(width,heigth)
    }
    getArea(Triangle){
        let area=this.width*this.heigth/2
        return area
    }
}
let rect = new Rect(10,20)
console.log(rect.getArea())
let triangle = new Triangle(20,10)
console.log(triangle.getArea())