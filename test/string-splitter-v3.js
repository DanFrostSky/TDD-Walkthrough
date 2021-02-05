var assert = require("chai").assert;
var expect = require("chai").expect;


class StringSplitter//Sel's solution
{
    splitString( stringToSplit )
    {
        var result = [];

        if( stringToSplit.length > 0 )//puts inside if statement as only 
        {                              //want to do this for non-null string
            var tempResult = stringToSplit.split( ',' );
            if( tempResult.length > 0 )
                result = tempResult;//ironically this time should have had if
        }

        return result;
    }
}/*class StringSplitter //My solution
{
    splitString( stringToSplit )
    {
        var result = [];
        var divider = stringToSplit.split(",");

        if( stringToSplit.length > 0 )
            result = divider;//.split makes it into an array

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

    it('Input two comma seperated strings, return array with two items', function() {
        // arrange...
        var cut = new StringSplitter();
        var expectedResult = ["java", "python"]
        var inputString = "java,python";

        // act...
        var actualResult = cut.splitString( inputString );
        console.log( actualResult.length);

        // assert...
        assert.equal(actualResult.length, expectedResult.length );
        expect(actualResult).to.eql(expectedResult);
    });

});


/*class StringSplitter //Sel's solution
{
    splitString( stringToSplit )
    {
        var result = [];
        var tempResult = stringToSplit.split( ',' );
        
        console.log( tempResult );

        if( tempResult[0].length > 1 )
            result = tempResult;

        return result;
    }

}*/
