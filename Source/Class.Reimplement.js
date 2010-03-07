/*
---
script: Class.Reimplement.js

description: A Class.Refactor alternative. Removes the need for an extra wrapper that sets and unsets the 'previous' method which could overshadow an existing property if you aren't careful.

license: MIT-style

authors:
- Perrin Westrich (CrypticSwarm)

requires:
  core/1.2.4: Class

provides: [Class.Reimplement]

...
*/
Class.prototype.reimplement = function(obj){
	for(var p in obj) this.implement(p, obj[p](this.prototype[p]));
}
