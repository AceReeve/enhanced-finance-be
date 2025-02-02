import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();

  // Insert data into 'gl' collection
  const vendorNameData = [
    { name: 'A DAVID CONSTRUCTION SUPPLY' },
    { name: ' LOGICAL MINDS SECURITY & INVESTIGATION AGENCY INC' },
    { name: 'A. SANCHEZ, L. DAVID AND COMPANY' },
    { name: 'A.C.G MERCHANDISING, INC' },
    { name: 'ACERO STEEL & GENERAL MERCHANDISE' },
    { name: 'AERO-SEAL INDUSTRIAL TECHNOLOGIES, INC.' },
    { name: 'ALBERT JOSEPH M. BONUS' },
    { name: 'ALBERTO JOVEN JR.' },
    { name: 'ALCON HEAVY PARTS SUPPLY' },
    { name: 'ALICE K. PANIQUE' },
    { name: 'ALL SYSTEMS LOGISTICS, INC.' },
    { name: 'ALL TRANSPORT NETWORK INC.' },
    { name: 'AMBERVILLE INDUSTRIAL CORP.' },
    { name: 'AMD AIR COMPRESSORS & GENERATORS, INC.' },
    { name: 'AMP PACKAGING SUPPLIES TRADING' },
    { name: 'AMSTAR PROCESS TECHNOLOGY INC.' },
    { name: 'ANTRAK PHILIPPINES TRANSPORT SOLUTIONS CORP.' },
    { name: 'ANVAYA COVE BEACH & NATURE CLUB' },
    { name: 'APL LOGISTICS PHILS., INC.' },
    { name: 'ARCHEL PRINTING SERVICES' },
    { name: 'ARNEL DAVID' },
    { name: 'ASALUS CORPORATION' },
    { name: 'ASPAC INTERNATIONAL, INC.' },
    { name: 'ASSISTCO ENERGY AND INDUSTRIAL CORP.' },
    { name: 'ASSOCIATED FREIGHT CONSOLIDATORS, INC.' },
    { name: 'ASUMCO PAINT AND HARDWARE CENTER' },
    { name: 'ATLANTIC OCEAN LINE PHILIPPINES INC.' },
    { name: 'AUREUM STELLA PACKAGING SUPPLIES TRADING' },
    { name: 'AVESCO MARKETING CORPORATION' },
    { name: 'AWECA CARGO SERVICES, INC.' },
    { name: 'BALER INDUSTRIAL CORPORATION' },
    { name: 'BANAWE BOYS REPAIR SHOP' },
    { name: 'BDL GENERAL MERCHANDISE' },
    { name: 'BDO' },
    { name: 'BEN LINE AGENCIES PHILS., INC' },
    { name: 'BETAFOAM CORPORATION' },
    { name: 'BOXFIELD PACKAGING PRODUCTS' },
    { name: 'BPI MASTERCARD' },
    { name: 'BSI GROUP PHILIPPINES, INC.' },
    { name: "	BUENA'S INK REFILLING STATION	" },
    { name: 'C.H ROBINSON PHILIPPINES INC.' },
    { name: 'CALFURN MFG. PHILIPPINES, INC.' },
    { name: 'CAPAS HEALTHCARE DIAGNOSTIC LABORATORY' },
    { name: 'CAPITAL INDUSTRIES INC' },
    { name: 'CARL OLA ANDREAS LUNDIN' },
    { name: 'CARWORLD FUSO PAMPANGA, INC.' },
    { name: 'CBZ MOTORCYLE PARTS AND ACCESSORIES' },
    { name: 'CENTRAL CERAMIC CENTER' },
    { name: 'CENTURY CHEMICALS CORPORATION' },
    { name: 'CERTICON-CERTIFIED PEST CONTROL SERVICES' },
    { name: 'CERTIFIED PEST CONTROL SERVICES' },
    { name: 'CERTIPEST APPLICATOR & FUMIGATION SERVICES' },
    { name: 'CEVA LOGISTICS PHILIPPINES INC.' },
    { name: 'CHRISTINE P. TARRAYO' },
    { name: 'CITYLAND CONDO 10 (TOWER I AND TOWER II) INC.' },
    { name: 'CMA CGM PHILIPPINES INC.' },
    { name: 'COLORSTEEL SYSTEMS CORPORATION' },
    { name: 'COMPU-PRINT MACHINERIES CORP.' },
    { name: 'CONSOLIDATED ADHESIVES INC.' },
    { name: 'CONTROL UNION PHILIPPINES, INC.' },
    { name: 'CONVERGE ICT SOLUTIONS INC.' },
    { name: 'COOL TRUCKS TRANSPORTATION SERVICES' },
    { name: 'CORRUGATED FIBERBOARDS OPC' },
    { name: 'CORTES TRADING' },
    { name: 'CRL CALABARQUEZ CORPORATION' },
    { name: 'CRYSTAL LIQUID PHILIPPINES INCORPORATION' },
    { name: 'CROCODILE TAPE & CO., INC.' },
    { name: 'CSM PHILIPPINES INC.' },
    { name: "	D' ARANETA PLASTIC CENTER	" },
    { name: 'DANNY YU' },
    { name: 'DELSAN OFFICE SYSTEMS CORPORATION' },
    { name: 'DEXTERTON CORPORATION' },
    { name: 'DP WORLD PHILIPPINES LOGISTICS, INC.' },
    { name: 'DR.EDGAR CHYRUSS D. CRISOSTOMO' },
    { name: 'DSV AIR AND SEA, INC.' },
    { name: "	DURU'S INDUSTRIES CORPORATION	" },
    { name: 'EA INTERTRADE GENERAL MERCHANDISING, INC.' },
    { name: 'EASTRANS LINE PHILS., INC.' },
    { name: 'ECHEM ENVIRONMENTAL TESTING LABORATORY CORP.' },
    { name: 'EDGE AUTO SUPPLY, CAR ACCESSORIES & SERVICES' },
    { name: 'ENRICO BAYANI' },
    { name: 'ENVIROCARE MGT. PRECISION, INC.' },
    { name: 'ERICA SALANGSANG' },
    { name: 'ERIKS RUBBERTECH AND INDUSTRIAL SERVICES INC' },
    { name: 'ETERNITY HARDWARE & ELECTRICAL SUPPLY' },
    { name: 'EVERGREEN SHIPPING AGENCY PHILS. CORP' },
    { name: 'EXPEDITORS PHILIPPINES, INC' },
    { name: 'EXPOLANKA FREIGHT (PHILIPPINES) INCORPORATED' },
    { name: 'EZ-IT DIGITAL PRINTING SERVICES' },
    { name: 'F.P MANALO MACHINE SHOP' },
    { name: 'FEDERAL EXPRESS PACIFIC, LLC' },
    { name: 'FIL-AMERICAN HARDWARE CO. INC' },
    { name: "	FINA'S GAS STATION	" },
    { name: 'FIRST IMPERIAL CARGO, INC.' },
    { name: 'FIRST PHILIPPINE SCALES INC.' },
    { name: 'FIVE STAR EUROPE PAPER SYSTEMS, INC.' },
    { name: 'GAMALIEL PARAZO' },
    { name: 'GARBES DIZON & SONS INC' },
    { name: 'GLOBE TELECOM INCORPORATED' },
    { name: 'GOLDEN SUN SECURITY AGENCY, INCORPORATED' },
    { name: 'GREENCHEM CHEMICAL SUPPLY' },
    { name: 'GUANZON MERCHANDISING CORP' },
    { name: 'GUIJUAN GO' },
    { name: 'GVER AIRCON MAINTENANCE SERVICES' },
    { name: 'HELLMANN WORLDWIDE LOGISTICS PHILIPPINES INC.' },
    { name: 'HONOUR LANE LOGISTICS PHILIPPINES INC.' },
    { name: 'HOPE ADHESIVE PAPER PRODUCTS INC.' },
    { name: 'HORNITEX PHILS. INC.' },
    { name: 'HSBC FAO MAERSK LOGISTICS AND SERVICES' },
    { name: 'IMEX TRUCKING SERVICES' },
    { name: 'INTEGRATED SOLUTIONS TECHNOLOGY INC.' },
    { name: 'INTERLOGIC ENGINEERING TECHNOLOGY' },
    { name: 'INTERNATIONAL CONSOLIDATOR PHILIPPINES INC.' },
    { name: 'JAMP-R KILN AND DRYER ENTERPRISES' },
    { name: 'JAN A TRADING' },
    { name: 'JAY-JAY CAR AIRCON REPAIR SHOP' },
    { name: 'JBM MARILAO ALUMINUM CORPORATON' },
    { name: 'JEFFERSON C. PELAYO' },
    { name: "	JEMARA INT'L FREIGHT SERVICES INC.	" },
    { name: 'JERIC V. PINEDA' },
    { name: 'JHAYEN MEDICAL LABORATORY AND X-RAY SERVICES' },
    { name: 'JMMC POWDER COATING' },
    { name: 'JN 146 TRADING CORPORATION' },
    { name: 'JNEL VARIETY STORE' },
    { name: 'JOBEREX HEAVY EQUIPMENT PARTS AND SUPPLY' },
    { name: 'JOHN LESTER C. DAVID' },
    { name: 'JONNAS Z. BUAN' },
    { name: 'JOSE MARTIN PANIQUE' },
    { name: 'JOSEPH B. MATITU' },
    { name: 'JTP MEDICAL X-RAY SERVICES' },
    { name: 'JUNEAU INDUSTRIAL CORPORATION' },
    { name: 'KABUHAYAN NAMIN INCORPORATED' },
    { name: 'KARGOSMART GLOBAL CORP.' },
    { name: 'KELOTS MOTOR SPORT IMAGES' },
    { name: 'KENAS TECHNOLOGY CORPORATION' },
    { name: 'KIAM KEE HARDWARE CO., INC.' },
    { name: 'KIMUEL V. SUYAT' },
    { name: 'KLH KINGS LUMBER & HARDWARE CORPORATION' },
    { name: 'LIMRAM BUSINESS VENTURES, INC.' },
    { name: 'LIQUIGAZ PHILIPPINES CORPORATION' },
    { name: 'LOGICAL MINDS SECURITY & INVESTIGATION AGENCY INC.' },
    { name: 'MANILA WATER COMPANY , INC.' },
    { name: "	MANOLO'S METAL WORKS	" },
    { name: 'MARK LOUIE ARCEO' },
    { name: "	MARSON'S HARDWARE AND GENERAL MERCHANDISE	" },
    { name: 'MARY FLORENCE LEI NOBLEZA' },
    { name: 'MATHEW EDMUND KABIGTING' },
    { name: 'MAXICARE HEALTHCARE CORPORATION' },
    { name: 'MBB ROYALE INTERNATIONAL INC.' },
    { name: 'MCM ELECTRICAL SHOP' },
    { name: 'METALS INDUSTRY RESEARCH AND DEVELOPMENT CENTER' },
    { name: 'MERALCO' },
    { name: 'MICHAEL TALADUA' },
    { name: 'MICRO BIOLOGICAL LABORATORY INC' },
    { name: 'MICRO SCOTCH PRODUCTS CORPORATION' },
    { name: 'MORE THAN A CHAIR, INC.' },
    { name: 'MR. 8 AUTO CARE CENTER' },
    { name: 'MSC MEDITERRANEAN SHIPPING COMPANY PHIIPPINES INC.' },
    { name: 'MULTIFAST PRINTING SERVICES INC.' },
    { name: 'NAF GLOBAL, INC.' },
    { name: "	NANCY'S FABRIC TRADING	" },
    { name: 'NATHANIA HARDWARE TRADING' },
    { name: 'NATION PAPER PRODUCTS & PRINTING CORP' },
    { name: 'NELLY PAGARAN' },
    { name: 'NELSAN ENTERPRISE' },
    { name: 'NEW ERA BOXES MANUFACTURING  LTD., CO.' },
    { name: 'NFF INDUSTRIAL CORPORATION' },
    { name: 'NIKKO GAMBOA' },
    { name: 'NIÑO P. LIMIN' },
    { name: 'NOEL BONDOC' },
    { name: 'NPSS INC.' },
    { name: 'OBET CAR AIRCON' },
    { name: 'PACIENCIA KABIGTING' },
    { name: 'PACLA HYDRAULIC HOUSE' },
    { name: 'PAMCO STATIONERY SUPPLY, INC.' },
    { name: 'PAMPANGA CATL TRADING INC.' },
    { name: 'PAMPANGA CHAMBER OF COMMERCE AND INDUSTRY INC.' },
    { name: 'PAMPANGA FURNITURE INDUSTRIES FOUNDATION, INC.' },
    { name: 'PLDT' },
    { name: 'PRIMEWATER' },
    { name: 'PELCO III' },
    { name: 'PERLA RETORCA OR ROWEL CACDAC' },
    { name: 'PENANSHIN SHIPPING (PHILS.) INC.' },
    { name: 'PETER MUFFLER SHOP' },
    { name: 'PHILIP TAN' },
    { name: 'PHILIPPINE EXPORTERS CONFEDERATION, INC' },
    { name: 'PHILIPPINE EXPORTERS FOUNDATION REGION III INC.' },
    { name: 'PIONEER SPECIALTY BUILDING SYSTEMS,INC' },
    { name: 'PLASTICELL PACKAGING CORPORATION' },
    { name: 'PMT AUTO PARTS & TRADING' },
    { name: 'POLEON MANUFACTURING' },
    { name: 'PRINCE CHARLES ENTERPRISES PHILS. INC.' },
    { name: 'PROTECH SAFETY PRODUCTS AND GENERAL MERCHANDISE' },
    { name: 'PRUDENTIAL GUARANTEE' },
    { name: 'RAKKI 11 TRADING' },
    { name: 'RC PACKAGING SERVICES' },
    { name: 'RCK ELECTRICAL SUPPLY' },
    { name: 'REY Q. PORAS' },
    { name: 'RHODA S. REYES' },
    { name: 'ROBUST FARM INC.' },
    { name: 'RONALD R. BARLAM' },
    { name: 'ROWENA GAMBOA' },
    { name: 'RRCC MULTIFARIOUS DIECUTTING SERVICES' },
    { name: 'RUBY T. CO' },
    { name: 'SHIRLEY ANN KABIGTING OR PACIENCIA KABIGTING' },
    { name: 'S. DE LEON PRINTING SERVICES' },
    { name: 'SAN MATIAS DIAGNOSTIC LABORATORY' },
    { name: 'SANGUYU AUTO SUPPLY' },
    { name: 'SATO PHILIPPINES AUTO-ID SP INC.' },
    { name: 'SCHENKER PHILIPPINES, INC.' },
    { name: 'SCIENTIFIC STANDARD SERVICES INC' },
    { name: "	SEA-JET INT'L FORWARDERS,INC.	" },
    { name: 'SEVERO SY LING, INC.' },
    { name: 'SF ALLIED INDUSTRIAL PRODUCTS' },
    { name: 'SHINE TEAM PHILIPPINES CORPORATION' },
    { name: 'SHIPCO TRANSPORT PHILIPPINES INC' },
    { name: 'SPEEDMARK PHILIPPINES, INC.' },
    { name: 'STANDARD INSURANCE CO., INC' },
    { name: 'SUPER CERAMICS MALL, INC.' },
    { name: 'SWITCHTEK CONSTRUCTION CORPORATION' },
    { name: 'TERRACOTTA ARTWORKS, INC.' },
    { name: 'THE NEIGHBORHOODS AT ANVAYA COVE HOMEOWNERS ASSOCIATION, INC' },
    { name: 'THI LOGISTICS PHILIPPINES CORP.' },
    { name: 'TOYOTA MARILAO BULACAN INC.' },
    { name: 'TOYOTA PHILIPPINES' },
    { name: 'TRI AXIS WORLDWIDE LOGISTICS PHILS., INC.' },
    { name: 'TRI-ACE ENTERPRISES' },
    { name: 'TUV RHEINLAND PHILIPPINES, INC.' },
    { name: 'UNIFIED GEOTEST LABORATORY' },
    { name: 'UNITED BEARING INDUSTRIAL CORPORATION' },
    { name: 'UPS DELBROS INTL EXPRESS LTD INC' },
    { name: 'UPS SCS PHILIPPINES, INC.' },
    { name: 'VICTOR RESSURRECCION' },
    { name: 'WELLMANSON SEWING NOTION, INC.' },
    { name: "	YT INT'L PRINTING CORPORATION	" },
    { name: 'ZOILA DE VEGA' },
    { name: 'ZOSIMO QUIMAN' },
  ];

  // Get the collection
  const slCollection = db.collection('vendorsnamesuppliers');

  // Loop through each entry in slData and insert if the name doesn't already exist
  for (const data of vendorNameData) {
    const existingDoc = await slCollection.findOne({ name: data.name });

    if (existingDoc) {
      console.log(`Document with name ${data.name} already exists, skipping.`);
    } else {
      // Insert the new document if name doesn't exist
      await slCollection.insertOne(data);
      console.log(`Document with name ${data.name} inserted successfully.`);
    }
  }

  console.log(
    "Data inserted into 'vendorsnamesuppliers' collection successfully.",
  );
};

export const down = async () => {
  const db = await getDb();

  // Remove all records from 'vendorsnamesuppliers' collection
  await db.collection('vendorsnamesuppliers').deleteMany({});
};
