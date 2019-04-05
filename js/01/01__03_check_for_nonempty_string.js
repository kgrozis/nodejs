// Verify that a variable is defined, is a string, and is not empty

// Tests if variable is a string
// Tests if string's length isn't longer than 0
if (typeof unknownVariable === 'string' && unknownVariable.length > 0)

// Tests literal
if (((typeof unknownVariable != 'undefined' && unknownVariable) && unknownVariable.length() > 0) && typeof unknownVariable.valueOf() == 'string')