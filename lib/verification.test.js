const { lengthVerify, hexVerify, colorVerify, } = require('./verification.js')

Describe('Verify', () => {
    describe('length', () => {
        it('should verify that the input character is 3 characters long or less')
        response = 'abc'
        
        expect(lengthVerify()).tobe();
    });
});