import 'package:dev_doctor/models/item.dart';
import 'package:enum_to_string/enum_to_string.dart';

enum VideoSource { youtube, url }

class VideoPartItem extends PartItem {
  final VideoSource source;
  final String url;

  VideoPartItem({this.source, this.url, String name, String description, int index})
      : super(name: name, description: description, index: index);
  @override
  VideoPartItem.fromJson(Map<String, dynamic> json)
      : url = json['url'],
        source = EnumToString.fromString(VideoSource.values, json['source']),
        super.fromJson(json);
  get src {
    if (source == VideoSource.youtube)
      return Uri.https(
        'www.youtube-nocookie.com',
        'embed/${url}',
      ).toString();
    else
      return url;
  }
}
