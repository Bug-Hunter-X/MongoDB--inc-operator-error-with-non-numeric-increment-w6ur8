```javascript
// Incorrect usage of $inc operator in MongoDB update operation.
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {fieldName: 'abc'}});
```