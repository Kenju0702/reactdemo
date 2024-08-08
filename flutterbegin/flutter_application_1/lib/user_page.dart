import 'package:flutter/material.dart';

const int itemCount = 20; // Đổi tên biến để rõ ràng hơn

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: itemCount, // Thêm thuộc tính itemCount
      itemBuilder: (BuildContext context, int index) {
        return ListTile(
          title: Text('Item ${index + 1}'),
          leading: const Icon(Icons.person),
          trailing: const Icon(Icons.select_all),
          onTap:(){
            debugPrint('Item ${index + 1} selected');
          } ,
        );
      },
    );
  }
}
