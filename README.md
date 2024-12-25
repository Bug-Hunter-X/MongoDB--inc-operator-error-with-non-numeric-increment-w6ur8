# MongoDB $inc operator error with non-numeric increment
This example demonstrates an incorrect usage of MongoDB's `$inc` operator, where a non-numeric value is provided for incrementing a field. This leads to an error in the update operation. The solution shows the correct way to use `$inc` with numeric values.

## Bug
The original code attempts to increment the `fieldName` by the string value 'abc'.

## Solution
The solution demonstrates the correct usage of `$inc`, providing a numeric value to increment the field.