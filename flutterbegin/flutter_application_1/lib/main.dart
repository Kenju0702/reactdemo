import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_application_1/home_page.dart';
import 'package:flutter_application_1/product_page.dart';
import 'package:flutter_application_1/user_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
     theme: ThemeData(
    primaryColor: Colors.green, // Màu chính cho ứng dụng
    appBarTheme: const AppBarTheme(
    backgroundColor: Colors.green, // Đặt màu cho AppBar cụ thể
  ),
  floatingActionButtonTheme: const FloatingActionButtonThemeData(
    backgroundColor: Colors.green, // Đặt màu cho FloatingActionButton cụ thể
  ),
),

      home: const RootPage(),
    );
  }
}

class RootPage extends StatefulWidget {
  const RootPage({super.key});

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  int currentPage=0;
  List<Widget>pages=const[
   HomePage(),
   ProfilePage(),
   productPage()
  ];
  @override
  Widget build(BuildContext context) {

    return Scaffold(
    
      body: pages[currentPage],
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          debugPrint(" CLICK NUT +");
          currentPage++;
          
        },
        child: const Icon(Icons.add),
        // Màu của nút này cũng được lấy từ primarySwatch
      ),
        bottomNavigationBar: NavigationBar(
          destinations: const[
            NavigationDestination(icon: Icon(Icons.home), label: "Home"),
            NavigationDestination(icon: Icon(Icons.person_2), label: "user"),
            NavigationDestination(icon: Icon(Icons.production_quantity_limits), label: "product")
          ],
          onDestinationSelected:(int index){
            setState(() {
              currentPage=index;
              debugPrint('Current page: $currentPage');

            });
          } ,
          selectedIndex: currentPage,
        ),
    );
  }
}
