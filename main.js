var GolfData = [
	{outlook: 'Rainy', temp: 'Hot', humidity: 'High', windy: 'False', play: 'No'},
	{outlook: 'Rainy', temp: 'Hot', humidity: 'High', windy: 'True', play: 'No'},
	{outlook: 'Overcast', temp: 'Hot', humidity: 'High', windy: 'False', play: 'Yes'},
	{outlook: 'Sunny', temp: 'Mild', humidity: 'High', windy: 'False', play: 'Yes'},
	{outlook: 'Sunny', temp: 'Cool', humidity: 'Normal', windy: 'False', play: 'Yes'},
	{outlook: 'Sunny', temp: 'Cool', humidity: 'Normal', windy: 'True', play: 'No'},
	{outlook: 'Overcast', temp: 'Cool', humidity: 'Normal', windy: 'True', play: 'Yes'},
	{outlook: 'Rainy', temp: 'Mild', humidity: 'High', windy: 'False', play: 'No'},
	{outlook: 'Rainy', temp: 'Cool', humidity: 'Normal', windy: 'False', play: 'Yes'},
	{outlook: 'Sunny', temp: 'Mild', humidity: 'Normal', windy: 'False', play: 'Yes'},
	{outlook: 'Rainy', temp: 'Mild', humidity: 'Normal', windy: 'True', play: 'Yes'},
	{outlook: 'Overcast', temp: 'Mild', humidity: 'High', windy: 'True', play: 'Yes'},
	{outlook: 'Overcast', temp: 'Hot', humidity: 'Normal', windy: 'False', play: 'Yes'},
	{outlook: 'Sunny', temp: 'Mild', humidity: 'High', windy: 'True', play: 'No'}
];

console.log("GOLF DATA");
var split = Entropy.chooseSplitPoint(GolfData, 'play', {Yes: 0, No: 0});
console.log(split);
var tree = DecisionTree(GolfData, 'play', {Yes: 0, No: 0});
tree.init();
var target = document.getElementById('golf-tree');
tree.render(target);

console.log("BUILDING INSPECTIONS DATA");
getData({}, 10000, function(dataSet){
	console.log(dataSet.length + ' data points.');
	var outcomeKey = 'inspection_status';
	var emptySet = {CLOSED: 0, FAILED: 0};
	var split = Entropy.chooseSplitPoint(dataSet, outcomeKey, emptySet);
	console.log(split);
	var tree = DecisionTree(dataSet, outcomeKey, emptySet);
	tree.init();
	var target = document.getElementById('buildings-tree');
	tree.render(target);
});