import 'package:flutter/material.dart';

class LearnFutter extends StatefulWidget {
  const LearnFutter({super.key});

  @override
  State<LearnFutter> createState() => _LearnFutterState();
}

class _LearnFutterState extends State<LearnFutter> {
  bool isSwich = false;
  bool? ischeckbox = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('toi roi'),
        automaticallyImplyLeading: false,
        leading: IconButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            icon: const Icon(Icons.arrow_back_ios)),
        actions: [
          IconButton(
            onPressed: () {
              debugPrint('action');
            },
             icon:  const Icon(Icons.info_outline),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Image.asset(
                'images/6078b650748b8558d46ffb7f_Flutter app development.png'),
            const Divider(
              color: Colors.black,
            ),
            Container(
              margin: const EdgeInsets.all(10.0),
              padding: const EdgeInsets.all(10.0),
              color: Colors.blueGrey,
              width: double.infinity,
              child: const Center(
                child: Text(
                  "ahhihi",
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: isSwich ? Colors.green : Colors.blue,
                ),
                onPressed: () {
                  debugPrint("click vao nut data");
                },
                child: const Text("data")),
            OutlinedButton(
                onPressed: () {
                  debugPrint("click vao nut day");
                },
                child: const Text("day")),
            TextButton(
                onPressed: () {
                  debugPrint("click vao nut da");
                },
                child: const Text("da")),
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: () {
                debugPrint('this   is  the row');
              },
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(Icons.local_fire_department),
                  Text("row"),
                  Icon(Icons.local_fire_department),
                ],
              ),
            ),
            Switch(
                value: isSwich,
                onChanged: (bool newbool) {
                  setState(() {
                    isSwich = newbool;
                    print(isSwich);
                  });
                }),
            Checkbox(
                value: ischeckbox,
                onChanged: (bool? newbool2) {
                  setState(() {
                    ischeckbox = newbool2;
                  });
                }),
            Image.asset('images/a.png')
          ],
        ),
      ),
    );
  }
}
