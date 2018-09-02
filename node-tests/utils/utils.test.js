const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () =>{
        it('should add two numbers', () => {
            var result = utils.add(33, 11);
        
            expect(result).toBe(44).toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    })
    
    describe('#square', () =>{
        it('should square a number', () => {
            var result = utils.square(5); 
        
            expect(result).toBe(25).toBeA('number');
        });
        
        it('should async square a number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16).toBeA('number');
                done();
            });
        });
    })

    
});



// it('should expect some values', () => {
//     //expect(12).toNotBe(11);
//     expect({name: 'Darshak'}).toEqual({name: 'Darshak'});
//     expect([2,3,4]).toInclude(3);
//     expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Darshak',
//         age: 24,
//         location: 'Charlotte'
//     }).toInclude({
//         age: 24
//     })
// });

it('should verify first and last names are set', () => {
    var user = {
        age: 24,
        location: 'Charlotte'
    };
    var resultUser = utils.setName(user, 'Darshak Mehta');
    expect(resultUser).toInclude({
        firstName: 'Darshak',
        lastName: 'Mehta'
    }).toBeA('object');

});