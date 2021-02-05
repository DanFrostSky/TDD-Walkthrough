var assert = require("chai").assert;
var expect = require("chai").expect;


class StringSplitter//Sel's solution
{
    splitString( stringToSplit )
    {
        var result = [];

        if( stringToSplit.length > 0 )
            result.push(stringToSplit);

        return result;
    }

}
/*class StringSplitter //My solution
{
    splitString( stringToSplit )
    {
        
        var result = [];
         result.push(stringToSplit);

        if( stringToSplit.length < 1)
            result = [];

        return result;
    }
    
}*/

describe('Splitting a string', function() {
    it('Input an empty string, return an empty array []', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = []
        var emptyString = "";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

    it('Input one string, return array with one item', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java"]
        var emptyString = "java";

        // act...
        var actualResult = cut.splitString( emptyString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

});