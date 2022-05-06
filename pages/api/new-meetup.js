// /api/mew-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://MeetupCluster:clusterpassword@cluster0.1ypnb.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    console.log("1");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result, "2");
    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
