import 'package:flutter/material.dart';
import 'package:flutter_application_1/learn_futtler.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "HomePage",
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.w500,
            color: Colors.white,
          ),
        ),
      ),
      body: Center(
          child: ElevatedButton(
              onPressed: () {
                Navigator.of(context)
                    .push(MaterialPageRoute(builder: (BuildContext) {
                  return const LearnFutter();
                }));
              },
              child: const Text("nav"))),
    );
  }
}





// body: const Center(
//           child: ElevatedButton(
//               onPressed: () {
//                 Navigator.of(context).push(MaterialPageRoute(
//                   builder: (BuildContext context) {
//                     return LearnFutter();
//                   },
//                 ));
//               },
//               child: const Text('learn flutter')),
//         ));
//   }