// JavaScript Document
//文件中定义数组工具对象，该工具对象有找到最大值的方法，
//与找到元素对应索引值的方法
var tool = new ArrayTool();
function ArrayTool() {
	
	//找到最大值
	this.getMax = function(arr){
		var max = arr[0];
			for (var i = 1; i < arr.length; i++) {
				if (max < arr[i]) {
					max = arr[i];
					}
			}
			return max;
	}
	//找到最小值
	this.getMin = function(arr) {
		var min = arr[0];
			for (var i = 1; i < arr.length; i++) {
				if (min > arr[i]) {
					min = arr[i];
					}
			}
			return min;
		}
		
	//找到对应元素索引值
	this.getFind = function(arr, target) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == target) {
				return i;
				}
		    }
			return -1;
		}
		
}