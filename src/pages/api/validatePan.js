export default async function handler(req, res) {
    if (req.method == "POST") {
      console.log(req.body);
      const panno = req.body.panNumber;
      if(panno.length<10 && panno.length>10)  {
        return res.status(202).json({ success: false, message: "Invalid PAN number" });
      }
  
      try {
        let request = await fetch(
          `https://api-preproduction.signzy.app/api/v3/pan-extensive/premium`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.API_AUTH_TOKEN,
            },
            body: JSON.stringify({
                panNumber: req.body.panNumber,
                getStatusInfo: true,
            }),
          }
        );
        const data = await request.json();
        console.log(data);
        //console.log(data?.result?.isIndividual , data?.result?.isValid);
        
  
        res.setHeader("Access-Control-Allow-Origin", "*");
        if (!data?.result?.isIndividual && !data?.result?.isValid)
          res.status(200).json({ success: false, data: data });
        else throw new Error("not found");
        
      } catch (e) {
        res.status(201).json({ success: false, message: e });
      }
    } else {
      res.status(202).json({ success: false, message: "Method not allowed" });
    }
  }
  