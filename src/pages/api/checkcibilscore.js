export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);

    try {
      let request = await fetch(
        `https://api-preproduction.signzy.app/api/v3/bureau/equifax-lite`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.API_AUTH_TOKEN,
          },
          body: JSON.stringify({
            phoneNumber: req.body.phoneNumber,
            name: req.body.name,
          }),
        }
      );
      const data = await request.json();
      //console.log(data);

      res.setHeader("Access-Control-Allow-Origin", "*");
      if (data.message === "Success")
        res.status(200).json({ success: true, data: data });
      else throw new Error("not found");
      
    } catch (e) {
      res.status(201).json({ success: false, message: e });
    }
  } else {
    res.status(202).json({ success: false, message: "Method not allowed" });
  }
}
