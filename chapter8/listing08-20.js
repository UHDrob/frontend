String.prototype.countChars = function (c) {
   var count=0;
   for (var i=0;i<this.length;i++) {
      if (this.charAt(i) == c)
         count++;
   }
   return count;
}
var msg = "Hello World";
alert(msg + "has" + msg.countChars("l") + " letter l's");
