import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();

  // Insert data into 'gl' collection
  const customerNameData = [
    { name: 'ANTHROPOLOGIE' },
    { name: 'ARDMORE HOME DESIGN INC.' },
    { name: 'ARTERIORS HOME' },
    { name: 'BONNIE & NEIL' },
    { name: 'BRIDGEBLUE' },
    { name: 'CURREY INTERNATIONAL, INC' },
    { name: 'DUSTY DECO' },
    { name: 'EUROMARKET DESIGNS, INC.' },
    { name: 'LA FORGE DESIGNS INC./VARALUZ' },
    { name: 'GALLERY DIRECT LTD.' },
    { name: 'HAVE YOU MET MISS JONES' },
    { name: 'HK LIVING' },
    { name: 'HOLLANDER' },
    { name: 'HOME and SOUL ' },
    { name: 'HOMEGOODS' },
    { name: 'HOUSE DOCTOR/SOCIETY OF LIFESTYLE' },
    { name: 'IXIA REGAL S.A.' },
    { name: 'MADEWELL' },
    { name: 'MAKERS PALM' },
    { name: 'NF ASIAN (BRUCS CASA SL)' },
    { name: 'PREMIER HOUSEWARES LTD.' },
    { name: 'PACIFIC LIFESTYLE' },
    { name: 'PARLANE INTERNATIONAL' },
    { name: 'POTTERY BARN' },
    { name: 'PORT TO PORT IMPORTS INC.' },
    { name: 'RIPLEY / TIENDAS' },
    { name: 'SAIKA CO., LTD.' },
    { name: 'SERVELITE UK LTD' },
    { name: 'S.H.RETAIL PVT LTD' },
    { name: 'SOHO HOME LIMITED' },
    { name: 'STEINHOFF' },
    { name: 'TARGET LIGHTING MFGT. CORP' },
    { name: 'TARGET STORES' },
    { name: 'THE IMPORT COLLECTION' },
    { name: 'THE NATURAL LIGHT' },
    { name: 'TROYCOR LIGHTNING CORP.' },
    { name: 'VIP AND FRIENDS' },
    { name: 'WEYLANDS' },
    { name: 'WILLIAM SONOMA INC.' },
    { name: 'WIND & WEATHER' },
    { name: 'YAYA BV' },
  ];

  // Get the collection
  const slCollection = db.collection('customersname');

  // Loop through each entry in slData and insert if the name doesn't already exist
  for (const data of customerNameData) {
    const existingDoc = await slCollection.findOne({ name: data.name });

    if (existingDoc) {
      console.log(`Document with name ${data.name} already exists, skipping.`);
    } else {
      // Insert the new document if name doesn't exist
      await slCollection.insertOne(data);
      console.log(`Document with name ${data.name} inserted successfully.`);
    }
  }

  console.log("Data inserted into 'customersname' collection successfully.");
};

export const down = async () => {
  const db = await getDb();

  // Remove all records from 'vendorsnamesuppliers' collection
  await db.collection('customersname').deleteMany({});
};
