import { IoEyeOffOutline } from "react-icons/io5";

export function solarcalculatorfunction(ebill_actual, unitcharges_actual, basecharges_actual) {
  let unitsperKW_actual = "135";
  let roi_actual = "10";
  let subsidyobj={
    1:	30000,
    2:	60000,
    3:	78000,
    4:	78000,
    5:	78000,
    6:	78000,
    7:	78000,
    8:	78000,
    9:	78000,
    10:	78000
  }

  let max_total_costobj={
    1:  70000,
    2:	120000,
    3:	160000,
    4:	200000,
    5:	240000,
    6:	290000,
    7:	320000,
    8:	370000,
    9:	410000,
    10:	450000
  }

  let rooftop_areaobj={
    1:  130,
    2:	200,
    3:	300,
    4:	400,
    5:	550,
    6:	650,
    7:	750,
    8:	800,
    9:	900,
    10:	1000
  }


  let emission_savingsobj={
    1:  28,
    2:	57,
    4:	85,
    3:	113,
    5:	141,
    6:	170,
    7:	198,
    8:	226,
    9:	255,
    10:	283
  }



  function PMT(rate, nper, pv, fv, type) {
    type = type || 0;
    let pmt =
      (rate * (pv * Math.pow(1 + rate, nper) + fv)) /
      ((1 + rate * type) * (Math.pow(1 + rate, nper) - 1));
    return -pmt;
  }

  let unitsused =
    ((parseFloat(ebill_actual) - parseFloat(basecharges_actual)) /
    unitcharges_actual);
  let estimatedKW = Math.floor(
    parseFloat(unitsused) / parseFloat(unitsperKW_actual)
  );
  let maxKWreached=estimatedKW;
  if(estimatedKW>10)
  {
    estimatedKW=10
  }
  let max_total_cost = max_total_costobj[parseFloat(estimatedKW)]
  let subsidy=subsidyobj[parseFloat(estimatedKW)]
  let rooftoparea=rooftop_areaobj[parseFloat(estimatedKW)]
  let emissionsavings=emission_savingsobj[parseFloat(estimatedKW)]
  
  
  let newelectricitycharged =
    ((parseFloat(unitsused) -
      parseFloat(unitsperKW_actual) * parseFloat(estimatedKW)) *
      parseFloat(unitcharges_actual) +
    parseFloat(basecharges_actual));
  let maxemi = parseFloat(ebill_actual) - parseFloat(newelectricitycharged);
  let downpayment = 0.2 * (parseFloat(max_total_cost) - parseFloat(subsidy));
  let emiinterest =
    ((parseFloat(max_total_cost) -
      parseFloat(subsidy) -
      parseFloat(downpayment)) *
      parseFloat(roi_actual)) /
    1200;
  let tenure =
    Math.floor(
      ((parseFloat(max_total_cost) -
        parseFloat(subsidy) -
        parseFloat(downpayment)) /
        (parseFloat(maxemi) - parseFloat(emiinterest))) /
        12
    ) * 12;
  let emi = PMT(
    parseFloat(roi_actual) / 1200,
    tenure,
    -(
      parseFloat(max_total_cost) -
      parseFloat(subsidy) -
      parseFloat(downpayment)
    ),
    0,
    0
  );
  let totalcost = (parseFloat(emi) * parseFloat(tenure) + downpayment);
  let interestpaid = (
    parseFloat(totalcost) -
    (parseFloat(max_total_cost) - parseFloat(subsidy))
  );
  let solarKWinstaller = parseFloat(estimatedKW);
  let breakeventenure=Math.floor(parseFloat(totalcost)/parseFloat(emi))
  let yearlysavings=(parseFloat(ebill_actual)-parseFloat(newelectricitycharged))*12
  const returnobj = {
    units_used: Math.ceil(unitsused).toString(),
    units_per_KW: Math.ceil(unitsperKW_actual).toString(),
    estimated_KW: Math.ceil(estimatedKW).toString(),
    max_total_cost: Math.ceil(max_total_cost).toString(),
    subsidy: Math.ceil(subsidy).toString(),
    new_electricity_charges: Math.ceil(newelectricitycharged).toString(),
    max_emi:Math.ceil(maxemi).toString(),
    down_payment: Math.ceil(downpayment).toString(),
    roi:Math.ceil(roi_actual).toString(),
    tenure:Math.ceil(tenure).toString(),
    emi_interest:Math.ceil(emiinterest).toString(),
    emi: Math.ceil(emi).toString(),
    total_cost: Math.ceil(totalcost).toString(),
    interest_paid: Math.ceil(interestpaid).toString(),
    solar_KW_installer: Math.ceil(solarKWinstaller).toString(),
    breakeven_tenure:Math.ceil(breakeventenure).toString(),
    yearly_savings:Math.ceil(yearlysavings).toString(),
    rooftop_area:Math.ceil(rooftoparea).toString(),
    emission_savings:Math.ceil(emissionsavings).toString(),
    max_KW_reached:Math.ceil(maxKWreached).toString()
  };
  return returnobj;
}

