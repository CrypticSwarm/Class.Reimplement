Class.Reimplement
=======================

A Class.Refactor alternative. Removes the need for an extra wrapper that sets and unsets the 'previous' method which could overshadow an existing property if you aren't careful.

How to Use
------------

Pass in an object that is key/function pairs.  Reimplement will then run the function in the key/function(initializer) pair passing in the previous function(previousMethod). The initializer function should return a function(newMethod) that uses the previousMethod however it wants.

### Syntax

	myClass.reimplement({
		someExistingMethod: function(original){
			return function() {
				//do something before
				original();
				//do something after
			}
		}
	});

### Example

	var P = new Class({
			initialize: function() {
					console.log('initializing');
			},
			doStuff: function(){
					console.log('doing stuff!');
			}
	});

	var a = new P();
	a.doStuff();


	P.reimplement({
			
			doStuff: function(func){
					return function(){
							console.log('before doing stuff');
							func();
							console.log('after doing stuff');
					};
			}
			
	});

	a.doStuff();
