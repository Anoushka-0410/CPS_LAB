import fs from 'fs';
import csv from 'csv-parser';


function csvToJson(csvFilePath, jsonFilePath) {
  const results = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => {
        delete data['S.no.'];
        // data["Link"] = "https://drive.google.com/thumbnail?id=" + data["Link"].substr(32, 33);
        data["Link"] = "https://drive.google.com/uc?export=view&id=" + data["Link"].substr(32, 33);
        results.push(data);
    })
    .on('end', () => {
      fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
      console.log(`CSV file has been converted to JSON and saved to ${jsonFilePath}`);
    });
}

const csvFilePath = 'CPS-Lab-Members-List - Sheet1.csv'; 
const jsonFilePath = 'cps-lab-members-list.json'; 

csvToJson(csvFilePath, jsonFilePath);
