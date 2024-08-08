Stream<int> countStream(int value) async* {
  for (int i = 0; i <= value; i++) {
    yield i;
    
  }
}

void main()  {
  // Correctly listen to the stream and print each event
   print('a');
     countStream(10).listen((event) {
    print(event.toString());  // Convert each number to a string and print it
  });
  print('b');
}
