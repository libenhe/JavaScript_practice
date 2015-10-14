//为String新增toCharArray()和reverse() 方法


//把字符串转化成数组
	String.prototype.toCharArray = function() {
		var arr = new Array();
		for (var index = 0; index < this.length; index++) {
			arr[index] = this.charAt(index);
			}
			return arr;
		}
		
		
//字符串反转
	String.prototype.reverse = function() {
		var arr = this.toCharArray();  //利用转化为数组
		arr.reverse();//利用数组的反转reverse()方法
		return arr.join("");//利用数组的join()方法
		}