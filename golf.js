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

var tree = DecisionTree({
	title: 'Should I play golf today?',
	outcomeKey: 'play',
	emptySet: {Yes: 0, No: 0}
});
tree.train(GolfData);
tree.render();