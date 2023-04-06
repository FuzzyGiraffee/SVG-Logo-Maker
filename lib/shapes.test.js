const shapes = require('./shapes.js')

describe('shapes', () => {
    describe('shapes triangle', () => {
        it('should write a svg that makes a triangle and the fill to blue')

        const shape = new Triangle();
        shape.setColor("blue");

        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
    describe('shape circle', () => {
        it('should write a svg that makes a circle and the fill to red')

        const shape = new Circle ();
        shape.setColor("red");

        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>')
    });
    describe('shape rectangle', () => {
        it('should write a svg that makes a square and the fill to bisque')

        const shape = new Square ();
        shape.setColor("bisque");

        expect(shape.render()).toEqual('<rect width="300" height="200" fill="bisque" />')
    });
});