import 'package:dev_doctor/yaml.dart';
import 'package:flutter/foundation.dart';
import 'package:hive/hive.dart';
import 'package:http/http.dart' as http;
import 'package:yaml/yaml.dart';

import 'course.dart';

@immutable
class CoursesServer {
  final String name;
  final String url;
  final int index;
  final List<String> courses;

  CoursesServer({this.index, this.name, this.url, this.courses});
  CoursesServer.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        url = json['url'],
        index = json['index'],
        courses = json['courses'];

  static Future<CoursesServer> fetch({String url, int index}) async {
    if (url == null) url = Hive.box<String>('servers').getAt(index);
    var response = await http.get("$url/config.yml");
    var data = Map<String, dynamic>.from(loadYaml(response.body));

    data['url'] = url;
    data['index'] = index;
    data['courses'] = List<String>.from(data['courses']);
    return CoursesServer.fromJson(data);
  }

  Future<List<Course>> fetchCourses() => Future.wait(
      courses.asMap().map((index, value) => MapEntry(index, fetchCourse(index))).values);

  Future<Course> fetchCourse(int index) async {
    var course = courses[index];
    var response = await http.get("$url/$course/config.yml");
    var data = yamlMapToJson(loadYaml(response.body));

    data['server'] = this;
    data['index'] = index;
    data['slug'] = course;
    data['parts'] = List<String>.from(data['parts']);
    return Course.fromJson(data);
  }
}
