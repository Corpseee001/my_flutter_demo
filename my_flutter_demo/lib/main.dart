import 'package:flutter/material.dart';

void main() {
  runApp(const DemoApp());
}

class DemoApp extends StatelessWidget {
  const DemoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Framework Demo',
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String userInput = "";
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Mobile App Framework Demo'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              "This program demonstrates building a mobile application using the Flutter framework. Flutter allows cross-platform development using a single codebase.",
              style: TextStyle(fontSize: 14),
            ),
            const SizedBox(height: 20),

            // Input box
            TextField(
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: "Enter your name",
              ),
              onChanged: (value) {
                setState(() {
                  userInput = value;
                });
              },
            ),

            const SizedBox(height: 16),

            // Greeting button
            ElevatedButton(
              onPressed: () {
                if (userInput.isNotEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content:
                          Text("Hello, $userInput! This app is built with Flutter."),
                    ),
                  );
                }
              },
              child: const Text("Greet Me"),
            ),

            const SizedBox(height: 20),

            // Counter demo
            const Text(
              "Simple Counter Example:",
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),

            Text(
              "$counter",
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      counter++;
                    });
                  },
                  child: const Text("+1"),
                ),
                const SizedBox(width: 12),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      counter = 0;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                  child: const Text(
                    "Reset",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
