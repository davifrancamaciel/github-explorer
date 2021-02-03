import { firebaseDatabase } from "../utils/firebaseUtils";

export default class FirebaseService {
  static getDataList = (nodePath: any, callback: any, size = 10) => {
    let query = firebaseDatabase.ref(nodePath).limitToLast(size);
    query.on("value", (dataSnapshot) => {
      let items: any = [];
      dataSnapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        item["key"] = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });

    return query;
  };
}
